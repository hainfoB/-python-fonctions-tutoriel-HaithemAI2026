const fs = require('fs');
const vm = require('vm');
const context = { window: {} };
vm.createContext(context);
for (const file of ['extra_content.js', 'extended.js']) vm.runInContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
const chapters = context.window.EXTENDED_CHAPTERS;
const titles = {
  basics: 'Python foundations', logic: 'Conditions and loops', functions: 'Functions and memory', vectors: 'Vectors and lists', dictionaries: 'Dictionaries', records: 'Records', stacks: 'Stacks', queues: 'Queues', trees: 'Trees', statistics: 'Introduction to statistics'
};
let md = '# Berkane Lab — Python Intensive Manual\n\n**M. Haithem BERKANE**  \nBilingual course companion · English edition\n\nThis manual contains ten chapters, one hundred worked examples, and one hundred and fifty solved exercises. The situations are inspired by the supplied science, conditions, and loops exercise collections: physics, mathematics, biology, sport, chemistry, and data reasoning.\n\n';
for (const [id, chapter] of Object.entries(chapters)) {
  md += `## ${titles[id] || id}\n\n`;
  md += '### Worked examples\n\n';
  chapter.examples.forEach((item, index) => {
    md += `#### Example ${index + 1} — ${item.title.en}\n\n**Situation.** ${item.context.en}\n\n\`\`\`python\n${item.code}\n\`\`\`\n\n**Explanation.** ${item.explanation.en}\n\n`;
  });
  md += '### Solved exercises\n\n';
  chapter.exercises.forEach((item, index) => {
    md += `#### Exercise ${index + 1} — ${item.title.en}\n\n**Task.** ${item.prompt.en}\n\n\`\`\`python\n${item.solution}\n\`\`\`\n\n**Correction.** ${item.correction.en}\n\n`;
  });
}
md += '## Suggested learning routine\n\nRead one example, predict its output, run it, then explain the correction in your own words. For each exercise, first write a hypothesis, test boundary cases, and only then compare your solution with the correction.\n\n## Author\n\nM. Haithem BERKANE · Berkane Lab\n';
fs.writeFileSync('Berkane-Lab-Python-Intensive-English.md', md);
console.log(`Generated ${md.length} characters.`);
