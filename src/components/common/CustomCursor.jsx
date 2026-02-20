import React, { useEffect, useRef, useState } from 'react';

/**
 * Two-layer custom cursor:
 *  • Dot   — snaps instantly to the mouse position
 *  • Ring  — lerp-follows with a slight lag for smoothness
 *
 * On hoverable elements the dot shrinks to nothing and the ring
 * expands + fills subtly — creating a "halo" effect.
 *
 * Hidden automatically on touch-only devices via the (hover: none) media query.
 */
const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const mouse   = useRef({ x: -200, y: -200 });
  const ring    = useRef({ x: -200, y: -200 });
  const raf     = useRef(null);

  const [hovered,  setHovered]  = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    // Bail out on touch-only devices — no cursor needed
    if (window.matchMedia('(hover: none)').matches) return;

    /* ── Track mouse position ─────────────────────────────────── */
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    /* ── Detect hover state via event delegation ──────────────── */
    const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, [tabindex]';
    const onOver = (e) => setHovered(!!e.target.closest(INTERACTIVE));

    /* ── Click feedback ───────────────────────────────────────── */
    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    /* ── Animation loop ───────────────────────────────────────── */
    const LERP = 0.10; // lower = more lag on the ring
    const tick = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * LERP;
      ring.current.y += (mouse.current.y - ring.current.y) * LERP;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${mouse.current.x}px,${mouse.current.y}px,0) translate(-50%,-50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate3d(${ring.current.x}px,${ring.current.y}px,0) translate(-50%,-50%)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove',  onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    window.addEventListener('mousedown',  onDown);
    window.addEventListener('mouseup',    onUp);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove',  onMove);
      document.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown',  onDown);
      window.removeEventListener('mouseup',    onUp);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  // Don't render anything on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      {/* ── Dot ─────────────────────────────────────────────── */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        <div
          className={`
            rounded-full bg-accent transition-all duration-150 ease-out
            ${hovered  ? 'w-0 h-0 opacity-0'                : ''}
            ${clicking ? 'w-1.5 h-1.5 opacity-60'          : ''}
            ${!hovered && !clicking ? 'w-2 h-2 opacity-90' : ''}
          `}
        />
      </div>

      {/* ── Ring ────────────────────────────────────────────── */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        <div
          className={`
            rounded-full border border-accent transition-all duration-300 ease-out
            ${hovered
              ? 'w-10 h-10 border-accent/50 bg-accent/[0.07]'
              : clicking
                ? 'w-5 h-5 border-accent/80 bg-transparent'
                : 'w-7 h-7 border-accent/50 bg-transparent'
            }
          `}
        />
      </div>
    </>
  );
};

export default CustomCursor;