export default function AnalysisSteps() {
  const steps = ['Capture','Read Ingredients','Analyze','Explain'];
  return <div className="grid grid-cols-2 gap-3">{steps.map((s,i)=><div key={s} className="rounded-xl border border-cyan-400/20 bg-slate-900/60 p-4"><span className="text-cyan-400">0{i+1}</span><p>{s}</p></div>)}</div>;
}
