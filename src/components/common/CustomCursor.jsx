import React, { useEffect, useRef, useState } from 'react';

/**
 * Two-layer custom cursor with mix-blend-mode: exclusion for automatic
 * contrast against both dark and light themes.
 *
 *  • Dot   — snaps instantly, white (inverted by exclusion)
 *  • Ring  — lerp-follows with lag, inverted ring
 *
 * Disabled on touch devices automatically.
 */
const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const mouse   = useRef({ x: -200, y: -200 });
  const ring    = useRef({ x: -200, y: -200 });
  const raf     = useRef(null);

  const [hovered,  setHovered]  = useState(false);
  const [clicking, setClicking] = useState(false);

  // Detect touch device — hide cursor entirely
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

  useEffect(() => {
    if (isTouch) return;

    const onMove = (e) => { mouse.current = { x: e.clientX, y: e.clientY }; };

    const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, [tabindex]';
    const onOver  = (e) => setHovered(!!e.target.closest(INTERACTIVE));
    const onDown  = () => setClicking(true);
    const onUp    = () => setClicking(false);

    const LERP = 0.10;
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

    window.addEventListener('mousemove',  onMove,  { passive: true });
    document.addEventListener('mouseover', onOver,  { passive: true });
    window.addEventListener('mousedown',  onDown);
    window.addEventListener('mouseup',    onUp);
    raf.current = requestAnimationFrame(tick);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove',  onMove);
      document.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown',  onDown);
      window.removeEventListener('mouseup',    onUp);
      cancelAnimationFrame(raf.current);
      document.body.style.cursor = '';
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      {/* ── Dot ── */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: 'transform', mixBlendMode: 'exclusion' }}
      >
        <div
          className="rounded-full bg-white transition-all duration-150 ease-out"
          style={{
            width:   hovered ? 0 : clicking ? '6px' : '8px',
            height:  hovered ? 0 : clicking ? '6px' : '8px',
            opacity: hovered ? 0 : clicking ? 0.6 : 0.9,
          }}
        />
      </div>

      {/* ── Ring ── */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: 'transform', mixBlendMode: 'exclusion' }}
      >
        <div
          className="rounded-full border border-white transition-all duration-300 ease-out"
          style={{
            width:           hovered ? '48px' : clicking ? '20px' : '32px',
            height:          hovered ? '48px' : clicking ? '20px' : '32px',
            backgroundColor: hovered ? 'rgba(255,255,255,0.12)' : 'transparent',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;