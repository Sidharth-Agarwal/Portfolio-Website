import { useState, useEffect, useCallback } from 'react';

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const calculateScrollProgress = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    
    // Calculate the maximum scrollable height
    const maxScroll = documentHeight - windowHeight;
    
    // Calculate percentage scrolled
    const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    // Calculate on mount
    calculateScrollProgress();

    // Use requestAnimationFrame for smoother updates
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll event listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Recalculate on resize
    window.addEventListener('resize', calculateScrollProgress);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, [calculateScrollProgress]);

  return scrollProgress;
};