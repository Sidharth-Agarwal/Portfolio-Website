import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useSpotlightCard } from '../../hooks/useSpotlightCard';

/**
 * Card with:
 *  - Intersection observer fade-in
 *  - Motion spring 3D tilt (replaces vanilla-tilt)
 *  - Cursor-tracked spotlight glow
 */
const Card = ({
  children,
  className = '',
  hover = true,
  animate = true,
  tilt = true,
  onClick,
}) => {
  const [intersectRef, isVisible] = useIntersectionObserver();
  const { cardRef: spotRef, glowStyle, onMouseMove: spotMove, onMouseLeave: spotLeave }
    = useSpotlightCard();

  // Motion spring values for 3D tilt
  const x   = useMotionValue(0);
  const y   = useMotionValue(0);
  const sx  = useSpring(x, { stiffness: 300, damping: 20 });
  const sy  = useSpring(y, { stiffness: 300, damping: 20 });
  const rX  = useTransform(sy, [-0.5, 0.5], ['6deg', '-6deg']);
  const rY  = useTransform(sx, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e) => {
    spotMove(e);
    if (!tilt) return;
    const el   = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px   = (e.clientX - rect.left) / rect.width  - 0.5;
    const py   = (e.clientY - rect.top)  / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = (e) => {
    spotLeave(e);
    x.set(0);
    y.set(0);
  };

  // Merge refs
  const setRef = (node) => {
    intersectRef.current = node;
    spotRef.current      = node;
  };

  const animateStyles = animate && !isVisible
    ? { opacity: 0, translateY: 48 }
    : { opacity: 1, translateY: 0 };

  return (
    <motion.div
      ref={setRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX: tilt ? rX : 0,
        rotateY: tilt ? rY : 0,
        transformStyle: 'preserve-3d',
        perspective: 1000,
        ...animateStyles,
      }}
      transition={{ opacity: { duration: 0.6 }, translateY: { duration: 0.6 } }}
      className={`
        bg-card-bg border border-border rounded-2xl p-8
        transition-[border-color,box-shadow] duration-300 relative overflow-hidden
        ${hover ? 'hover:shadow-2xl hover:border-accent/40 cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* Spotlight glow */}
      <div style={glowStyle} aria-hidden="true" />

      {/* Gradient overlay on hover */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent
                        opacity-0 hover:opacity-100 transition-opacity duration-500
                        rounded-2xl pointer-events-none" />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default Card;