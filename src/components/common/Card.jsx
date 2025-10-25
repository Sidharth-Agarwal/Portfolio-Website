import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Card = ({
  children,
  className = '',
  hover = true,
  animate = true,
  onClick,
}) => {
  const [ref, isVisible] = useIntersectionObserver();

  const baseStyles = 'bg-card-bg border border-border rounded-2xl p-8 transition-all duration-500 relative';
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-2 hover:border-accent cursor-pointer' : '';
  const animateStyles = animate && !isVisible ? 'opacity-0 translate-y-12' : 'opacity-100 translate-y-0';

  return (
    <div
      ref={ref}
      className={`${baseStyles} ${hoverStyles} ${animateStyles} ${className}`}
      onClick={onClick}
    >
      {/* Subtle gradient overlay on hover */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;