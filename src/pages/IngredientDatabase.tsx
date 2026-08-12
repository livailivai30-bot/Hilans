import React, {useState} from 'react';

const ingredients = [
 {name:'Gelatin',code:'E441',status:'NEEDS VERIFICATION',note:'Source and processing must be verified.'},
 {name:'Carmine',code:'E120',status:'NOT HALAL',note:'Derived from insects and requires specific consideration.'},
 {name:'Sugar',code:'',status:'HALAL',note:'No known issue based on available information.'},
 {name:'E471',code:'E471',status:'NEEDS VERIFICATION',note:'Source may be plant or animal based.'}
];

export default function IngredientDatabase(){
 const [q,setQ]=useState('');
 const filtered=ingredients.filter(i=>i.name.toLowerCase().includes(q.toLowerCase())||i.code.includes(q));
 return <section className="glass-panel"><h1>Ingredient Database</h1><input placeholder="Search ingredient" value={q} onChange={e=>setQ(e.target.value)}/>{filtered.map(i=><article key={i.name}><b>{i.name}</b> {i.code}<p>{i.status}</p><small>{i.note}</small></article>)}</section>
}
