import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const About = () => {
  const { personal, education } = portfolioData;
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" className="section py-24 bg-bg-secondary relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle subtitle="Get to know more about my background and journey">
          About Me
        </SectionTitle>

        <div
          ref={ref}
          className={`max-w-5xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Bio Section */}
            <div className="md:col-span-2">
              <div className="bg-card-bg border border-border rounded-2xl p-8 h-full">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-text-secondary">
                    I'm a <span className="text-accent font-semibold">Software Engineer</span> based in {personal.location}, 
                    specializing in building exceptional digital experiences. With a strong foundation in both frontend and 
                    backend development, I create scalable and secure web applications that solve real-world problems.
                  </p>
                  
                  <p className="text-text-secondary">
                    My journey in tech began with a passion for problem-solving through code. Whether it's architecting 
                    complex backend systems or crafting intuitive user interfaces, I'm driven by the challenge of turning 
                    ideas into reality.
                  </p>
                  
                  <p className="text-text-secondary">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                    projects, or mentoring aspiring developers. I'm always eager to collaborate on innovative 
                    projects that make a difference.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="space-y-4">
              {/* Location Card */}
              <div className="bg-card-bg border border-border rounded-2xl p-6 hover:border-accent transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-text-primary">Location</h3>
                </div>
                <p className="text-text-secondary">{personal.location}</p>
                <p className="text-text-tertiary text-sm mt-1">Available for remote work</p>
              </div>

              {/* Experience Card */}
              <div className="bg-card-bg border border-border rounded-2xl p-6 hover:border-accent transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Calendar className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-text-primary">Experience</h3>
                </div>
                <p className="text-text-secondary">1.5+ Years</p>
                <p className="text-text-tertiary text-sm mt-1">Professional development</p>
              </div>
            </div>
          </div>

          {/* Education Highlight */}
          <div className="bg-gradient-to-br from-accent/5 to-accent-light/5 border border-accent/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-accent/10 rounded-2xl">
                <GraduationCap className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  Education
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-text-primary font-semibold text-lg">
                      {education.degree}
                    </p>
                    <p className="text-accent font-medium">
                      Specialization: {education.specialization}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-text-secondary">
                    <span className="font-medium">{education.institution}</span>
                    <span className="hidden md:block text-border">•</span>
                    <span className="text-text-tertiary">{education.period}</span>
                  </div>
                  
                  {/* Coursework Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {education.coursework.slice(0, 4).map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-bg-tertiary text-text-tertiary text-xs font-medium rounded-full border border-border"
                      >
                        {course}
                      </span>
                    ))}
                    {education.coursework.length > 4 && (
                      <span className="px-3 py-1 bg-bg-tertiary text-text-tertiary text-xs font-medium rounded-full border border-border">
                        +{education.coursework.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;