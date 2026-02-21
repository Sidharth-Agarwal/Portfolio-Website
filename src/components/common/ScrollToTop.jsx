import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

/**
 * Floating scroll-to-top button.
 * Appears once the user scrolls past the hero (~100vh),
 * disappears again when back near the top.
 */
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past ~80% of the viewport height
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          onClick={handleClick}
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0,  scale: 1    }}
          exit={{    opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Scroll to top"
          className="
            fixed bottom-24 right-5 z-50
            md:bottom-8 md:right-8
            w-10 h-10 rounded-full
            glass-card border-accent/30
            flex items-center justify-center
            hover:border-accent/60 hover:bg-accent/10
            hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20
            transition-[border-color,background-color,box-shadow,transform]
            duration-300 group
          "
        >
          <ArrowUp
            className="w-4 h-4 text-text-tertiary group-hover:text-accent
                       transition-colors duration-300"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;