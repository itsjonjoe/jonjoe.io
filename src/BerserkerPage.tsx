import React from 'react';

interface Props {
  onBack: () => void;
}

export default function BerserkerPage({ onBack }: Props) {
  return (
    <div className="min-h-screen bg-[#1a1611] p-4 text-[#eab308] md:p-8">
      <button
        onClick={onBack}
        className="fixed top-4 left-4 rounded border-2 border-[#eab308] bg-black/80 px-4 py-2 transition hover:bg-[#eab308] hover:text-[#1a1611] md:top-8 md:left-8 md:px-6 md:py-3"
      >
        ← Return to Longhouse
      </button>

      <div className="mx-auto mt-20 max-w-3xl text-center space-y-6 md:mt-24 md:space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold">BERSERKER</h1>
        <p className="text-lg opacity-90">
          Chronicles of strength and nutrition. Follow the full journey in the{' '}
          <a
            href="https://github.com/itsjonjoe/fitness-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            fitness docs
          </a>
          .
        </p>
      </div>
    </div>
  );
}
