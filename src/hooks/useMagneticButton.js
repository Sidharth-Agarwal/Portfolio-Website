import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

/**
 * GSAP magnetic button effect.
 * The element warps toward the cursor when hovered and snaps back on leave.
 *
 * @param {number} strength - how far the element moves (default 0.4)
 * @returns {React.RefObject} - attach to the outermost wrapper element
 */
export const useMagneticButton = (strength = 0.4) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use quickTo for performance — creates a cached setter per property
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });

    const onMove = (e) => {
      const rect   = el.getBoundingClientRect();
      const cx     = rect.left + rect.width  / 2;
      const cy     = rect.top  + rect.height / 2;
      const deltaX = (e.clientX - cx) * strength;
      const deltaY = (e.clientY - cy) * strength;
      xTo(deltaX);
      yTo(deltaY);
    };

    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);

  return ref;
};