import React from 'react';

const demoHistory = [
  { name: 'Choco Crunch', status: 'NEEDS VERIFICATION', date: 'Today', ingredients: 12 },
  { name: 'Fruit Candy', status: 'HALAL', date: 'Yesterday', ingredients: 8 }
];

export default function History(){
 return (
  <section className="glass-panel">
   <h1>Analysis History</h1>
   {demoHistory.length === 0 ? (
    <p>No history available.</p>
   ) : demoHistory.map(item => (
    <article key={item.name} className="history-card">
     <h3>{item.name}</h3>
     <p>Status: {item.status}</p>
     <p>{item.ingredients} ingredients • {item.date}</p>
    </article>
   ))}
  </section>
 )
}
