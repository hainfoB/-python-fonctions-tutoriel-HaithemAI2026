import json, signal, contextlib, io, builtins, pathlib

class Timeout(Exception): pass

def alarm_handler(signum, frame): raise Timeout()

def run_scene(scene):
    states=[]; output=io.StringIO(); source=scene['code']
    def tracer(frame,event,arg):
        if frame.f_code.co_filename != '<scene>': return tracer
        if event in ('line','return'):
            values={k:repr(v)[:180] for k,v in frame.f_locals.items() if not k.startswith('__')}
            states.append({'line':frame.f_lineno,'event':event,'locals':values,'return':repr(arg)[:180] if event=='return' else ''})
        return tracer
    old_input=builtins.input
    builtins.input=lambda prompt='': '0'
    signal.signal(signal.SIGALRM, alarm_handler); signal.alarm(2)
    try:
        with contextlib.redirect_stdout(output):
            import sys
            oldtrace=sys.gettrace();sys.settrace(tracer)
            try: exec(compile(source,'<scene>','exec'),{'__name__':'__scene__'})
            finally: sys.settrace(oldtrace)
        status='ok'
    except Exception as exc:
        status=f'{type(exc).__name__}: {exc}'
    except BaseException as exc:
        status=f'{type(exc).__name__}: {exc}'
    finally:
        signal.alarm(0);builtins.input=old_input
    return {'status':status,'output':output.getvalue()[:500],'states':states[:120]}

src=json.loads(pathlib.Path('scene-sources.json').read_text())
traces={}
for n,scene in enumerate(src,1):
    traces[scene['key']]={**scene,**run_scene(scene)}
    if n%25==0: print(f'traced {n}/{len(src)}')
pathlib.Path('scene-traces.json').write_text(json.dumps(traces,ensure_ascii=False,indent=2))
print(f'Wrote {len(traces)} traces')
