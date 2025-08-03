import React from 'react';

const imageName = "streple.png"
export default function StrepleShowcase() {
  return (
    <section id="products" className="relative bg-[#002b4f] text-white overflow-hidden py-10 px-6">
      <div className="max-w-5xl mx-auto text-center z-10 relative">
        {/* Label */}
        <button className="text-sm bg-[#1d3a59] px-4 py-1 rounded-full mb-4 font-medium">
          WHAT WE'VE BUILT
        </button>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Learn. Trade. Tokenize
        </h2>

        {/* Subtext */}
        <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
          A gamified social trading app for digital ownership in Africa & emerging markets.
        </p>

        {/* CTA Button */}
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#002b4f] hover:bg-gray-200 px-6 py-3 rounded-full text-sm font-medium transition inline-flex items-center gap-2"
        >
          Try Streple Beta →
        </a>
      </div>

      <div className="mt-10 w-auto  flex justify-center">
        <img
          src={`/images/${imageName}`}
          alt="Streple app UI"
          className="w-auto h-auto object-cover"
        />
      </div>
    </section>
  );
}
