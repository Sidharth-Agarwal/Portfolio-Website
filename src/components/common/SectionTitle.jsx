import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const SectionTitle = ({ children, subtitle }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`text-center mb-16 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 relative inline-block">
        {children}
        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-accent rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg mt-6 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;