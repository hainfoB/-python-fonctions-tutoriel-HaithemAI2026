const fs = require('fs');
const vm = require('vm');
const context = { window: {} };
vm.createContext(context);
for (const file of ['extra_content.js', 'extended.js']) vm.runInContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
const chapters = context.window.EXTENDED_CHAPTERS;
const ids = ['basics','logic','functions','vectors','dictionaries','records','stacks','queues','trees','statistics'];
for (const id of ids) {
  const chapter = chapters[id];
  if (!chapter || chapter.examples.length !== 10 || chapter.exercises.length !== 15) throw new Error(`${id}: ${chapter?.examples.length}/${chapter?.exercises.length}`);
  for (const item of [...chapter.examples, ...chapter.exercises]) {
    const values = item.title && item.context ? [item.title, item.context] : [item.title, item.prompt, item.correction];
    if (values.some((value) => !value?.fr || !value?.en)) throw new Error(`${id}: missing bilingual field`);
    if (!item.code && !item.solution) throw new Error(`${id}: missing code or solution`);
  }
}
console.log(`Validated ${ids.length} chapters: ${ids.length * 10} examples and ${ids.length * 15} exercises.`);
