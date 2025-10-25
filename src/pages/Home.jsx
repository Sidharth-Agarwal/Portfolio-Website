import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Freelance from '../components/sections/Freelance';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Freelance />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;