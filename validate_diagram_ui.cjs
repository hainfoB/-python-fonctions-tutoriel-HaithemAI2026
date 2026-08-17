const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const app = fs.readFileSync('app.js', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');
const tracesSource = fs.readFileSync('scene_traces.js', 'utf8').replace(/^window\.SCENE_TRACES\s*=\s*/, '').replace(/;\s*$/m, '');
const traces = JSON.parse(tracesSource);

const requiredIds = ['basics','logic','functions','vectors','dictionaries','records','stacks','queues','trees','statistics','conditions_nested','conditions_multiple','for_range','while_loop'];
const chapterIds = requiredIds.slice();
const sceneForChapter = id => Object.keys(traces).find(key => key.startsWith(`${id}:`));
const hasState = predicate => Object.values(traces).some(trace => trace.states?.some(predicate));
const checks = {
  chapterCount: chapterIds.length === 14 && html.includes('CHAPITRES 01—14'),
  chapterIds: requiredIds.every(id => chapterIds.includes(id)),
  sceneCoverage: requiredIds.every(id => Boolean(sceneForChapter(id))),
  sixNodes: ['source','compile','frame','memory','compute','output'].every(id => app.includes(`'${id}'`)),
  controls: ['diagramPrevious','diagramPlay','diagramNext','diagramReset'].every(id => html.includes(`id="${id}"`)),
  realTraceBinding: ['realSceneStates','memoryTraceOverride','SCENE_TRACES'].every(id => app.includes(id)),
  sceneMechanisms: ['branch_taken','iteration','return_value','state.kind===\'branch\'','state.kind===\'loop\'','event===\'return\''].every(token => app.includes(token)) && hasState(state => state.kind === 'branch' && typeof state.branch_taken === 'boolean') && hasState(state => state.kind === 'loop' && Number.isInteger(state.iteration)) && hasState(state => state.event === 'return' && state.return_value !== undefined) && hasState(state => Object.keys(state.after_locals || state.locals || {}).length > 0),
  responsive: css.includes('@media (max-width:760px)') && css.includes('@media (prefers-reduced-motion:reduce)'),
  accessible: html.includes('aria-live="polite"') && html.includes('aria-label="Pile d’appels"'),
};
const report = {checks, chapterIds, scenes: requiredIds.map(id => ({id, scene: sceneForChapter(id)})), passed: Object.values(checks).every(Boolean)};
fs.writeFileSync('diagram-ui-coverage.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
if (!report.passed) process.exit(1);
