import React, {useState} from 'react';
import ImageUploader from '../components/ImageUploader';
import ProcessingAnimation from '../components/ProcessingAnimation';

export default function Analyze(){
 const [image,setImage]=useState<string|null>(null);
 const [ingredients,setIngredients]=useState('');
 const [loading,setLoading]=useState(false);
 const run=()=>{setLoading(true); setTimeout(()=>setLoading(false),2500)};
 return <main className="analyze-page">
  <h1>AI Ingredient Scanner</h1>
  <p>Step 1 — Capture your ingredient label</p>
  <ImageUploader />
  <textarea value={ingredients} onChange={e=>setIngredients(e.target.value)} placeholder="Enter ingredients manually..." />
  <button onClick={run}>Analyze Product</button>
  {loading && <ProcessingAnimation />}
 </main>
}
