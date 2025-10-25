import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const SectionTitle = ({ children, subtitle }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`text-center mb-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      {/* Main Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 relative inline-block">
        <span className={`relative z-10 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
        }`}>
          {children}
        </span>
        
        {/* Animated decorative underline */}
        <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full transition-all duration-700 delay-300 ${
          isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'
        }`}></div>
        
        {/* Animated glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-light/20 blur-2xl transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-75'
        }`}></div>
      </h2>

      {/* Subtitle with staggered animation */}
      {subtitle && (
        <p className={`text-text-secondary text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;