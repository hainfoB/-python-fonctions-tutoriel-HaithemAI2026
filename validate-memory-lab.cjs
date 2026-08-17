const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');
const app = fs.readFileSync('app.js', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');
const required = [
  ['memory section', index, 'id="memorySection"'],
  ['previous control', index, 'id="memoryPrevious"'],
  ['play control', index, 'id="memoryPlay"'],
  ['next control', index, 'id="memoryNext"'],
  ['reset control', index, 'id="memoryReset"'],
  ['Bloom mapping', app, 'const bloomByChapter'],
  ['memory renderer', app, 'function renderMemory'],
  ['step navigation', app, 'function stepMemory'],
  ['reduced motion', css, 'prefers-reduced-motion:reduce'],
  ['memory highlight', css, '.memory-line.active'],
];
const missing = required.filter(([, source, needle]) => !source.includes(needle));
if (missing.length) throw new Error(missing.map(([name]) => `Missing ${name}`).join('\n'));
const chapterIds = ['basics','logic','functions','vectors','dictionaries','records','stacks','queues','trees','statistics'];
for (const id of chapterIds) if (!app.includes(`${id}:{level:`)) throw new Error(`Missing Bloom/APC mapping for ${id}`);
console.log(`Validated memory lab: ${chapterIds.length} Bloom/APC mappings, controls, animation states, and reduced-motion support.`);
