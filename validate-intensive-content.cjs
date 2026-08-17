const fs = require('fs');
const vm = require('vm');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync('extra_content.js', 'utf8'), context);
vm.runInContext(fs.readFileSync('extended.js', 'utf8'), context);
const chapters = context.window.EXTENDED_CHAPTERS;
const ids = ['basics', 'logic', 'functions', 'vectors', 'dictionaries', 'records', 'stacks', 'queues', 'trees', 'statistics'];
const errors = [];
const skeletonPattern = /TODO|à compléter|a completer|placeholder|squelette|coming soon|lorem ipsum/i;
function localized(value, path) {
  if (!value || typeof value !== 'object' || typeof value.fr !== 'string' || typeof value.en !== 'string' || !value.fr.trim() || !value.en.trim()) {
    errors.push(`${path}: missing bilingual fr/en text`);
    return;
  }
  if (skeletonPattern.test(value.fr) || skeletonPattern.test(value.en)) errors.push(`${path}: skeleton marker found`);
}
function code(value, path) {
  if (typeof value !== 'string' || value.trim().length < 8) errors.push(`${path}: missing or too-short code`);
}
for (const id of ids) {
  const chapter = chapters[id];
  if (!chapter) { errors.push(`${id}: missing chapter`); continue; }
  if (!Array.isArray(chapter.examples) || chapter.examples.length !== 10) errors.push(`${id}: expected 10 examples`);
  if (!Array.isArray(chapter.exercises) || chapter.exercises.length !== 15) errors.push(`${id}: expected 15 exercises`);
  for (const [index, item] of (chapter.examples || []).entries()) {
    localized(item.title, `${id}.examples[${index}].title`);
    localized(item.context, `${id}.examples[${index}].context`);
    code(item.code, `${id}.examples[${index}].code`);
    localized(item.explanation, `${id}.examples[${index}].explanation`);
  }
  for (const [index, item] of (chapter.exercises || []).entries()) {
    localized(item.title, `${id}.exercises[${index}].title`);
    localized(item.prompt, `${id}.exercises[${index}].prompt`);
    code(item.solution, `${id}.exercises[${index}].solution`);
    localized(item.correction, `${id}.exercises[${index}].correction`);
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('Validated: 10 chapters, 100 bilingual examples, 150 bilingual solved exercises, no skeleton markers.');
