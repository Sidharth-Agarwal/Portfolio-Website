import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  disabled = false,
  icon: Icon,
  iconPosition = 'right',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-accent/50 border border-accent',
    secondary: 'bg-transparent text-text-primary border-2 border-border hover:border-accent hover:text-accent hover:bg-accent/5',
    outline: 'bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/30',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {/* Shine effect on hover */}
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
      )}
      
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;