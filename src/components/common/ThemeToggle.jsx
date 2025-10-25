import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-xl bg-bg-secondary border border-border hover:bg-bg-tertiary hover:border-accent transition-all duration-300 group overflow-hidden"
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Icons with rotation animation */}
      <div className="relative w-5 h-5">
        {theme === 'light' ? (
          <Moon className="w-5 h-5 text-text-primary group-hover:text-accent transition-all duration-300 group-hover:rotate-12" />
        ) : (
          <Sun className="w-5 h-5 text-text-primary group-hover:text-accent transition-all duration-300 group-hover:rotate-45" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;