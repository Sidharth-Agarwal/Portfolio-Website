import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Cell = ({ children, className = '', delay = 0, glow = false }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={`
        relative rounded-2xl glass-card overflow-hidden
        transition-all duration-700 hover:border-accent/40
        hover:shadow-lg hover:shadow-accent/10
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {glow && (
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-accent/[0.05] to-transparent pointer-events-none" />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

const About = () => {
  const { personal, education } = portfolioData;

  return (
    <section id="about" className="section py-24 bg-bg-secondary relative">
      <div aria-hidden="true" className="absolute inset-0 pattern-grid opacity-[0.015]" />
      {/* Ambient glow */}
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle number="01" subtitle="Background, education, and what drives me">
          About Me
        </SectionTitle>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Bio — 2 col */}
          <Cell className="md:col-span-2 p-7" delay={0} glow>
            <p className="text-[11px] font-bold text-accent tracking-[0.22em] uppercase mb-5">
              Bio
            </p>
            <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <p>
                I'm a <span className="text-text-primary font-semibold">Software Engineer</span> based
                in {personal.location}, specializing in building exceptional digital experiences.
                With a strong foundation in both frontend and backend development, I create
                scalable and secure web applications that solve real‑world problems.
              </p>
              <p>
                My journey in tech began with a passion for problem‑solving through code. Whether
                it's architecting complex backend systems or crafting intuitive user interfaces,
                I'm driven by the challenge of turning ideas into reality.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open‑source projects, or mentoring aspiring developers.
              </p>
            </div>
          </Cell>

          {/* Location */}
          <Cell className="p-6" delay={80}>
            <div className="flex flex-col h-full">
              <div className="p-2.5 bg-accent/10 rounded-xl w-fit mb-4">
                <MapPin className="w-4 h-4 text-accent" />
              </div>
              <p className="text-[11px] font-bold text-text-quaternary uppercase tracking-[0.2em] mb-1.5">
                Location
              </p>
              <p className="text-text-primary font-bold text-sm">{personal.location}</p>
              <p className="text-text-quaternary text-xs mt-1 leading-relaxed">
                Available for remote work worldwide
              </p>
            </div>
          </Cell>

          {/* Experience */}
          <Cell className="p-6" delay={140}>
            <div className="flex flex-col h-full">
              <div className="p-2.5 bg-accent/10 rounded-xl w-fit mb-4">
                <Calendar className="w-4 h-4 text-accent" />
              </div>
              <p className="text-[11px] font-bold text-text-quaternary uppercase tracking-[0.2em] mb-1.5">
                Experience
              </p>
              <p className="text-3xl font-black gradient-text leading-none mb-1">1.5+</p>
              <p className="text-text-quaternary text-xs">Years professional</p>
            </div>
          </Cell>

          {/* Projects */}
          <Cell className="p-6" delay={180}>
            <div className="flex flex-col h-full">
              <p className="text-[11px] font-bold text-text-quaternary uppercase tracking-[0.2em] mb-1.5">
                Projects
              </p>
              <p className="text-3xl font-black gradient-text leading-none mb-1">10+</p>
              <p className="text-text-quaternary text-xs">Delivered end‑to‑end</p>
            </div>
          </Cell>

          {/* Education — full width */}
          <Cell className="md:col-span-3 p-7" delay={240}>
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-accent/[0.04] via-transparent to-accent-light/[0.03] pointer-events-none" />
            <div className="relative z-10 flex items-start gap-5">
              <div className="p-3 bg-accent/10 border border-accent/20 rounded-2xl flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold text-accent tracking-[0.22em] uppercase mb-3">
                  Education
                </p>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <p className="text-text-primary font-bold leading-snug">{education.degree}</p>
                    <p className="text-accent text-sm font-medium mt-1">
                      Specialization: {education.specialization}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs">
                      <span className="text-text-secondary font-medium">{education.institution}</span>
                      <span className="text-border hidden md:inline">·</span>
                      <span className="text-text-tertiary">{education.period}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 md:max-w-xs flex-shrink-0">
                    {education.coursework.slice(0, 4).map((c, i) => (
                      <span key={i} className="px-2.5 py-1 bg-bg-tertiary/60 border border-border/60 text-text-quaternary text-[11px] rounded-lg">
                        {c}
                      </span>
                    ))}
                    {education.coursework.length > 4 && (
                      <span className="px-2.5 py-1 bg-bg-tertiary/60 border border-border/60 text-text-quaternary text-[11px] rounded-lg">
                        +{education.coursework.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Cell>

        </div>
      </div>
    </section>
  );
};

export default About;