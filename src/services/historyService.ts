import { AnalysisResult } from '../types';

const KEY='halallens-history';

export function saveAnalysis(result: AnalysisResult){
 const old=JSON.parse(localStorage.getItem(KEY)||'[]');
 localStorage.setItem(KEY,JSON.stringify([result,...old].slice(0,50)));
}

export function getHistory(): AnalysisResult[]{
 return JSON.parse(localStorage.getItem(KEY)||'[]');
}

export function clearHistory(){localStorage.removeItem(KEY);}
