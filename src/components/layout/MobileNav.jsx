import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Briefcase, Code2, User, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const tabs = [
  { icon: Home,      label: 'Home',       section: null,         path: '/' },
  { icon: User,      label: 'About',      section: 'about',      path: '/' },
  { icon: Briefcase, label: 'Experience', section: 'experience', path: '/' },
  { icon: Code2,     label: 'Work',       section: 'work',       path: '/' },
  { icon: Mail,      label: 'Contact',    section: 'contact',    path: '/' },
];

const sectionIds = ['about', 'experience', 'work', 'skills', 'contact'];

const MobileNav = () => {
  const location = useLocation();
  const navigate  = useNavigate();

  // Derive active section from scroll position — same hook as desktop navbar
  const activeSection = useScrollSpy(sectionIds);

  /**
   * Map the current scroll-spy section → which tab should be highlighted.
   * When no section is active (top of page) we fall back to 'home'.
   */
  const activeTab = (() => {
    if (!activeSection) return 'home';
    const match = tabs.find(t => t.section === activeSection);
    return match ? match.label.toLowerCase() : 'home';
  })();

  const handleTap = (tab) => {
    if (tab.section === null) {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (location.pathname !== tab.path) {
      navigate(tab.path);
      setTimeout(() => scrollToSection(tab.section), 150);
    } else {
      scrollToSection(tab.section);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-50 md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div
        className="mx-3 mb-3 rounded-2xl border border-border/40
                   backdrop-blur-2xl bg-bg-primary/80 shadow-2xl shadow-black/20"
      >
        <div className="flex items-center justify-around px-2 py-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.label.toLowerCase();
            const Icon = tab.icon;

            return (
              <button
                key={tab.label}
                onClick={() => handleTap(tab)}
                className="relative flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl
                           transition-colors duration-200 min-w-[52px]"
              >
                {/* Sliding pill indicator */}
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-pill"
                    className="absolute inset-0 rounded-xl bg-accent/10 border border-accent/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                <Icon
                  className={`w-5 h-5 relative z-10 transition-colors duration-200 ${
                    isActive ? 'text-accent' : 'text-text-quaternary'
                  }`}
                />
                <span
                  className={`text-[10px] font-medium relative z-10 transition-colors duration-200 ${
                    isActive ? 'text-accent' : 'text-text-quaternary'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;