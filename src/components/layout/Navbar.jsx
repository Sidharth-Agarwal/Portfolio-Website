import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import ThemeToggle from '../common/ThemeToggle';

const Navbar = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sectionIds = ['about', 'experience', 'projects', 'freelance', 'skills', 'contact'];
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 100);
    } else {
      scrollToElement(sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToElement = (sectionId) => {
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

  const navLinks = [
    { label: 'About', section: 'about' },
    { label: 'Experience', section: 'experience' },
    { label: 'Projects', section: 'projects' },
    { label: 'Freelance', section: 'freelance' },
    { label: 'Skills', section: 'skills' },
    { label: 'Contact', section: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-bg-primary/80 backdrop-blur-xl shadow-lg border-b border-border'
          : 'bg-bg-primary/50 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="group relative"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="text-2xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                  SA
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <span className="text-sm font-medium text-text-tertiary group-hover:text-accent transition-colors">
                Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className={`relative text-sm font-medium transition-colors cursor-pointer group ${
                  activeSection === link.section
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-accent'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    activeSection === link.section ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </button>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-text-primary hover:text-accent transition-colors rounded-lg hover:bg-bg-secondary"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => scrollToSection(link.section)}
                  className={`text-left px-4 py-3 text-sm font-medium transition-all rounded-xl ${
                    activeSection === link.section
                      ? 'text-accent bg-accent/10 border border-accent/20'
                      : 'text-text-secondary hover:text-accent hover:bg-bg-secondary'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;