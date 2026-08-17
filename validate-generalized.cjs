const fs = require('fs');
const vm = require('vm');
const source = fs.readFileSync('./generalized_content.js','utf8');
const context = { window: {}, console };
vm.runInNewContext(source, context);
const chapters = context.window.GENERALIZED_CHAPTERS || [];
if (chapters.length !== 4) throw new Error(`Expected 4 specialized chapters, got ${chapters.length}`);
for (const chapter of chapters) {
  if (chapter.examples.length !== 10) throw new Error(`${chapter.id}: expected 10 examples`);
  if (chapter.exercises.length !== 15) throw new Error(`${chapter.id}: expected 15 exercises`);
  for (const item of [...chapter.examples, ...chapter.exercises]) {
    for (const key of ['title','context','explanation']) {
      if (item[key] && (!item[key].fr || !item[key].en)) throw new Error(`${chapter.id}: ${key} is not bilingual`);
    }
    if (!item.code && !item.solution) throw new Error(`${chapter.id}: missing executable code`);
    if (item.complexity && (!item.complexity.fr || !item.complexity.en)) throw new Error(`${chapter.id}: missing bilingual complexity`);
  }
}
const nested = chapters.find(c => c.id === 'conditions_nested');
const multiple = chapters.find(c => c.id === 'conditions_multiple');
const forRange = chapters.find(c => c.id === 'for_range');
const whileLoop = chapters.find(c => c.id === 'while_loop');
if (!nested.examples.some(x => /if[\s\S]+if/.test(x.code))) throw new Error('Nested conditions are missing nested if');
if (!multiple.examples.some(x => /elif/.test(x.code))) throw new Error('Multiple conditions are missing elif');
if (!forRange.examples.every(x => /for\s+\w+\s+in\s+range/.test(x.code))) throw new Error('for_range examples must use for in range');
if (!whileLoop.examples.every(x => /while\s+/.test(x.code))) throw new Error('while examples must use while');
console.log(`Validated ${chapters.length} specialized chapters: 40 examples and 60 exercises, bilingual complexity and required control structures.`);
