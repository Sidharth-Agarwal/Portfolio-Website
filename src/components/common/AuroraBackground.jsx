import React from 'react';

/**
 * Animated aurora gradient blobs — place as an absolute child inside any
 * `relative overflow-hidden` section. Zero dependencies, pure CSS animation.
 *
 * @param {string} className - override positioning / z-index if needed
 */
const AuroraBackground = ({ className = '' }) => (
  <div
    aria-hidden="true"
    className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
  >
    {/* Blob 1 — teal, top-left */}
    <div
      className="aurora-blob"
      style={{
        width: '600px',
        height: '600px',
        top: '-120px',
        left: '-80px',
        background: 'rgb(var(--accent) / 0.10)',
        animation: 'aurora1 12s ease-in-out infinite',
      }}
    />

    {/* Blob 2 — accent-light (cyan), bottom-right */}
    <div
      className="aurora-blob"
      style={{
        width: '500px',
        height: '500px',
        bottom: '-100px',
        right: '-60px',
        background: 'rgb(var(--accent-light) / 0.08)',
        animation: 'aurora2 15s ease-in-out infinite',
      }}
    />

    {/* Blob 3 — emerald, centre */}
    <div
      className="aurora-blob"
      style={{
        width: '400px',
        height: '400px',
        top: '30%',
        left: '40%',
        background: 'rgba(16,185,129,0.06)',
        animation: 'aurora3 10s ease-in-out infinite',
      }}
    />
  </div>
);

export default AuroraBackground;