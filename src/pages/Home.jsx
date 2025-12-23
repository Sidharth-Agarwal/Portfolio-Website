import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Consulting from '../components/sections/Consulting';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      {/* <Projects /> */}
      <Consulting />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;