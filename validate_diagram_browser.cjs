const { spawn } = require('child_process');
const fs = require('fs');

const root = '/home/ubuntu/github-pages-python-tutoriel';
const chrome = process.env.CHROMIUM || 'chromium';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitForJson(url, retries = 50) {
  for (let attempt = 0; attempt < retries; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();
    } catch {}
    await sleep(100);
  }
  throw new Error(`No DevTools endpoint at ${url}`);
}

async function connect(wsUrl) {
  const socket = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true });
    socket.addEventListener('error', reject, { once: true });
  });
  let sequence = 0;
  const pending = new Map();
  socket.addEventListener('message', event => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      message.error ? reject(new Error(message.error.message)) : resolve(message.result);
    }
  });
  return {
    send(method, params = {}) {
      const id = ++sequence;
      socket.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
    },
    close() { socket.close(); },
  };
}

async function runViewport(name, width, height) {
  const port = width === 390 ? 9224 : 9223;
  const process = spawn(chrome, [
    '--headless=new', '--no-sandbox', '--disable-gpu', '--allow-file-access-from-files',
    `--remote-debugging-port=${port}`, `--window-size=${width},${height}`, 'about:blank',
  ], { stdio: 'ignore' });
  try {
    const pages = await waitForJson(`http://127.0.0.1:${port}/json`);
    const page = pages.find(item => item.type === 'page');
    const client = await connect(page.webSocketDebuggerUrl);
    await client.send('Page.enable');
    await client.send('Runtime.enable');
    await client.send('Page.navigate', { url: `file://${root}/index.html?browser-validation=${name}` });
    await sleep(900);
    const setupExpression = `(() => {
      const idx = chapters.findIndex(c => c.id === 'for_range');
      active = idx; memoryStep = 0; memoryProgramOverride = null; memoryComplexityOverride = null; memoryTraceOverride = null; render();
      document.querySelector('#memorySourceSelector button')?.click();
      document.querySelector('#memoryDiagram')?.scrollIntoView({ block: 'start' });
      return true;
    })()`;
    await client.send('Runtime.evaluate', { expression: setupExpression, returnByValue: true, awaitPromise: true });
    await sleep(700);
    const expression = `(() => {
      const nodes = [...document.querySelectorAll('.diagram-node')];
      const controls = [...document.querySelectorAll('.diagram-controls button')];
      const panel = document.querySelector('#memoryDiagram');
      const track = document.querySelector('#memoryDiagramTrack');
      const before = document.querySelector('#diagramStageLabel')?.textContent;
      document.querySelector('#diagramNext')?.click();
      const after = document.querySelector('#diagramStageLabel')?.textContent;
      const rects = nodes.map(node => { const r = node.getBoundingClientRect(); return { x:r.x, y:r.y, width:node.offsetWidth || r.width, height:node.offsetHeight || r.height }; });
      const controlRects = controls.map(node => { const r = node.getBoundingClientRect(); return { width:r.width, height:r.height, visible:r.width > 0 && r.height > 0 }; });
      return { width: innerWidth, nodes:nodes.length, controls:controls.length, before, after, advanced:before !== after, rects, controlRects, panelBox:{width:panel?.offsetWidth||0,height:panel?.offsetHeight||0}, trackBox:{width:track?.offsetWidth||0,height:track?.offsetHeight||0,scrollWidth:track?.scrollWidth||0}, scrollY };
    })()`;
    const result = await client.send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    const sceneExpression = `(() => {
      const failures=[];
      let tested=0;
      for(let chapterIndex=0;chapterIndex<chapters.length;chapterIndex+=1){
        active=chapterIndex;memoryStep=0;memoryProgramOverride=null;memoryComplexityOverride=null;memoryTraceOverride=null;render();
        const chapter=chapters[chapterIndex];
        const keys=[...document.querySelectorAll('.memory-source-button')].map(button=>button.dataset.memoryScene);
        for(const key of keys){
          const action=document.querySelector('.scene-diagram-action[data-memory-scene="'+key+'"]');
          action?.click();
          const trace=window.SCENE_TRACES[key];
          const expected=trace?.states?.[0]?('L'+trace.states[0].line+' · '+trace.states[0].source_line):'';
          const actual=document.querySelector('.stage-source code')?.textContent||'';
          const activeKey=document.querySelector('.memory-source-button.active')?.dataset.memoryScene||'';
          const nodes=document.querySelectorAll('.diagram-node').length;
          const before=document.querySelector('#diagramStageLabel')?.textContent;
          document.querySelector('#diagramNext')?.click();
          const after=document.querySelector('#diagramStageLabel')?.textContent;
          const noModuleReturn=!/[<]module[>]\s*→\s*retour/.test(document.querySelector('.stage-frame code')?.textContent||'');
          const transitionOk=Boolean(document.querySelector('#memoryTransition h3')?.textContent&&document.querySelector('#memoryTransition p')?.textContent);
          let structureOk=true;
          if(chapter.id==='vectors'||chapter.id==='trees'){
            for(let step=0;step<20&&!document.querySelector(chapter.id==='vectors'?'.vector-cell':'.tree-node');step+=1)document.querySelector('#memoryNext')?.click();
            const panel=document.querySelector('#structureVisualization');
            const selector=chapter.id==='vectors'?'.vector-cell':'.tree-node';
            structureOk=Boolean(panel&&!panel.hidden&&panel.querySelector(selector));
          }
          const ok=Boolean(action)&&activeKey===key&&actual===expected&&nodes===6&&before!==after&&noModuleReturn&&transitionOk&&structureOk;
          if(!ok)failures.push({chapter:chapter.id,key,hasAction:Boolean(action),activeKey,expected,actual,nodes,before,after,noModuleReturn,transitionOk,structureOk});
          tested+=1;
        }
      }
      return {tested,failures,passed:tested===350&&failures.length===0};
    })()`;
    const sceneResult = await client.send('Runtime.evaluate', { expression: sceneExpression, returnByValue: true, awaitPromise: true });
    await sleep(350);
    const screenshot = await client.send('Page.captureScreenshot', { format: 'png' });
    const file = `${root}/diagram-${name}-${width}.png`;
    fs.writeFileSync(file, Buffer.from(screenshot.data, 'base64'));
    client.close();
    const value = {...result.result.value, sceneCoverage:sceneResult.result.value};
    const controlsVisible = value.controlRects.every(item => item.visible && item.height >= 30);
    const readableNodes = value.panelBox.width >= 280 && value.panelBox.height >= 250 && value.trackBox.height >= 180 && value.trackBox.scrollWidth >= value.trackBox.width;
    const passed = value.nodes === 6 && value.controls === 4 && value.advanced && controlsVisible && readableNodes && value.sceneCoverage.passed;
    return { name, viewport: [width, height], passed, screenshot: file, ...value, controlsVisible, readableNodes };
  } finally {
    process.kill('SIGTERM');
  }
}

(async () => {
  const report = {
    desktop: await runViewport('desktop', 1280, 900),
    mobile: await runViewport('mobile', 390, 844),
  };
  report.passed = report.desktop.passed && report.mobile.passed;
  fs.writeFileSync('diagram-browser-validation.json', JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  if (!report.passed) process.exit(1);
})().catch(error => { console.error(error); process.exit(1); });
