import React, {useState} from 'react';
import ImageUploader from '../components/ImageUploader';
import ProcessingAnimation from '../components/ProcessingAnimation';
import { analyzeIngredients } from '../services/analysisService';
import { saveHistory } from '../services/localHistoryService';

export default function Analyze(){
 const [ingredients,setIngredients]=useState('');
 const [loading,setLoading]=useState(false);
 const [message,setMessage]=useState('');

 const run=async()=>{
  if(!ingredients.trim()){
   setMessage('Please enter ingredients first.');
   return;
  }
  setLoading(true);
  setMessage('Reading ingredients and analyzing...');
  const result=await analyzeIngredients(ingredients);
  localStorage.setItem('halallens_last_result', JSON.stringify(result));
  saveHistory({
   id: Date.now().toString(),
   productName: 'Analyzed Product',
   status: result.status,
   ingredientsCount: result.ingredients.length,
   date: new Date().toLocaleDateString()
  });
  setLoading(false);
  setMessage(`Analysis complete: ${result.status}`);
 };

 return <main className="analyze-page">
  <h1>AI Ingredient Scanner</h1>
  <p>Step 1 — Capture your ingredient label</p>
  <ImageUploader />
  <textarea value={ingredients} onChange={e=>setIngredients(e.target.value)} placeholder="Enter ingredients manually..." />
  <button onClick={run}>Analyze Product</button>
  {loading && <ProcessingAnimation />}
  {message && <p>{message}</p>}
 </main>
}
