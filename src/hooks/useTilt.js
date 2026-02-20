import { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

/**
 * Attaches VanillaTilt to a DOM element.
 * Automatically destroys the instance on unmount — safe with React 18 StrictMode.
 *
 * @param {object} options - VanillaTilt options (merged with defaults)
 * @returns {React.RefObject} - attach to the element you want to tilt
 */
export const useTilt = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    VanillaTilt.init(node, {
      max: 6,
      speed: 400,
      glare: true,
      'max-glare': 0.08,
      scale: 1.02,
      perspective: 1000,
      ...options,
    });

    return () => {
      node.vanillaTilt?.destroy();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return ref;
};