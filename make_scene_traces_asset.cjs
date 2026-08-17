const fs=require('fs');const json=fs.readFileSync('scene-traces.json','utf8');fs.writeFileSync('scene_traces.js',`window.SCENE_TRACES=${json};`);console.log('Wrote scene_traces.js');
