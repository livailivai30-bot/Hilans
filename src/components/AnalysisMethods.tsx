export default function AnalysisMethods(){
 const items=[['📷','Camera','Scan ingredient label'],['⬆️','Upload','Upload product image'],['✍️','Manual','Enter ingredients']];
 return <div className="grid md:grid-cols-3 gap-4 p-6 bg-[#050b12] text-white">
 {items.map(([icon,title,desc])=><div key={title} className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5 backdrop-blur-xl hover:border-cyan-400 transition"><div className="text-3xl">{icon}</div><h3 className="font-bold mt-3">{title}</h3><p className="text-gray-400">{desc}</p></div>)}
 </div>
}
