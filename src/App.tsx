import { HeroScanner } from './components/HeroScanner';
import { AnalysisMethods } from './components/AnalysisMethods';
import { Disclaimer } from './components/Disclaimer';

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <HeroScanner />
        <AnalysisMethods />
        <Disclaimer />
      </div>
    </main>
  );
}
