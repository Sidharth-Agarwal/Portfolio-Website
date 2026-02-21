import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const sections = [
  { id: 'about',      label: 'About'      },
  { id: 'experience', label: 'Experience' },
  { id: 'work',       label: 'Work'       },
  { id: 'skills',     label: 'Skills'     },
  { id: 'contact',    label: 'Contact'    },
];

const sectionIds = sections.map(s => s.id);

/**
 * Vertical dot navigation fixed to the right edge.
 * Highlights the current section, shows a label tooltip on hover.
 * Hidden on mobile — desktop only (md+).
 */
const SectionDots = () => {
  const activeSection = useScrollSpy(sectionIds);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Section navigation"
      className="
        fixed right-5 top-1/2 -translate-y-1/2 z-40
        hidden md:flex flex-col items-center gap-3
      "
    >
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id;

        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            aria-label={`Go to ${label}`}
            className="group relative flex items-center justify-end gap-2"
          >
            {/* Label tooltip — slides in from right on hover */}
            <span
              className="
                absolute right-full mr-3
                px-2.5 py-1 rounded-lg text-[11px] font-semibold
                glass-card text-text-secondary whitespace-nowrap
                opacity-0 translate-x-1 pointer-events-none
                group-hover:opacity-100 group-hover:translate-x-0
                transition-all duration-200 ease-out
              "
            >
              {label}
            </span>

            {/* Dot */}
            <div className="relative w-5 h-5 flex items-center justify-center">
              {/* Active ring pulse */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="ring"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1,   opacity: 1 }}
                    exit={{   scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 rounded-full border border-accent/40"
                  />
                )}
              </AnimatePresence>

              {/* Core dot */}
              <motion.div
                animate={{
                  width:           isActive ? 8  : 6,
                  height:          isActive ? 8  : 6,
                  backgroundColor: isActive
                    ? 'rgb(var(--accent))'
                    : 'rgb(var(--border))',
                }}
                transition={{ duration: 0.2 }}
                className="rounded-full group-hover:scale-125 transition-transform duration-200"
                style={{ willChange: 'width, height, background-color' }}
              />
            </div>
          </button>
        );
      })}
    </nav>
  );
};

export default SectionDots;