import { useState } from 'react';
import { HeroScanner } from './components/HeroScanner';
import { AnalysisMethods } from './components/AnalysisMethods';
import { Disclaimer } from './components/Disclaimer';
import Analyze from './pages/Analyze';
import History from './pages/History';
import Search from './pages/Search';
import IngredientDatabase from './pages/IngredientDatabase';
import Results from './pages/Results';

const sections = ['Home', 'Analyze', 'Search', 'History', 'Ingredients', 'Results'];

export default function App() {
  const [page, setPage] = useState('Home');

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 md:p-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <nav className="rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-3 flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setPage(section)}
              className="rounded-xl px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-400/10 transition"
            >
              {section}
            </button>
          ))}
        </nav>

        {page === 'Home' && <><HeroScanner /><AnalysisMethods /><Disclaimer /></>}
        {page === 'Analyze' && <Analyze />}
        {page === 'Search' && <Search />}
        {page === 'History' && <History />}
        {page === 'Ingredients' && <IngredientDatabase />}
        {page === 'Results' && <Results />}
      </div>
    </main>
  );
}
