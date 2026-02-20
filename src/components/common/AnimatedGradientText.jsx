import React from 'react';

/**
 * Renders children with an animated flowing teal→cyan gradient applied to text.
 *
 * @param {string}  as        - HTML tag to render (default 'span')
 * @param {string}  className - additional Tailwind classes
 * @param {boolean} animate   - enable/disable animation (default true)
 */
const AnimatedGradientText = ({
  children,
  as: Tag = 'span',
  className = '',
  animate = true,
  ...props
}) => (
  <Tag
    className={`${animate ? 'gradient-text-animated' : 'gradient-text'} ${className}`}
    {...props}
  >
    {children}
  </Tag>
);

export default AnimatedGradientText;