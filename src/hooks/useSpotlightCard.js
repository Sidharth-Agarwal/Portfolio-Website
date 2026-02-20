import { useRef, useCallback } from 'react';

/**
 * Tracks mouse position relative to a card and updates a CSS custom property
 * (`--spotlight-x` / `--spotlight-y`) used by the spotlight gradient overlay.
 * Zero dependencies — pure DOM event handling.
 *
 * @param {string} color - spotlight color (default: teal at 15% opacity)
 * @param {number} size  - spotlight radius in px (default: 300)
 * @returns {{ cardRef, glowStyle }}
 */
export const useSpotlightCard = (
  color = 'rgba(13,148,136,0.15)',
  size  = 300,
) => {
  const cardRef = useRef(null);

  const onMouseMove = useCallback(
    (e) => {
      const el   = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x    = e.clientX - rect.left;
      const y    = e.clientY - rect.top;
      el.style.setProperty('--sx', `${x}px`);
      el.style.setProperty('--sy', `${y}px`);
    },
    [],
  );

  const onMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--sx', '-999px');
    el.style.setProperty('--sy', '-999px');
  }, []);

  /** Inline style for the glow overlay div */
  const glowStyle = {
    background: `radial-gradient(${size}px circle at var(--sx, -999px) var(--sy, -999px), ${color}, transparent 80%)`,
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    borderRadius: 'inherit',
    transition: 'opacity 0.3s ease',
    zIndex: 0,
  };

  return { cardRef, glowStyle, onMouseMove, onMouseLeave };
};