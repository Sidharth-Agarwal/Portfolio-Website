import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import ThemeToggle from '../common/ThemeToggle';
import { portfolioData } from '../../data/portfolioData';

const navLinks = [
  { label: 'About',      section: 'about'      },
  { label: 'Experience', section: 'experience' },
  // { label: 'Projects',   section: 'projects'   },
  { label: 'Consulting', section: 'consulting' },
  { label: 'Skills',     section: 'skills'     },
  { label: 'Contact',    section: 'contact'    },
];

const sectionIds = ['about', 'experience', 'projects', 'consulting', 'skills', 'contact'];

const Navbar = () => {
  const location  = useLocation();
  const navigate  = useNavigate();
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [indicator, setIndicator]     = useState({ left: 0, width: 0, opacity: 0 });

  const activeSection  = useScrollSpy(sectionIds);
  const scrollProgress = useScrollProgress();

  const navBarRef = useRef(null);
  const itemRefs  = useRef({});

  /* ── Scroll detection ─────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Close mobile on route change ────────────────────────────── */
  useEffect(() => { setMobileOpen(false); }, [location]);

  /* ── Sliding indicator position ──────────────────────────────── */
  useEffect(() => {
    const el  = itemRefs.current[activeSection];
    const bar = navBarRef.current;
    if (!el || !bar) { setIndicator(p => ({ ...p, opacity: 0 })); return; }

    const frame = requestAnimationFrame(() => {
      const barRect = bar.getBoundingClientRect();
      const elRect  = el.getBoundingClientRect();
      setIndicator({
        left:    elRect.left - barRect.left,
        width:   elRect.width,
        opacity: 1,
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [activeSection]);

  /* ── Smooth scroll helper ─────────────────────────────────────── */
  const goToSection = (id) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => smoothScroll(id), 120);
    } else {
      smoothScroll(id);
    }
  };

  const smoothScroll = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  /* ── Render ───────────────────────────────────────────────────── */
  return (
    <>
      {/* ── Desktop floating pill ─────────────────────────────────── */}
      <header className="fixed top-5 inset-x-0 z-50 hidden md:flex justify-center pointer-events-none">
        <div
          className={`
            pointer-events-auto flex items-center gap-1 px-3 py-2 rounded-full
            transition-all duration-500
            ${scrolled
              ? 'border border-border/70 bg-bg-primary/85 backdrop-blur-2xl shadow-xl shadow-black/15'
              : 'border border-transparent bg-transparent'}
          `}
        >
          {/* Logo */}
          <Link
            to="/"
            className="mr-2 px-3 py-1.5 rounded-full text-base font-bold gradient-text
                       hover:bg-accent/8 transition-colors duration-200"
          >
            SA
          </Link>

          <div className="w-px h-4 bg-border/70 mx-0.5" />

          {/* Nav items + sliding pill indicator */}
          <div ref={navBarRef} className="relative flex items-center">
            {/* Sliding highlight */}
            <div
              aria-hidden="true"
              className="absolute top-0 h-full rounded-full
                         bg-accent/10 border border-accent/25
                         transition-all duration-300 ease-out pointer-events-none"
              style={indicator}
            />

            {navLinks.map(({ label, section }) => (
              <button
                key={section}
                ref={(el) => (itemRefs.current[section] = el)}
                onClick={() => goToSection(section)}
                className={`
                  relative z-10 px-4 py-1.5 rounded-full text-sm font-medium
                  transition-colors duration-200
                  ${activeSection === section
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-text-primary'}
                `}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="w-px h-4 bg-border/70 mx-0.5" />

          {/* Theme toggle */}
          <div className="ml-1">
            <ThemeToggle />
          </div>

          <div className="w-px h-4 bg-border/70 mx-0.5" />

          {/* Resume download */}
          <a
            href={portfolioData.personal.resume}
            download
            className="ml-1 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold
                       bg-accent/10 border border-accent/25 text-accent
                       hover:bg-accent hover:text-white hover:border-accent
                       transition-all duration-300"
          >
            <Download className="w-3 h-3" />
            <span>Resume</span>
          </a>
        </div>

        {/* Thin progress bar anchored under the pill */}
        <div
          className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full overflow-hidden
                     transition-all duration-500"
          style={{ width: scrolled ? '140px' : '0px', opacity: scrolled ? 1 : 0 }}
        >
          <div className="absolute inset-0 bg-border/30" />
          <div
            className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* ── Mobile nav ──────────────────────────────────────────────── */}
      <header className="fixed inset-x-0 top-0 z-50 md:hidden">
        <div
          className={`transition-all duration-300 ${
            scrolled || mobileOpen
              ? 'bg-bg-primary/95 backdrop-blur-xl border-b border-border/50'
              : 'bg-transparent'
          }`}
        >
          <div className="container mx-auto px-4 flex items-center justify-between h-16">
            <Link to="/" className="text-base font-bold gradient-text">SA</Link>
            <div className="flex items-center gap-3">
              {/* Resume download — mobile */}
              <a
                href={portfolioData.personal.resume}
                download
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold
                           bg-accent/10 border border-accent/25 text-accent
                           hover:bg-accent hover:text-white transition-all duration-300"
              >
                <Download className="w-3 h-3" />
                <span>CV</span>
              </a>
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen((p) => !p)}
                className="p-2 rounded-xl text-text-secondary hover:text-accent
                           hover:bg-bg-secondary transition-all duration-200"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`
            overflow-hidden transition-all duration-300 ease-out
            bg-bg-primary/95 backdrop-blur-xl border-b border-border/50
            ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ label, section }) => (
              <button
                key={section}
                onClick={() => goToSection(section)}
                className={`
                  text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                  ${activeSection === section
                    ? 'text-accent bg-accent/10 border border-accent/20'
                    : 'text-text-secondary hover:text-accent hover:bg-bg-secondary'}
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;