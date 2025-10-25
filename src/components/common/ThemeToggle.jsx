import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-bg-secondary border border-border hover:bg-bg-tertiary hover:border-accent transition-all duration-300"
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-text-primary" />
      ) : (
        <Sun className="w-5 h-5 text-text-primary" />
      )}
    </button>
  );
};

export default ThemeToggle;