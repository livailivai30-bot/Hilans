import React from 'react';

export default function HeroScanner(){
  return <section className="min-h-screen bg-[#050b12] text-white flex items-center justify-center p-6">
    <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-cyan-400">AI FOOD ANALYSIS</p>
        <h1 className="text-5xl font-bold mt-3">HalalLens</h1>
        <p className="text-gray-300 mt-4 text-xl">Know what you eat before you buy.</p>
        <button className="mt-8 px-8 py-4 rounded-2xl bg-cyan-500 text-black font-bold">Analyze Product</button>
      </div>
      <div className="rounded-3xl border border-cyan-400/40 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(34,211,238,.2)]">
        <div className="aspect-square rounded-full border-4 border-cyan-400/60 flex items-center justify-center animate-pulse">
          <span className="text-cyan-300">AI Scanner Ready</span>
        </div>
      </div>
    </div>
  </section>
}
