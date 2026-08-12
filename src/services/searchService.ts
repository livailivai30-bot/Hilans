import { demoProducts } from '../data/products';

export function searchProducts(query:string){
 const q=query.toLowerCase();
 return demoProducts.filter(p=>
 p.name.toLowerCase().includes(q)||p.brand.toLowerCase().includes(q)
 );
}
