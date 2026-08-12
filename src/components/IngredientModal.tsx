import type { Ingredient } from '../types/halal';

type Props = {
  ingredient: Ingredient | null;
  onClose: () => void;
};

export default function IngredientModal({ ingredient, onClose }: Props) {
  if (!ingredient) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-md rounded-2xl border border-cyan-400/30 bg-slate-950/90 p-6 text-white shadow-xl">
        <h2 className="text-2xl font-bold text-cyan-300">{ingredient.name}</h2>
        <p className="mt-3">Status: {ingredient.status}</p>
        <p className="mt-2 text-slate-300">{ingredient.explanation}</p>
        <p className="mt-2 text-slate-400">Source dependency: {ingredient.sourceDependency ? 'Yes' : 'No'}</p>
        <button onClick={onClose} className="mt-5 rounded-xl border border-cyan-400 px-4 py-2">Close</button>
      </div>
    </div>
  );
}
