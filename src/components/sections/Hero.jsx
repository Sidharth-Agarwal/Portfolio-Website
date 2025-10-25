import React from 'react';
import { ArrowRight, Github, Download } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import Button from '../common/Button';
import { scrollToElement } from '../../utils/helpers';

const Hero = () => {
  const { personal } = portfolioData;

  const handleContactClick = () => {
    scrollToElement('contact');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-bg-primary pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl animate-fade-in-up">
          {/* Greeting */}
          <p className="text-accent text-lg md:text-xl mb-4 font-medium">
            Hi, my name is
          </p>
          
          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 leading-tight">
            {personal.name}
          </h1>
          
          {/* Tagline */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-text-secondary mb-6">
            {personal.tagline}
          </h2>
          
          {/* Bio */}
          <p className="text-base md:text-lg text-text-tertiary mb-8 max-w-2xl leading-relaxed">
            {personal.bio}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={handleContactClick}
              icon={ArrowRight}
            >
              Get In Touch
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              href={personal.github}
              icon={Github}
              iconPosition="left"
            >
              View GitHub
            </Button>

            {/* Optional Resume Download */}
            {/* <Button
              variant="outline"
              size="lg"
              href="/resume.pdf"
              icon={Download}
              iconPosition="left"
            >
              Download Resume
            </Button> */}
          </div>

          {/* Quick Stats (Optional) */}
          <div className="mt-16 flex flex-wrap gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">3+</div>
              <div className="text-sm text-text-tertiary">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">10+</div>
              <div className="text-sm text-text-tertiary">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">700+</div>
              <div className="text-sm text-text-tertiary">Students Mentored</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;