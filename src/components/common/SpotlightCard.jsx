import React from 'react';
import { useSpotlightCard } from '../../hooks/useSpotlightCard';

/**
 * Glassmorphism card with a cursor-tracked teal spotlight glow.
 * Drop-in replacement for any card `div`.
 *
 * @param {string}   className    - additional classes
 * @param {function} onClick      - click handler
 * @param {string}   glowColor    - override spotlight color
 * @param {number}   glowSize     - override spotlight radius (px)
 * @param {boolean}  hover        - enable lift+border on hover
 */
const SpotlightCard = ({
  children,
  className = '',
  onClick,
  glowColor,
  glowSize = 320,
  hover = true,
  ...props
}) => {
  const { cardRef, glowStyle, onMouseMove, onMouseLeave } = useSpotlightCard(
    glowColor,
    glowSize,
  );

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={`
        spotlight-card glass-card relative overflow-hidden
        transition-all duration-300
        ${hover ? 'hover:border-accent/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {/* Spotlight glow overlay */}
      <div style={glowStyle} aria-hidden="true" />

      {/* Content sits above glow */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;