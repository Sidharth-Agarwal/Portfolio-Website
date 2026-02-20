import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Attaches a GSAP ScrollTrigger reveal animation to a container ref.
 * All direct children with class `gsap-reveal` animate in on scroll.
 *
 * @param {object} options
 *   @param {number}  options.stagger   - stagger between children (default 0.12)
 *   @param {number}  options.duration  - animation duration in seconds (default 0.8)
 *   @param {number}  options.yOffset   - initial Y offset in px (default 40)
 *   @param {string}  options.start     - ScrollTrigger start (default "top 85%")
 *   @param {boolean} options.once      - only play once (default true)
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