import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import ThemeToggle from '../common/ThemeToggle';

const Navbar = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sectionIds = ['about', 'experience', 'projects', 'consulting', 'skills', 'contact'];
  const activeSection = useScrollSpy(sectionIds);
  const scrollProgress = useScrollProgress();

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
    // { label: 'Projects', section: 'projects' },
    { label: 'Consulting', section: 'consulting' },
    { label: 'Skills', section: 'skills' },
    { label: 'Contact', section: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-bg-primary/95 backdrop-blur-xl shadow-lg'
          : 'bg-bg-primary/50 backdrop-blur-sm'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-border/30">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent-light transition-all duration-150 ease-out will-change-transform"
          style={{ 
            width: `${scrollProgress}%`,
            transform: 'translateZ(0)' // Force GPU acceleration
          }}
        >
          {/* Glow effect on the progress bar */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-l from-accent-light to-transparent blur-sm"></div>
        </div>
      </div>

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