import React from 'react';
import { GraduationCap, MapPin, Calendar, Dumbbell, BookOpen, Briefcase } from 'lucide-react';
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
  const bioParagraphs = Array.isArray(personal.bio) ? personal.bio : [personal.bio];

  return (
    <section id="about" className="section py-24 bg-bg-secondary relative">
      <div aria-hidden="true" className="absolute inset-0 pattern-grid opacity-[0.015]" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle number="01" subtitle="Background, what I'm building, and what drives me">
          About Me
        </SectionTitle>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* ── Bio — 2 col ── */}
          <Cell className="md:col-span-2 p-7" delay={0} glow>
            <p className="text-[11px] font-bold text-accent tracking-[0.22em] uppercase mb-5">Bio</p>
            <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
              {bioParagraphs.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </Cell>

          {/* ── Location ── */}
          <Cell className="p-6" delay={80}>
            <div className="flex flex-col h-full gap-4">

              {/* Location header */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-accent/10 rounded-xl flex-shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-text-quaternary uppercase tracking-[0.2em] mb-1">
                    Location
                  </p>
                  <p className="text-text-primary font-bold text-sm">{personal.location}</p>
                  <p className="text-text-quaternary text-xs mt-0.5">IST · UTC+5:30</p>
                </div>
              </div>

              <div className="h-px bg-border/40" />

              {/* Currently at */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-xl flex-shrink-0 mt-0.5">
                  <Briefcase className="w-3.5 h-3.5 text-accent" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-text-quaternary uppercase tracking-[0.2em] mb-0.5">
                    Currently at
                  </p>
                  <p className="text-text-primary font-semibold text-xs leading-snug">
                    ADA Digital Analytics
                  </p>
                  <p className="text-text-quaternary text-[11px] mt-0.5">Software Engineer · Jul 2024</p>
                </div>
              </div>

              <div className="h-px bg-border/40" />

              {/* Availability */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="text-xs text-text-secondary font-medium">Open to opportunities</span>
              </div>

              {/* Work mode tags */}
              <div className="flex flex-wrap gap-1.5">
                {['Remote', 'Hybrid', 'Contract', 'Full-time'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md text-[11px] border border-border/60 bg-bg-tertiary/50 text-text-quaternary">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-text-quaternary text-[11px] mt-auto">Responds within 24 hours</p>
            </div>
          </Cell>

          {/* ── Experience ── */}
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
              <div className="h-px bg-border/40 my-3" />
              <p className="text-text-quaternary text-[11px]">Jul 2024 – Present</p>
              <p className="text-text-quaternary text-[11px] mt-0.5">+ 2 prior internships</p>
            </div>
          </Cell>

          {/* ── Projects ── */}
          <Cell className="p-6" delay={180}>
            <div className="flex flex-col h-full">
              <p className="text-[11px] font-bold text-text-quaternary uppercase tracking-[0.2em] mb-1.5">
                Projects
              </p>
              <p className="text-3xl font-black gradient-text leading-none mb-1">10+</p>
              <p className="text-text-quaternary text-xs">Delivered end‑to‑end</p>
              <div className="h-px bg-border/40 my-3" />
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-text-quaternary">Consulting</span>
                  <span className="text-[11px] font-semibold text-text-secondary">7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-text-quaternary">Personal</span>
                  <span className="text-[11px] font-semibold text-text-secondary">5</span>
                </div>
              </div>
            </div>
          </Cell>

          {/* ── Next Step + Outside Code ── */}
          <Cell className="p-6" delay={220}>
            <div className="flex flex-col h-full gap-4">

              {/* MSc */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-xl flex-shrink-0 mt-0.5">
                  <BookOpen className="w-3.5 h-3.5 text-accent" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-text-quaternary uppercase tracking-[0.2em] mb-0.5">
                    Next Step
                  </p>
                  <p className="text-text-primary font-semibold text-xs leading-snug">
                    MSc Computer Science
                  </p>
                  <p className="text-text-quaternary text-[11px] mt-0.5">
                    Edinburgh · Glasgow · TCD — Sep 2026
                  </p>
                </div>
              </div>

              <div className="h-px bg-border/40" />

              {/* Boxing */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-xl flex-shrink-0 mt-0.5">
                  <Dumbbell className="w-3.5 h-3.5 text-accent" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-text-quaternary uppercase tracking-[0.2em] mb-0.5">
                    Outside Code
                  </p>
                  <p className="text-text-primary font-semibold text-xs">Boxing</p>
                  <p className="text-text-quaternary text-[11px] mt-0.5">
                    Strength & conditioning
                  </p>
                </div>
              </div>

              <div className="h-px bg-border/40" />

              {/* Mentored stat */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-text-quaternary">Students mentored</span>
                <span className="text-sm font-black gradient-text">700+</span>
              </div>

            </div>
          </Cell>

          {/* ── Education — full width ── */}
          <Cell className="md:col-span-3 p-7" delay={260}>
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
                  {/* Chips — allow full wrapping, no overflow clip */}
                  <div className="flex flex-wrap gap-2 md:max-w-sm flex-shrink-0">
                    {education.coursework.slice(0, 4).map((c, i) => (
                      <span key={i} className="px-2.5 py-1 bg-bg-tertiary/60 border border-border/60 text-text-quaternary text-[11px] rounded-lg whitespace-nowrap">
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