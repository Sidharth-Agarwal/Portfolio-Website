const { useState, useEffect } = React;

const App = () => {
    // Theme management
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    // Initialize Lucide icons after render
    useEffect(() => {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
            if (window.lucide) {
                lucide.createIcons();
            }
        }, 100);
    });

    return (
        <div className="app">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Freelance />
            <Skills />
            <Contact />
            {/* <footer className="footer">
                <div className="container">
                    <p className="footer-text">
                        Built with React & ❤️ by Sidharth Agarwal
                    </p>
                </div>
            </footer> */}
        </div>
    );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);