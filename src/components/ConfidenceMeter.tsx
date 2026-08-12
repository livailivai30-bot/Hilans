import React from 'react';

export default function ConfidenceMeter({value}:{value:number}){
 const percent=Math.round(value*100);
 return <div className="confidence-meter">
  <div className="confidence-ring" style={{'--value':`${percent}%`} as React.CSSProperties}>
   <strong>{percent}%</strong>
  </div>
  <span>Analysis Confidence</span>
 </div>;
}
