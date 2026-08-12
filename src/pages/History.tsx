import React, {useEffect, useState} from 'react';

export default function History(){
 const [history,setHistory]=useState<any[]>([]);

 useEffect(()=>{
  const saved=localStorage.getItem('halallens_history');
  setHistory(saved ? JSON.parse(saved) : []);
 },[]);

 const clear=()=>{
  localStorage.removeItem('halallens_history');
  setHistory([]);
 };

 return (
  <section className="glass-panel">
   <h1>Analysis History</h1>
   <button onClick={clear}>Clear History</button>
   {history.length === 0 ? (
    <p>No history available.</p>
   ) : history.map((item,index)=>(
    <article key={index} className="history-card">
     <h3>{item.productName}</h3>
     <p>Status: {item.status}</p>
     <p>{item.ingredients?.length || 0} ingredients • {item.analysisDate}</p>
    </article>
   ))}
  </section>
 )
}
