import React from 'react';
import ConfidenceMeter from '../components/ConfidenceMeter';
import { AnalysisResult } from '../types';

export default function Results(){
 const stored=localStorage.getItem('halallens_last_result');
 const result:AnalysisResult|null=stored?JSON.parse(stored):null;

 if(!result) return <main className="results-page"><section className="ai-panel"><h1>No analysis yet</h1><p>Run a scan to generate an AI report.</p></section></main>;

 const status=result.status==='HALAL'?'HALAL VERIFIED':result.status==='NOT_HALAL'?'HARAM':'MUSHBOOH';
 const icon=result.status==='HALAL'?'🟢':result.status==='NOT_HALAL'?'🔴':'🟡';

 return <main className="results-page premium-results">
  <section className="ai-panel result-header">
   <p className="ai-label">AI VISION REPORT</p>
   <h1>{result.productName || 'Analyzed Product'}</h1>
   <h2>{icon} {status}</h2>
   <ConfidenceMeter value={result.confidence}/>
  </section>

  <section className="ai-panel">
   <h3>Ingredient Neural Analysis</h3>
   <div className="ingredient-grid">
   {result.ingredients.map(item=><article className="ingredient-ai-card" key={item.name}>
    <strong>{item.name}</strong>
    <span>{item.status.replace('_',' ')}</span>
    <p>{item.explanation}</p>
   </article>)}
   </div>
  </section>

  <section className="ai-panel explanation-box">
   <h3>Why this result?</h3>
   <p>{result.explanation || 'Ingredients were evaluated using available information.'}</p>
   <p>Check certification or manufacturer information when the source is uncertain.</p>
  </section>
 </main>;
}
