import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Work from '../components/sections/Work';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;