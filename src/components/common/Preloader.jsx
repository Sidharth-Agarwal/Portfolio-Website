import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Initial loading screen shown before the app mounts.
 * Animates initials → progress bar → fades out, then calls onComplete.
 */
const Preloader = ({ onComplete }) => {
  const rootRef    = useRef(null);
  const lettersRef = useRef([]);
  const barRef     = useRef(null);
  const lineRef    = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade the whole preloader out then notify parent
        gsap.to(rootRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete,
        });
      },
    });

    // 1. Letters drop in staggered
    tl.fromTo(
      lettersRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: 'power3.out' },
    );

    // 2. Progress bar fills
    tl.fromTo(
      barRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 1.0, ease: 'power2.inOut' },
      '+=0.1',
    );

    // 3. Line below bar fades in
    tl.fromTo(
      lineRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 },
      '-=0.3',
    );

    return () => tl.kill();
  }, [onComplete]);

  const name = 'SIDHARTH';

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center
                 bg-bg-primary overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 70%)' }}
      />

      {/* Initials / name */}
      <div className="flex items-end gap-[2px] mb-8 select-none" aria-label="Sidharth">
        {name.split('').map((char, i) => (
          <span
            key={i}
            ref={(el) => (lettersRef.current[i] = el)}
            className="font-black text-5xl md:text-7xl leading-none"
            style={{
              color: i < 2 ? 'rgb(var(--accent))' : 'var(--text-primary)',
              opacity: 0,
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Progress bar track */}
      <div className="w-48 h-[2px] bg-border/30 rounded-full overflow-hidden relative">
        <div
          ref={barRef}
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(90deg, rgb(var(--accent)), rgb(var(--accent-light)))',
          }}
        />
      </div>

      {/* Sub-label */}
      <p
        ref={lineRef}
        className="mt-4 text-[11px] font-bold tracking-[0.3em] text-text-quaternary uppercase"
        style={{ opacity: 0 }}
      >
        Portfolio
      </p>
    </div>
  );
};

export default Preloader;