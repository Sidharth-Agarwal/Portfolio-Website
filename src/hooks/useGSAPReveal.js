import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Attaches a GSAP ScrollTrigger reveal animation to a container ref.
 * All direct children with class `gsap-reveal` animate in on scroll.
 * Respects prefers-reduced-motion — elements snap in instantly if set.
 */
export const useGSAPReveal = ({
  stagger  = 0.12,
  duration = 0.8,
  yOffset  = 40,
  start    = 'top 85%',
  once     = true,
} = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll('.gsap-reveal');
    if (!targets.length) return;

    // If user prefers reduced motion, just make elements visible immediately
    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(targets, { opacity: 0, y: yOffset });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      onEnter: () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: 'power3.out',
        });
      },
      onLeaveBack: once
        ? undefined
        : () => gsap.set(targets, { opacity: 0, y: yOffset }),
      once,
    });

    return () => trigger.kill();
  }, [stagger, duration, yOffset, start, once]);

  return ref;
};