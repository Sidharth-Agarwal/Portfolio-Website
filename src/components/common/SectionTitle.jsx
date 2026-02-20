import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

/**
 * Props:
 *  children  — main heading text
 *  subtitle  — smaller supporting line (optional)
 *  number    — "01", "02" … section index shown as a dim label above
 */
const SectionTitle = ({ children, subtitle, number }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`
        text-center mb-16 transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      {/* ── Numbered anchor ─────────────────────────────────── */}
      {number && (
        <div
          className={`
            inline-flex items-center gap-2.5 mb-5
            transition-all duration-500 delay-100
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent/50" />
          <span className="text-[11px] font-bold tracking-[0.22em] text-text-quaternary uppercase">
            {number}
          </span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent/50" />
        </div>
      )}

      {/* ── Main title ──────────────────────────────────────── */}
      <h2
        className={`
          relative inline-block font-black text-text-primary leading-tight
          text-5xl md:text-6xl
          transition-all duration-700 delay-150
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
      >
        {children}

        {/* Animated underline */}
        <div
          className={`
            absolute -bottom-3 left-1/2 -translate-x-1/2 h-[3px] rounded-full
            bg-gradient-to-r from-accent to-accent-light
            transition-all duration-600 delay-300
            ${isVisible ? 'w-12 opacity-100' : 'w-0 opacity-0'}
          `}
        />
      </h2>

      {/* ── Subtitle ────────────────────────────────────────── */}
      {subtitle && (
        <p
          className={`
            mt-5 text-sm text-text-tertiary max-w-lg mx-auto leading-relaxed
            transition-all duration-700 delay-250
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;