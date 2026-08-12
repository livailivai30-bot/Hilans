export interface HistoryItem {
  id: string;
  productName: string;
  status: 'HALAL' | 'NOT_HALAL' | 'NEEDS_VERIFICATION';
  ingredientsCount: number;
  date: string;
  image?: string;
}

const KEY = 'halallens_history';

export function getHistory(): HistoryItem[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch {
    return [];
  }
}

export function saveHistory(item: HistoryItem) {
  const history = getHistory();
  localStorage.setItem(KEY, JSON.stringify([item, ...history]));
}

export function deleteHistory(id: string) {
  const history = getHistory().filter(item => item.id !== id);
  localStorage.setItem(KEY, JSON.stringify(history));
}

export function clearHistory() {
  localStorage.removeItem(KEY);
}
