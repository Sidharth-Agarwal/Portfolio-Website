import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import router from './router';
import CustomCursor from './components/common/CustomCursor';
import Preloader from './components/common/Preloader';
import { useSmoothScroll } from './hooks/useSmoothScroll';

const AppInner = () => {
  // Initialise Lenis + GSAP ScrollTrigger sync at the root level
  useSmoothScroll();

  return (
    <>
      <CustomCursor />
      <RouterProvider router={router} />
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  // Show preloader on very first visit per session
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <AppInner />
      )}
    </ThemeProvider>
  );
};

export default App;