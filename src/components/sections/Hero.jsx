import React from 'react';
import { ArrowRight, Github, Download, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import Button from '../common/Button';
import { scrollToElement } from '../../utils/helpers';

const Hero = () => {
  const { personal } = portfolioData;

  const handleContactClick = () => {
    scrollToElement('contact');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-bg-primary pt-24 pb-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <p className="text-accent text-sm font-medium">
              Available for new opportunities
            </p>
          </div>
          
          {/* Main Content */}
          <div className="animate-fade-in-up">
            {/* Greeting */}
            <p className="text-accent text-lg md:text-xl mb-4 font-medium">
              Hi, my name is
            </p>
            
            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
              {personal.name}
              <span className="text-accent">.</span>
            </h1>
            
            {/* Tagline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-secondary mb-8 leading-snug">
              {personal.tagline}
            </h2>
            
            {/* Bio */}
            <p className="text-base md:text-lg text-text-tertiary mb-12 max-w-2xl leading-relaxed">
              {personal.bio}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button
                variant="primary"
                size="lg"
                onClick={handleContactClick}
                icon={ArrowRight}
                className="btn-hover"
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
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-xl">
              <div className="text-center p-4 bg-card-bg border border-border rounded-2xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">1.5+</div>
                <div className="text-sm text-text-tertiary font-medium">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-card-bg border border-border rounded-2xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">10+</div>
                <div className="text-sm text-text-tertiary font-medium">Projects Done</div>
              </div>
              <div className="text-center p-4 bg-card-bg border border-border rounded-2xl hover:border-accent transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">700+</div>
                <div className="text-sm text-text-tertiary font-medium">Students Helped</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-accent rounded-full"></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;