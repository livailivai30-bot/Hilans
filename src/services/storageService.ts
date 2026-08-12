import type { AnalysisResult } from '../types';

const KEY = 'halallens-history';

export function saveAnalysis(result: AnalysisResult) {
  const current = getHistory();
  localStorage.setItem(KEY, JSON.stringify([result, ...current].slice(0, 50)));
}

export function getHistory(): AnalysisResult[] {
  const value = localStorage.getItem(KEY);
  return value ? JSON.parse(value) : [];
}

export function clearHistory() {
  localStorage.removeItem(KEY);
}
