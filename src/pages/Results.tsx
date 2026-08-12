import React from 'react';
import { AnalysisResult } from '../types';

export default function Results(){
  const stored = localStorage.getItem('halallens_last_result');
  const result: AnalysisResult | null = stored ? JSON.parse(stored) : null;

  if (!result) {
    return (
      <main className="results-page">
        <section className="glass-card">
          <h1>No analysis yet</h1>
          <p>Run a product analysis first to see results.</p>
        </section>
      </main>
    );
  }

  const icon = result.status === 'HALAL' ? '🟢' : result.status === 'NOT_HALAL' ? '🔴' : '🟡';

  return (
    <main className="results-page">
      <section className="glass-card">
        <h1>{result.productName || 'Analyzed Product'}</h1>
        <h2>{icon} {result.status.replace('_',' ')}</h2>
        <p>Analysis confidence: {Math.round(result.confidence * 100)}%</p>
      </section>

      <section className="glass-card">
        <h3>Ingredient Analysis</h3>
        {result.ingredients.map(item => (
          <article key={item.name} className="ingredient-card">
            <strong>{item.name}</strong>
            <span>{item.status.replace('_',' ')}</span>
            <p>{item.explanation}</p>
          </article>
        ))}
      </section>

      <section className="glass-card">
        <h3>Why this result?</h3>
        <p>{result.explanation || 'Ingredients were evaluated using available information.'}</p>
        <p>Verify uncertain sources with the manufacturer or halal certification authority.</p>
      </section>
    </main>
  );
}
