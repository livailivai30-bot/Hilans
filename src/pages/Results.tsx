import React from 'react';
import { AnalysisResult } from '../types';

const demoResult: AnalysisResult = {
  productName: 'Choco Crunch',
  status: 'NEEDS_VERIFICATION',
  confidence: 0.95,
  analysisDate: new Date().toISOString(),
  ingredients: [
    {
      name: 'Gelatin',
      alternatives: ['E441'],
      category: 'Protein',
      status: 'NEEDS_VERIFICATION',
      explanation: 'Depends on animal source and certification.',
      sourceDependency: true,
      confidence: 0.9,
      references: ['Ingredient database']
    }
  ]
};

export default function Results(){
  const result = demoResult;
  const icon = result.status === 'HALAL' ? '🟢' : result.status === 'NOT_HALAL' ? '🔴' : '🟡';

  return (
    <main className="results-page">
      <section className="glass-card">
        <h1>{result.productName}</h1>
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
        <p>Ingredients with unknown sources require verification before making a final conclusion.</p>
        <p>Check halal certification or contact the manufacturer.</p>
      </section>
    </main>
  );
}
