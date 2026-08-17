const fs = require('fs');
const vm = require('vm');
const root = process.cwd();
const context = { window: {} };
vm.createContext(context);
for (const file of ['extra_content.js', 'extended.js', 'generalized_content.js']) {
  vm.runInContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
}
const L = value => value?.en || value?.fr || value || '';
const esc = value => `#text(${JSON.stringify(String(value ?? ''))})`;
const raw = value => `#raw(block: true, lang: "python", ${JSON.stringify(String(value ?? ''))})`;
const codeLine = value => String(value ?? '').replaceAll('\\', '\\\\').replaceAll('#', '\\#');
const complexity = code => {
  const s = String(code || '');
  if (/for[\\s\\S]*for/.test(s) || /while[\\s\\S]*while/.test(s)) return 'Time O(n²) · space O(1)';
  if (/\\b(for|while)\\b/.test(s)) return 'Time O(n) · space O(1)';
  return 'Time O(1) · space O(1)';
};
const titles = {
  basics: 'Python foundations', logic: 'Overview: decisions and repetition', functions: 'Functions and memory', vectors: 'Vectors and lists', dictionaries: 'Dictionaries', records: 'Records', stacks: 'Stacks', queues: 'Queues', trees: 'Trees', statistics: 'Introduction to statistics',
  conditions_nested: 'Nested conditions', conditions_multiple: 'Multiple conditions', for_range: 'for in range loops', while_loop: 'while loops'
};
const old = context.window.EXTENDED_CHAPTERS || {};
const paths = Object.entries(old).map(([id, data]) => [id, data]);
for (const data of context.window.GENERALIZED_CHAPTERS || []) paths.push([data.id, data]);
const bloom = {
  basics: ['Remember', 'Identify a variable, its type and its current value.'], logic: ['Understand', 'Explain why a branch or repetition path is selected.'], functions: ['Apply', 'Trace parameters, local variables and returned values.'], vectors: ['Analyze', 'Distinguish positions, values and accumulators.'], dictionaries: ['Analyze', 'Relate a meaningful key to its associated value.'], records: ['Evaluate', 'Validate fields and data before calculation.'], stacks: ['Apply', 'Simulate LIFO operations and predict the top.'], queues: ['Apply', 'Simulate FIFO service order.'], trees: ['Analyze', 'Trace recursive frames and stopping cases.'], statistics: ['Evaluate', 'Interpret indicators and the effect of extreme values.'], conditions_nested: ['Analyze', 'Trace an outer decision followed by an inner decision.'], conditions_multiple: ['Evaluate', 'Defend branch order and boundary choices.'], for_range: ['Apply', 'Predict every range value and calculate iteration cost.'], while_loop: ['Analyze', 'Prove progress and termination using memory states.']
};
const memoryTrace = code => {
  const lines = String(code || '').split('\\n');
  const env = {};
  const output = [];
  const valueOf = expr => { try { const js = expr.replaceAll('True','true').replaceAll('False','false').replaceAll(' and ',' && ').replaceAll(' or ',' || ').replaceAll('//','/'); const names = Object.keys(env); const value = Function(...names, `return (${js})`)(...names.map(name => env[name])); return value === undefined ? expr : value; } catch { return expr; } };
  let step = 0;
  for (const original of lines) {
    const line = original.trim(); if (!line) continue; step += 1;
    const loop = line.match(/^for\\s+([A-Za-z_]\\w*)\\s+in\\s+range\\(([^)]*)\\):/);
    if (loop) { const nums = loop[2].split(',').map(x => Number(x.trim())); let start = 0, stop = nums[0], stride = 1; if (nums.length > 1) { start = nums[0]; stop = nums[1]; } if (nums.length > 2) stride = nums[2]; const values = []; for (let v = start, n = 0; (stride > 0 ? v < stop : v > stop) && n < 30; v += stride, n++) values.push(v); output.push(`${step}. ${esc(line)} → iteration values: ${esc(values.join(', '))}; memory allocates a loop variable.`); continue; }
    const assignment = line.match(/^([A-Za-z_]\\w*)\\s*=\\s*(.+)$/); const compound = line.match(/^([A-Za-z_]\\w*)\\s*([+*/-])=\\s*(.+)$/);
    if (assignment && !line.startsWith('if ')) { const name = assignment[1]; const value = valueOf(assignment[2]); env[name] = value; output.push(`${step}. ${esc(line)} → ${esc(name)} is stored with value ${esc(String(value))}.`); continue; }
    if (compound) { const name = compound[1]; const right = valueOf(compound[3]); const before = env[name]; let value = `${before} ${compound[2]} ${right}`; if (typeof before === 'number' && typeof right === 'number') value = compound[2] === '+' ? before + right : compound[2] === '-' ? before - right : compound[2] === '*' ? before * right : before / right; env[name] = value; output.push(`${step}. ${esc(line)} → ${esc(name)} changes from ${esc(String(before ?? 'undefined'))} to ${esc(String(value))}.`); continue; }
    if (line.startsWith('print')) { output.push(`${step}. ${esc(line)} → output event: current memory values are sent to the screen.`); continue; }
    if (line.startsWith('return')) { output.push(`${step}. ${esc(line)} → return transfers a value to the caller and closes the local frame.`); continue; }
    output.push(`${step}. ${esc(line)} → the instruction is evaluated; the previous memory state remains available.`);
  }
  return output.join('\\n');
};
let out = `#import "report-theme.typ": report-accent, report-theme\n\n#show: report-theme.with(\n  title: "Berkane Lab — Python Intensive Manual",\n  author: "M. Haithem BERKANE",\n  rhythm: "report",\n  running-header: true,\n)\n\n#set page(numbering: "1", header: [*Berkane Lab · Python Intensive Manual*], footer: [M. Haithem BERKANE · Berkane Lab · #context counter(page).display()])\n\n#page(margin: (top: 18%, bottom: 16%, x: 2.2cm), numbering: none, header: none, footer: none)[\n  #align(center)[\n    #image("berkane-lab-mark.png", width: 3.2cm)\n    #v(1.4em)\n    #text(size: 30pt, weight: "bold", fill: report-accent)[Berkane Lab]\n    #v(0.5em)\n    #text(size: 25pt, weight: "bold")[Python Intensive Manual]\n    #v(0.8em)\n    #text(size: 14pt, fill: luma(90))[Memory traces · conditions · loops · Bloom taxonomy · competency-based learning]\n    #v(2em)\n    #line(length: 65%, stroke: 1pt + report-accent)\n    #v(2em)\n    #text(size: 13pt)[English edition]\n    #v(0.5em)\n    #text(size: 14pt, weight: "bold")[M. Haithem BERKANE]\n    #v(0.5em)\n    #text(size: 10pt, fill: luma(80))[Learning engineering · Artificial intelligence · Python education]\n    #v(3em)\n    #text(size: 10pt)[Fourteen learning paths · 140 worked examples · 210 solved exercises]\n  ]\n]\n\n#page(numbering: none, header: none, footer: none)[\n  = Preface\n  This English edition is designed as a complete teaching companion for a learner who needs to move from code reading to independent algorithmic reasoning. The book combines worked situations, corrected exercises, symbolic memory traces, intermediate values and complexity analysis. It is intended for classroom remediation, guided self-study and competency-based assessment.\n\n  == How to use this book\n  For every scene, first read the situation and predict the next state. Then inspect the code line by line. Record the value stored in each variable, identify the active branch or iteration, and state the time and space complexity. Finally, explain the result in your own words.\n\n  == Content at a glance\n  #table(columns: (1fr, 1fr), inset: 8pt, stroke: 0.4pt + luma(180), [*Learning paths*], [*14*], [*Worked examples*], [*140*], [*Solved exercises*], [*210*], [*Minimum progression score*], [*80% per path*], [*Languages*], [*English edition with French/English source content*])\n\n  == Learning objectives\n  By the end of this manual, the learner should be able to read Python syntax, predict intermediate values, trace variables through symbolic memory, explain conditions and loops, estimate time and space complexity, and defend a corrected solution with a boundary case.\n\n  == Bloom progression\n  Each path moves from remembering vocabulary to understanding traces, applying a pattern, analysing states and evaluating a solution. The memory laboratory makes the cognitive operation visible: the learner does not only see the final output, but also the values and decisions that produce it.\n\n  == A note about compilation and memory\n  Python source code is first read and compiled into an executable internal representation before the Python virtual machine executes it. This book uses a conceptual model rather than physical machine addresses. A symbolic address such as 0x1000 names a teaching location; it helps the learner distinguish a variable, its current value, a call frame and an output event.\n]\n\n#page(numbering: none, header: none, footer: none)[\n  = Contents\n  #outline(title: none, indent: 1.2em)\n]\n\n#pagebreak()\n= Author profile\n\n#image("berkane-lab-mark.png", width: 2.2cm)\n\n*M. Haithem BERKANE* is a software architect, senior IT consultant, artificial-intelligence practitioner and certified instructional-engineering professional. His work connects digital transformation, data, generative AI and accessible technical education.\n\n== Professional summary\n\nHe has worked as an independent AI consultant since 2021, supporting organisations with RAG architectures, private language-model solutions, data governance, full-stack systems and predictive analysis. He previously led business projects at Condor Academy, including institutional accreditation, ERP/SAP FICO integration, LMS deployment and digital-platform implementation. Earlier work as a specialised teacher and CIP instructional engineer shaped the remediation-oriented method used in this book.\n\n== Selected experience and portfolio\n\n#table(columns: (2.2cm, 1fr), inset: 7pt, stroke: 0.35pt + luma(185), [*Period*], [*Experience*], [*2021–present*], [Independent AI consultant and senior IT expert; RAG, LLM, data governance, architecture and mentoring.], [*2019–2020*], [Project business director at Condor Academy; SAP FICO, LMS, institutional projects and digital infrastructure.], [*2014–2021*], [Specialised teacher and CIP instructional engineer; continuing education and programme design.], [*Selected projects*], [Python and C educational simulator, ASR PRO secure online assessment, Moufid BI financial intelligence, Zakat Fitr civic platform.])\n\n== Educational impact\n\nThe author has created interactive learning resources, mentored students and teachers, delivered online sessions in Python, data analysis and AI, and supported learners in Algeria and the Algerian diaspora. This manual is part of that effort: it treats errors as information, makes reasoning observable and turns each correction into evidence of a competency.\n\n#pagebreak()\n= Learning method\n\nThe course follows a repeated cycle: *observe → predict → execute → explain → verify*. Each chapter begins with definitions and a model situation. The learner then examines worked examples, opens corrected exercises, and uses the memory laboratory to inspect state transitions.\n\n== Competency evidence\n\nA solution is not considered complete because it produces the expected output. The learner must also justify the control flow, identify the changing values, estimate complexity and explain why the algorithm terminates or returns the result.\n\n== Complexity vocabulary\n\n*Time complexity* estimates how the number of operations grows with the input size. *Space complexity* estimates additional memory used by the algorithm. A single arithmetic instruction is generally O(1); one complete traversal is generally O(n); two nested traversals may be O(n²). These are educational asymptotic models, not stopwatch measurements.\n\n`;
for (const [index, [id, chapter]] of paths.entries()) {
  const title = titles[id] || id;
  const examples = chapter.examples || [];
  const exercises = chapter.exercises || [];
  const [level, focus] = bloom[id] || ['Understand', 'Explain the observed state.'];
  out += `\n#pagebreak()\n= ${index + 1}. ${esc(title)}\n\n*Path volume:* ${examples.length} worked examples and ${exercises.length} solved exercises.  \n*Bloom level emphasis:* ${esc(level)}.  \n*Competency focus:* ${esc(focus)}\\n\\n== Learning objectives\\nBy the end of this path, the learner can ${esc(focus.toLowerCase())}, trace the selected examples and exercises in symbolic memory, explain intermediate values, and justify the reported complexity.\\n\\n`;
  if (chapter.subtitle?.en) out += `${esc(chapter.subtitle.en)}\n\n`;
  if (chapter.body?.en) out += `== Deep lesson\n${esc(chapter.body.en)}\n\n`;
  if (chapter.vocab?.length) {
    out += `== Definitions\n`;
    for (const v of chapter.vocab) out += `*${esc(L(v.word))}.* ${esc(L(v.definition))}  \n`;
    out += '\n';
  }
  out += `== Bloom and competency checkpoint\nAt this stage, the learner should be able to ${esc(focus.toLowerCase())}. Before reading the correction, predict the next memory state and name the evidence that would demonstrate mastery.\n\n`;
  out += `== Worked examples\n`;
  examples.forEach((item, i) => {
    const code = item.code || '';
    out += `=== Example ${i + 1}: ${esc(L(item.title))}\n\n*Situation.* ${esc(L(item.context))}\n\n${raw(code)}\n\n*Detailed walkthrough.* ${esc(L(item.explanation))}\n\n*Memory trace.*\n${memoryTrace(code)}\n\n*Complexity.* ${esc(L(item.complexity) || complexity(code))}\n\n`;
  });
  out += `== Solved exercises\n`;
  exercises.forEach((item, i) => {
    const code = item.solution || '';
    out += `=== Exercise ${i + 1}: ${esc(L(item.title))}\n\n*Task.* ${esc(L(item.prompt))}\n\n${raw(code)}\n\n*Correction.* ${esc(L(item.correction))}\n\n*Memory trace.*\n${memoryTrace(code)}\n\n*Complexity.* ${esc(L(item.complexity) || complexity(code))}\n\n`;
  });
}
out += `\n#pagebreak()\n= Final self-assessment\n\nTo complete the book, choose one example and one exercise from each path. For each one, write the initial state, the sequence of memory updates, the output, the complexity and the Bloom level mobilised. A competent explanation connects the code to its observable effects and can defend the chosen solution against a boundary case.\n\n#align(center)[*Berkane Lab · Python Intensive Manual · M. Haithem BERKANE*]\n`;
fs.writeFileSync(`${root}/typst-book/main.typ`, out);
console.log(`Generated professional Typst book from ${paths.length} paths, ${paths.reduce((n, [, c]) => n + c.examples.length, 0)} examples and ${paths.reduce((n, [, c]) => n + c.exercises.length, 0)} exercises.`);
