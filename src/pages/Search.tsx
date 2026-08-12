import React,{useState} from 'react';

const products=[
 {name:'Choco Crunch',brand:'Demo Foods',barcode:'123456',status:'HALAL'},
 {name:'Mystery Candy',brand:'Demo Foods',barcode:'789012',status:'NEEDS VERIFICATION'}
];

export default function Search(){
 const [q,setQ]=useState('');
 const result=products.filter(p=>Object.values(p).join(' ').toLowerCase().includes(q.toLowerCase()));
 return <section className="glass-panel"><h1>Product Search</h1><input placeholder="Product, brand or barcode" value={q} onChange={e=>setQ(e.target.value)}/>{result.map(p=><article key={p.barcode}><b>{p.name}</b><p>{p.brand} - {p.status}</p></article>)}</section>
}
