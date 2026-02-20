import React from 'react';
import { useMagneticButton } from '../../hooks/useMagneticButton';

/**
 * Wraps any child (usually a Button) with GSAP magnetic hover effect.
 * The wrapper warps toward the cursor; the inner content stays stable.
 *
 * @param {number}  strength  - warp intensity 0–1 (default 0.4)
 * @param {string}  className - classes on the outer wrapper
 *
 * Usage:
 *   <MagneticButton>
 *     <Button variant="primary">Get In Touch</Button>
 *   </MagneticButton>
 */
const MagneticButton = ({ children, strength = 0.4, className = '' }) => {
  const ref = useMagneticButton(strength);

  return (
    <div ref={ref} className={`magnetic-btn ${className}`}>
      {children}
    </div>
  );
};

export default MagneticButton;