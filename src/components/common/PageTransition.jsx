import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

/**
 * Curtain wipe page transition.
 * Teal curtain sweeps up on exit and retracts on enter.
 */

const curtainVariants = {
  initial: { scaleY: 0, originY: '100%' },
  animate: {
    scaleY: 1,
    originY: '100%',
    transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    scaleY: 0,
    originY: '0%',
    transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1], delay: 0.05 },
  },
};

const contentVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35, delay: 0.4 } },
  exit:    { opacity: 0, transition: { duration: 0.15 } },
};

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={location.pathname} style={{ position: 'relative' }}>

        {/* ── Curtain overlay ── */}
        <motion.div
          variants={curtainVariants}
          initial="initial"
          animate="exit"   /* retracts (scaleY 0) during normal view */
          exit="animate"   /* sweeps up (scaleY 1) on route exit */
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9000,
            background: 'linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-light)))',
            transformOrigin: 'bottom',
            pointerEvents: 'none',
          }}
        />

        {/* ── Page content ── */}
        <motion.div
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="min-h-screen"
        >
          {children}
        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;