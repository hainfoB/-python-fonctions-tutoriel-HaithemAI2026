const fs=require('fs');
const traces=JSON.parse(fs.readFileSync('scene-traces.json','utf8'));
const totals={scenes:Object.keys(traces).length,states:0,sourceLine:0,frames:0,returns:0,branches:0,loops:0,outputs:0,visibleLocals:0};
const byChapter={};
for(const [key,t] of Object.entries(traces)){
 const item={states:t.states?.length||0,branches:0,loops:0,returns:0,sourceLine:0};
 for(const s of t.states||[]){
  totals.states++; if(s.source_line!==undefined){totals.sourceLine++;item.sourceLine++} if(s.frame){totals.frames++} if(s.event==='return'){totals.returns++;item.returns++} if(s.kind==='branch'){totals.branches++;item.branches++} if(s.kind==='loop'){totals.loops++;item.loops++} if(s.output_so_far||s.kind==='output'){totals.outputs++} if(Object.keys(s.locals||{}).length)totals.visibleLocals++;
 }
 const c=t.chapter; byChapter[c]??={scenes:0,states:0,branches:0,loops:0,returns:0};byChapter[c].scenes++;byChapter[c].states+=item.states;byChapter[c].branches+=item.branches;byChapter[c].loops+=item.loops;byChapter[c].returns+=item.returns;
}
const report={totals,byChapter,passed:totals.scenes===350&&totals.sourceLine===totals.states&&totals.frames===totals.states};fs.writeFileSync('rich-trace-audit.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));if(!report.passed)process.exit(1);
