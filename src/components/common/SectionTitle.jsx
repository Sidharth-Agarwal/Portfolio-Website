import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Section heading with GSAP fade+slide reveal on scroll.
 * Respects prefers-reduced-motion — snaps in instantly if set.
 */
const SectionTitle = ({ children, subtitle, number }) => {
  const wrapRef     = useRef(null);
  const headingRef  = useRef(null);
  const numberRef   = useRef(null);
  const subtitleRef = useRef(null);
  const lineRef     = useRef(null);

  useEffect(() => {
    const reduced = prefersReducedMotion();

    // Collect all animated elements
    const els = [
      numberRef.current,
      headingRef.current,
      lineRef.current,
      subtitleRef.current,
    ].filter(Boolean);

    // Snap visible immediately — no animation
    if (reduced) {
      gsap.set(els, { opacity: 1, y: 0, scaleX: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top 85%',
          once: true,
        },
      });

      if (numberRef.current) {
        tl.fromTo(
          numberRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
          0,
        );
      }

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' },
          0.1,
        );
      }

      if (lineRef.current) {
        tl.fromTo(
          lineRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.5, ease: 'power3.out', transformOrigin: 'center' },
          0.4,
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' },
          0.45,
        );
      }
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className="text-center mb-16">
      {number && (
        <div ref={numberRef} className="flex items-center justify-center gap-2.5 mb-5" style={{ opacity: 0 }}>
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent/50" />
          <span className="text-[11px] font-bold tracking-[0.22em] text-text-quaternary uppercase">
            {number}
          </span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent/50" />
        </div>
      )}

      <h2
        ref={headingRef}
        className="relative inline-block font-black text-text-primary leading-tight text-5xl md:text-6xl"
        style={{ opacity: 0 }}
      >
        {children}
        <div
          ref={lineRef}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-[3px] w-12 rounded-full"
          style={{
            background: 'linear-gradient(90deg, rgb(var(--accent)), rgb(var(--accent-light)))',
            opacity: 0,
          }}
        />
      </h2>

      {subtitle && (
        <p
          ref={subtitleRef}
          className="mt-5 text-sm text-text-tertiary max-w-lg mx-auto leading-relaxed"
          style={{ opacity: 0 }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;