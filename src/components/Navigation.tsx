import React from 'react';

const items = ['Home','Analyze','Search','History','Ingredients'];

export default function Navigation(){
 return <nav className="glass-nav">{items.map(i=><button key={i}>{i}</button>)}</nav>
}
