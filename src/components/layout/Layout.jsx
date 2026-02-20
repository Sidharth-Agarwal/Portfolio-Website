import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileNav from './MobileNav';
import PageTransition from '../common/PageTransition';

const Layout = () => {
  const location = useLocation();

  // Scroll to top on route change (Lenis handles smoothness)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Hash-based scroll after route change
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      }, 150);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-bg-primary transition-colors duration-300">
      <Navbar />

      <PageTransition>
        <Outlet />
      </PageTransition>

      <Footer />

      {/* Glassmorphism bottom nav — visible on mobile only */}
      <MobileNav />
    </div>
  );
};

export default Layout;