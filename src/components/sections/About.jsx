import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const About = () => {
  const { personal, education } = portfolioData;
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" className="section py-20 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Get to know more about my background">
          About Me
        </SectionTitle>

        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-text-secondary">
              I'm a Software Engineer based in {personal.location}, specializing in building 
              exceptional digital experiences. With a strong foundation in both frontend and 
              backend development, I create scalable and secure web applications that solve 
              real-world problems.
            </p>
            
            <p className="text-text-secondary">
              My journey in tech began with a passion for problem-solving through code. I hold a{' '}
              <span className="text-accent font-semibold">{education.degree}</span> with a 
              specialization in <span className="text-accent font-semibold">{education.specialization}</span> from{' '}
              <span className="text-accent font-semibold">{education.institution}</span>. 
              Whether it's architecting complex backend systems or crafting intuitive user interfaces, 
              I'm driven by the challenge of turning ideas into reality.
            </p>
            
            <p className="text-text-secondary">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or mentoring aspiring developers. I'm always eager to collaborate on innovative 
              projects that make a difference.
            </p>
          </div>

          {/* Education Highlight */}
          <div className="mt-12 p-6 bg-card-bg border border-border rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">
              Education
            </h3>
            <div className="space-y-2">
              <p className="text-text-primary font-semibold">
                {education.degree}
              </p>
              <p className="text-accent">
                {education.specialization}
              </p>
              <p className="text-text-secondary">
                {education.institution}
              </p>
              <p className="text-text-tertiary text-sm">
                {education.period}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;