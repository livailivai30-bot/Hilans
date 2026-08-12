import React from 'react';

export default function HeroScanner(){
  return (
    <section className="min-h-screen bg-[#020812] text-white flex items-center justify-center overflow-hidden p-5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_45%)]" />
      <div className="relative max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm">
            AI VISION FOOD INTELLIGENCE
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mt-6 bg-gradient-to-r from-cyan-200 to-teal-400 bg-clip-text text-transparent">
            HalalLens
          </h1>
          <p className="text-gray-300 text-xl mt-5 max-w-xl">
            Know what you eat before you buy. Advanced AI vision analysis for transparent ingredient insights.
          </p>
          <button className="mt-8 px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold shadow-[0_0_35px_rgba(34,211,238,.45)] hover:scale-105 transition">
            Start AI Scan
          </button>
        </div>

        <div className="rounded-[2rem] border border-cyan-300/30 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_0_80px_rgba(34,211,238,.18)]">
          <div className="relative aspect-square rounded-full border border-cyan-300/40 flex items-center justify-center">
            <div className="absolute inset-8 rounded-full border border-cyan-400/20 animate-ping" />
            <div className="text-center">
              <div className="text-6xl">◉</div>
              <p className="text-cyan-300 mt-4">AI Vision Scanner</p>
              <p className="text-gray-400 text-sm">Ingredient Detection System Ready</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-center">
            <div className="bg-black/30 rounded-xl p-3">OCR<br/>ACTIVE</div>
            <div className="bg-black/30 rounded-xl p-3">AI<br/>ANALYSIS</div>
            <div className="bg-black/30 rounded-xl p-3">REPORT<br/>READY</div>
          </div>
        </div>
      </div>
    </section>
  );
}
