import React from 'react';
import Button from './Button';

const EmptyState = ({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      {icon && (
        <div className="mb-6 opacity-40">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-bold text-text-primary mb-3">
        {title}
      </h3>
      {description && (
        <p className="text-text-secondary mb-8 max-w-md">
          {description}
        </p>
      )}
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="primary">
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;