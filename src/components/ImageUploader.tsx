import React,{useState} from 'react';

export default function ImageUploader(){
 const [image,setImage]=useState<string|null>(null);
 return <section className="glass-card">
  <h2>Upload Ingredient Label</h2>
  <input type="file" accept="image/*" onChange={e=>{
   const f=e.target.files?.[0];
   if(f) setImage(URL.createObjectURL(f));
  }}/>
  {image && <img src={image} alt="preview" className="preview"/>}
 </section>
}
