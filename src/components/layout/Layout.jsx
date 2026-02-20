import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-bg-primary transition-colors duration-300">
      <Navbar />
      {/*
        key={location.pathname} forces React to unmount/remount the main element
        on route change, triggering the page-enter animation each time.
      */}
      <main key={location.pathname} className="min-h-screen page-enter">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;