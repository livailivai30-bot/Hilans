import { HalalStatus } from '../types';

export default function StatusBadge({status}:{status:HalalStatus}){
 const map={HALAL:'🟢 HALAL',NOT_HALAL:'🔴 NOT HALAL',NEEDS_VERIFICATION:'🟡 NEEDS VERIFICATION'};
 return <div className="rounded-xl border border-cyan-400/30 bg-slate-900/70 px-5 py-3 text-cyan-100 shadow-lg">{map[status]}</div>;
}
