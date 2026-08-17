import json, pathlib, collections
src=json.loads(pathlib.Path('scene-sources.json').read_text())
tr=json.loads(pathlib.Path('scene-traces.json').read_text())
report={'total':len(src),'ok':0,'with_states':0,'with_output_or_return':0,'by_kind':collections.Counter(),'failures':[],'warnings':[]}
for scene in src:
    t=tr.get(scene['key'],{}); report['by_kind'][scene['kind']]+=1
    if t.get('status')=='ok': report['ok']+=1
    else: report['failures'].append({'key':scene['key'],'status':t.get('status','missing')})
    if t.get('states'): report['with_states']+=1
    if t.get('output') or any(s.get('event')=='return' for s in t.get('states',[])): report['with_output_or_return']+=1
    if not t.get('states'): report['warnings'].append({'key':scene['key'],'reason':'no memory states'})
    if len(t.get('states',[]))>120: report['warnings'].append({'key':scene['key'],'reason':'trace truncated at 120 states'})
report['by_kind']=dict(report['by_kind'])
report['coverage']={k:round(report[k]/report['total']*100,2) for k in ['ok','with_states','with_output_or_return']}
pathlib.Path('scene-trace-coverage.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
print(json.dumps({'total':report['total'],'ok':report['ok'],'states':report['with_states'],'output_or_return':report['with_output_or_return'],'coverage':report['coverage'],'failures':len(report['failures']),'warnings':len(report['warnings'])},ensure_ascii=False))
if report['ok']<report['total'] or report['with_states']<report['total'] or report['with_output_or_return']<report['total']:
    raise SystemExit(1)
