export type HalalStatus = 'HALAL' | 'NOT_HALAL' | 'NEEDS_VERIFICATION';

export interface Ingredient {
  id: string;
  name: string;
  alternatives: string[];
  category: string;
  status: HalalStatus;
  explanation: string;
  sourceDependency: boolean;
  confidence: number;
  references: string[];
}

export interface AnalysisResult {
  productName: string;
  brand?: string;
  status: HalalStatus;
  confidence: number;
  ingredients: Ingredient[];
  date: string;
}
