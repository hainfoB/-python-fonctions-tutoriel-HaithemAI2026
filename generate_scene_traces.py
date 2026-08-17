import json
import signal
import contextlib
import io
import builtins
import pathlib
import sys


class Timeout(Exception):
    pass


def alarm_handler(signum, frame):
    raise Timeout()


def safe_repr(value, limit=180):
    try:
        return repr(value)[:limit]
    except Exception:
        return '<unavailable>'


def line_meta(source_lines, lineno):
    raw = source_lines[lineno - 1] if 0 < lineno <= len(source_lines) else ''
    stripped = raw.strip()
    indent = len(raw) - len(raw.lstrip(' '))
    kind = 'statement'
    if stripped.startswith(('if ', 'elif ', 'else:')):
        kind = 'branch'
    elif stripped.startswith(('for ', 'while ')):
        kind = 'loop'
    elif stripped.startswith('def '):
        kind = 'definition'
    elif stripped.startswith('return'):
        kind = 'return'
    elif stripped.startswith('print'):
        kind = 'output'
    elif '=' in stripped:
        kind = 'assignment'
    return raw, stripped, indent, kind


def annotate_decisions(states):
    for index, state in enumerate(states):
        next_state = states[index + 1] if index + 1 < len(states) else None
        if state['kind'] == 'branch':
            state['branch_taken'] = bool(
                next_state
                and next_state['frame'] == state['frame']
                and next_state['event'] in ('line', 'call')
                and next_state['indent'] > state['indent']
            )
        if state['kind'] == 'loop':
            state['iteration'] = state.get('iteration', 0)
        if state['event'] == 'return':
            state['return_value'] = state.get('return_value', '')
    return states


def run_scene(scene):
    states = []
    output = io.StringIO()
    source = scene['code']
    source_lines = source.splitlines()
    loop_counts = {}
    seed_values = {
        'valeurs': [4, 7, 2, 9],
        'eleves': [
            {'id': 1, 'nom': 'Amina', 'note': 14, 'notes': [12, 14, 16], 'moyenne': 14},
            {'id': 2, 'nom': 'Yanis', 'note': 11, 'notes': [10, 11, 12], 'moyenne': 11},
        ],
        'pile': [1, 2, 3],
        'file': [1, 2, 3],
        'historique': [],
        'notes': [12, 14, 16, 10],
        'contient': lambda *args: False,
        'est_pair': lambda n: n % 2 == 0,
        'arbre': {'valeur': 'racine', 'enfants': []},
    }
    initial_seed = {name: safe_repr(value) for name, value in seed_values.items()}

    def visible_locals(frame):
        visible = {}
        for name, value in frame.f_locals.items():
            if name.startswith('__'):
                continue
            rendered = safe_repr(value)
            if name not in initial_seed or rendered != initial_seed[name]:
                visible[name] = rendered
        return visible

    def tracer(frame, event, arg):
        if frame.f_code.co_filename != '<scene>':
            return tracer
        if event not in ('call', 'line', 'return'):
            return tracer
        if event == 'call' and frame.f_code.co_name == '<module>':
            return tracer
        raw, stripped, indent, kind = line_meta(source_lines, frame.f_lineno)
        key = (frame.f_code.co_name, frame.f_lineno)
        iteration = None
        if event == 'line' and kind == 'loop':
            loop_counts[key] = loop_counts.get(key, 0) + 1
            iteration = loop_counts[key]
        states.append({
            'line': frame.f_lineno,
            'source_line': raw,
            'event': event,
            'frame': frame.f_code.co_name,
            'indent': indent,
            'kind': 'return' if event == 'return' else kind,
            'iteration': iteration,
            'locals': visible_locals(frame),
            'return_value': safe_repr(arg) if event == 'return' and arg is not None else '',
            'output_so_far': output.getvalue()[:500],
        })
        return tracer

    old_input = builtins.input
    builtins.input = lambda prompt='': '0'
    signal.signal(signal.SIGALRM, alarm_handler)
    signal.alarm(2)
    try:
        with contextlib.redirect_stdout(output):
            oldtrace = sys.gettrace()
            sys.settrace(tracer)
            try:
                base = {'__name__': '__scene__', **seed_values}
                exec(compile(source, '<scene>', 'exec'), base)
            finally:
                sys.settrace(oldtrace)
        status = 'ok'
    except Exception as exc:
        status = f'{type(exc).__name__}: {exc}'
    except BaseException as exc:
        status = f'{type(exc).__name__}: {exc}'
    finally:
        signal.alarm(0)
        builtins.input = old_input
    return {
        'status': status,
        'output': output.getvalue()[:500],
        'states': annotate_decisions(states[:180]),
    }


src = json.loads(pathlib.Path('scene-sources.json').read_text())
traces = {}
for number, scene in enumerate(src, 1):
    traces[scene['key']] = {**scene, **run_scene(scene)}
    if number % 25 == 0:
        print(f'traced {number}/{len(src)}')
pathlib.Path('scene-traces.json').write_text(json.dumps(traces, ensure_ascii=False, indent=2))
print(f'Wrote {len(traces)} traces')
