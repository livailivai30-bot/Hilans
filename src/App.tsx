import { HeroScanner } from './components/HeroScanner';
import { AnalysisMethods } from './components/AnalysisMethods';
import { Disclaimer } from './components/Disclaimer';

const sections = [
  { name: 'Home', icon: '⌂' },
  { name: 'Analyze', icon: '◉' },
  { name: 'Search', icon: '⌕' },
  { name: 'History', icon: '◷' },
  { name: 'Ingredients', icon: '◈' },
];

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 md:p-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <nav className="rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-3 flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <button
              key={section.name}
              className="rounded-xl px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-400/10 transition"
            >
              {section.icon} {section.name}
            </button>
          ))}
        </nav>

        <HeroScanner />
        <AnalysisMethods />
        <Disclaimer />
      </div>
    </main>
  );
}
