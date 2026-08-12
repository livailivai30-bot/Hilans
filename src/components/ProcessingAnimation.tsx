export default function ProcessingAnimation(){
 const steps=['Reading ingredient label...','Identifying ingredients...','Checking classifications...','Evaluating uncertain sources...','Preparing analysis...'];
 return <div className="rounded-3xl bg-white/5 border border-cyan-400/30 p-6 text-white space-y-3">{steps.map((s,i)=><div key={s} className="text-cyan-200 animate-pulse">{i+1}. {s}</div>)}</div>
}
