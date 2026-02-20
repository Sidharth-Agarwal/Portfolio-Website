import { useState, useEffect, useRef } from 'react';

/**
 * Fires once when the element enters the viewport, then disconnects.
 * The `options` object is intentionally excluded from the dependency array —
 * it is only read on mount to avoid re-attaching the observer on every render
 * when callers pass an inline object literal.
 *
 * @param {IntersectionObserverInit} options - standard IntersectionObserver options
 * @returns {[React.RefObject, boolean]} [elementRef, isVisible]
 */
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        ...options,
      },
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []); // ✅ empty deps — options read once on mount, no infinite re-attach

  return [elementRef, isVisible];
};