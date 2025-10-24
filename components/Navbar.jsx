const Navbar = ({ theme, toggleTheme }) => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-content">
                    <a href="#" className="navbar-logo">SA</a>
                    <ul className="navbar-menu">
                        <li><span className="navbar-link" onClick={() => scrollToSection('about')}>About</span></li>
                        <li><span className="navbar-link" onClick={() => scrollToSection('experience')}>Experience</span></li>
                        <li><span className="navbar-link" onClick={() => scrollToSection('projects')}>Projects</span></li>
                        <li><span className="navbar-link" onClick={() => scrollToSection('freelance')}>Freelance</span></li>
                        <li><span className="navbar-link" onClick={() => scrollToSection('skills')}>Skills</span></li>
                        <li><span className="navbar-link" onClick={() => scrollToSection('contact')}>Contact</span></li>
                        <li><ThemeToggle theme={theme} toggleTheme={toggleTheme} /></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

window.Navbar = Navbar;