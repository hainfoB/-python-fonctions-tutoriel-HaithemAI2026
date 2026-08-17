const fs = require('fs');
const vm = require('vm');
const context = { window: {} };
vm.createContext(context);
for (const file of ['extra_content.js', 'extended.js', 'generalized_content.js']) {
  vm.runInContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
}
const titles = {
  basics: 'Python foundations', logic: 'Overview: decisions and repetition', functions: 'Functions and memory', vectors: 'Vectors and lists', dictionaries: 'Dictionaries', records: 'Records', stacks: 'Stacks', queues: 'Queues', trees: 'Trees', statistics: 'Introduction to statistics',
  conditions_nested: 'Nested conditions', conditions_multiple: 'Multiple conditions', for_range: 'for in range loop', while_loop: 'while loop'
};
const chapters = [];
const extended = context.window.EXTENDED_CHAPTERS || {};
for (const [id, chapter] of Object.entries(extended)) chapters.push([id, chapter]);
for (const chapter of context.window.GENERALIZED_CHAPTERS || []) {
  chapters.push([chapter.id, { title: chapter.title, examples: chapter.examples, exercises: chapter.exercises }]);
}
const exampleCount = chapters.reduce((sum, [, c]) => sum + c.examples.length, 0);
const exerciseCount = chapters.reduce((sum, [, c]) => sum + c.exercises.length, 0);
let md = `# Berkane Lab — Python Intensive Manual\n\n**M. Haithem BERKANE**  \nEnglish edition · memory traces · Bloom taxonomy · competency-based learning\n\nThis manual contains ${chapters.length} learning paths, ${exampleCount} worked examples, and ${exerciseCount} solved exercises. It covers nested and multiple conditions, separate **for in range** and **while** loops, memory states, intermediate values, and time/space complexity.\n\n`;
for (const [id, chapter] of chapters) {
  md += `## ${titles[id] || id}\n\n`;
  md += '### Worked examples\n\n';
  chapter.examples.forEach((item, index) => {
    const complexity = item.complexity?.en ? `\n\n**Complexity.** ${item.complexity.en}` : '';
    md += `#### Example ${index + 1} — ${item.title.en}\n\n**Situation.** ${item.context.en}\n\n\`\`\`python\n${item.code}\n\`\`\`\n\n**Explanation.** ${item.explanation.en}${complexity}\n\n`;
  });
  md += '### Solved exercises\n\n';
  chapter.exercises.forEach((item, index) => {
    const complexity = item.complexity?.en ? `\n\n**Complexity.** ${item.complexity.en}` : '';
    md += `#### Exercise ${index + 1} — ${item.title.en}\n\n**Task.** ${item.prompt.en}\n\n\`\`\`python\n${item.solution}\n\`\`\`\n\n**Correction.** ${item.correction.en}${complexity}\n\n`;
  });
}
md += '## Suggested learning routine\n\nFor each scene, identify initial values, predict the next memory state, trace the calculation, count iterations, and state the time and space complexity. Then explain which Bloom level is being practiced and provide evidence of the targeted competency.\n\n## Author\n\nM. Haithem BERKANE · Berkane Lab\n';
fs.writeFileSync('Berkane-Lab-Python-Intensive-English.md', md);
console.log(`Generated ${md.length} characters from ${chapters.length} paths, ${exampleCount} examples, and ${exerciseCount} exercises.`);
