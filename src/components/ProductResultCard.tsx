import React from 'react';

type Status = 'HALAL' | 'NOT_HALAL' | 'NEEDS_VERIFICATION';

interface Props {
  productName: string;
  status: Status;
  confidence: number;
}

const styles = {
  HALAL: 'text-green-400 border-green-400/40',
  NOT_HALAL: 'text-red-400 border-red-400/40',
  NEEDS_VERIFICATION: 'text-yellow-400 border-yellow-400/40'
};

export default function ProductResultCard({ productName, status, confidence }: Props) {
  return (
    <section className={`rounded-3xl border bg-black/30 backdrop-blur-xl p-6 ${styles[status]}`}>
      <h2 className="text-2xl font-semibold text-white">{productName}</h2>
      <div className="mt-5 text-4xl font-bold">{status.replace('_', ' ')}</div>
      <p className="mt-3 text-gray-300">Analysis confidence: {Math.round(confidence * 100)}%</p>
      <p className="mt-4 text-sm text-gray-400">
        This analysis is informational and should be verified when ingredient sources are uncertain.
      </p>
    </section>
  );
}
