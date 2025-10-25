import React from 'react';

const LoadingSpinner = ({ size = 'md', text }) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className={`${sizes[size]} relative`}>
        <div className="absolute inset-0 border-4 border-border rounded-full"></div>
        <div className="absolute inset-0 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
      </div>
      {text && (
        <p className="text-text-secondary text-sm font-medium">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;