const { useState, useEffect } = React;

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <i data-lucide="moon" style={{ width: '20px', height: '20px' }}></i>
            ) : (
                <i data-lucide="sun" style={{ width: '20px', height: '20px' }}></i>
            )}
        </button>
    );
};

window.ThemeToggle = ThemeToggle;