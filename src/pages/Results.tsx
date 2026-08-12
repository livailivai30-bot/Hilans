import React from 'react';

const ingredients = [
  { name: 'Sugar', status: 'HALAL', note: 'No issue identified from available information.' },
  { name: 'E471', status: 'NEEDS VERIFICATION', note: 'Source may vary and requires manufacturer confirmation.' },
  { name: 'Gelatin', status: 'NEEDS VERIFICATION', note: 'Depends on animal source and certification.' }
];

export default function Results(){
  return (
    <main className="results-page">
      <section className="glass-card">
        <h1>Choco Crunch</h1>
        <h2>🟡 NEEDS VERIFICATION</h2>
        <p>Analysis confidence: 95%</p>
      </section>

      <section className="glass-card">
        <h3>Ingredient Analysis</h3>
        {ingredients.map(item => (
          <article key={item.name} className="ingredient-card">
            <strong>{item.name}</strong>
            <span>{item.status}</span>
            <p>{item.note}</p>
          </article>
        ))}
      </section>

      <section className="glass-card">
        <h3>Why this result?</h3>
        <p>The product contains ingredients whose sources cannot be confirmed from the label alone.</p>
        <p>Check halal certification or contact the manufacturer for verification.</p>
      </section>
    </main>
  );
}
