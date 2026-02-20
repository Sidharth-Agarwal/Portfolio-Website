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
  const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group';

  const variants = {
    /*
     * Primary — solid filled, teal bg.
     * Uses a slightly darker ring so it reads on the light teal background.
     */
    primary: [
      'bg-accent text-white',
      'border border-accent-hover/40',          // subtle inner definition
      'hover:bg-accent-hover hover:-translate-y-0.5',
      'shadow-md shadow-accent/25',
      'hover:shadow-lg hover:shadow-accent/35',
    ].join(' '),

    /*
     * Secondary — transparent with a visible teal border.
     * Old `border-border` was nearly invisible on the teal-tinted bg;
     * replaced with `border-accent/50` so it's always legible.
     */
    secondary: [
      'bg-transparent text-text-primary',
      'border-2 border-accent/50',
      'hover:border-accent hover:text-accent hover:bg-accent/[0.08]',
    ].join(' '),

    /*
     * Outline — accent-coloured border, fills on hover.
     */
    outline: [
      'bg-transparent text-accent',
      'border-2 border-accent',
      'hover:bg-accent hover:text-white',
      'hover:shadow-lg hover:shadow-accent/25',
    ].join(' '),
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-3.5 text-base gap-2',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {/* Shine sweep — primary only */}
      {variant === 'primary' && (
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
        />
      )}
      {Icon && iconPosition === 'left'  && <Icon className="w-4 h-4 relative z-10 flex-shrink-0 group-hover:scale-110 transition-transform" />}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 relative z-10 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />}
    </>
  );

  if (to) return <Link to={to} className={classes} {...props}>{content}</Link>;

  if (href) return (
    <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
      {content}
    </a>
  );

  return (
    <button onClick={onClick} className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

export default Button;