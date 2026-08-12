import React from 'react';

const items = ['Home', 'Analyze', 'Search', 'History', 'Ingredients'];

export default function Navigation() {
  return (
    <nav className="fixed top-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-2xl border border-cyan-400/20 bg-black/40 p-2 backdrop-blur-xl">
      {items.map((item) => (
        <button
          key={item}
          className="rounded-xl px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-400/20 hover:text-white"
        >
          {item}
        </button>
      ))}
    </nav>
  );
}
