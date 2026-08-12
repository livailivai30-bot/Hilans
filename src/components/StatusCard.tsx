import type { AnalysisStatus } from '../types/halal';

type Props = { status: AnalysisStatus; confidence: number };

const styles = {
  HALAL: 'border-emerald-400 text-emerald-300',
  NOT_HALAL: 'border-red-400 text-red-300',
  NEEDS_VERIFICATION: 'border-amber-400 text-amber-300'
};

export default function StatusCard({ status, confidence }: Props) {
  return (
    <div className={`rounded-2xl border bg-black/30 backdrop-blur-xl p-6 ${styles[status]}`}>
      <h2 className="text-3xl font-bold">{status.replace('_', ' ')}</h2>
      <p className="mt-2">Analysis confidence: {Math.round(confidence * 100)}%</p>
    </div>
  );
}
