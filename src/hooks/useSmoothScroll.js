import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialises Lenis smooth scroll and wires it to GSAP's ScrollTrigger
 * so that scroll-linked animations stay perfectly in sync.
 *
 * Returns the Lenis instance ref so callers can call lenis.scrollTo() etc.
 */
export const useSmoothScroll = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Keep ScrollTrigger in sync with Lenis positions
    lenis.on('scroll', ScrollTrigger.update);

    // Store the RAF function reference so the same ref is used for cleanup
    const rafFn = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(rafFn);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(rafFn); // ✅ same ref — actually gets removed
      lenis.destroy();
    };
  }, []);

  return lenisRef;
};