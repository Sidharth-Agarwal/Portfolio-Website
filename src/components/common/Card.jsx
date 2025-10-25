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

  const baseStyles = 'bg-card-bg border border-border rounded-xl p-6 transition-all duration-300';
  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-2 hover:border-accent cursor-pointer' : '';
  const animateStyles = animate && !isVisible ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0';

  return (
    <div
      ref={ref}
      className={`${baseStyles} ${hoverStyles} ${animateStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;