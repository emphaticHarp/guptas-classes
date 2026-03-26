'use client';

import './brand-ticker.css';

const brands = [
  'Trusted by 500+ Students',
  'Expert Teaching Since 2014',
  'CBSE & TBSE Boards',
  'Concept-Based Learning',
  'Personal Attention',
  'Proven Results',
];

export default function BrandTicker() {
  return (
    <div className="brand-ticker-wrapper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src="/logo.jpg" alt="Gupta's Classes Logo" className="h-8 w-auto rounded-md" />
          <p className="text-sm uppercase tracking-widest opacity-80 font-medium">
            Why Choose Gupta's Classes
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        {/* Gradient Edges Overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,1) 0%, transparent 15%, transparent 85%, rgba(255,255,255,1) 100%)',
          }}
        ></div>

        {/* Ticker Track */}
        <div className="ticker-track">
          {/* First set of brands */}
          <div className="ticker-content">
            {brands.map((brand, idx) => (
              <div
                key={`first-${idx}`}
                className="ticker-item"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {brand}
                </span>
                <span className="mx-8 text-gray-300">•</span>
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="ticker-content">
            {brands.map((brand, idx) => (
              <div
                key={`second-${idx}`}
                className="ticker-item"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {brand}
                </span>
                <span className="mx-8 text-gray-300">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
