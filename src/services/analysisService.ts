import { AnalysisResult, Ingredient } from '../types';

const database: Record<string, Ingredient> = {
  gelatin: {
    name: 'Gelatin',
    alternatives: ['E441'],
    category: 'Protein',
    status: 'NEEDS_VERIFICATION',
    explanation: 'Source and processing must be verified.',
    sourceDependency: true,
    confidence: 0.9,
    references: ['Ingredient database']
  },
  e120: {
    name: 'E120',
    alternatives: ['Carmine'],
    category: 'Colorant',
    status: 'NEEDS_VERIFICATION',
    explanation: 'Requires verification of source.',
    sourceDependency: true,
    confidence: 0.95,
    references: ['Ingredient database']
  }
};

export async function analyzeIngredients(text: string): Promise<AnalysisResult> {
  const names = text.toLowerCase().split(',').map(x => x.trim()).filter(Boolean);
  const ingredients = names.map(name => database[name] ?? {
    name,
    alternatives: [],
    category: 'Unknown',
    status: 'HALAL',
    explanation: 'No issue identified from available information.',
    sourceDependency: false,
    confidence: 0.75,
    references: ['Demo database']
  });

  const status = ingredients.some(i => i.status === 'NOT_HALAL')
    ? 'NOT_HALAL'
    : ingredients.some(i => i.status === 'NEEDS_VERIFICATION')
      ? 'NEEDS_VERIFICATION'
      : 'HALAL';

  return {
    productName: 'Demo Product',
    status,
    confidence: Math.round(ingredients.reduce((a,b)=>a+b.confidence,0)/ingredients.length*100)/100,
    ingredients,
    analysisDate: new Date().toISOString()
  };
}
