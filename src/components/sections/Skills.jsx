import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

/* ── Marquee badge ──────────────────────────────────────────────── */
const Badge = ({ skill, dim = false }) => (
  <div
    className={`flex-shrink-0 px-4 py-2 rounded-xl border backdrop-blur-sm transition-all duration-300 select-none ${
      dim
        ? 'border-border/40 bg-bg-secondary/40 text-text-quaternary'
        : 'border-border/70 bg-card-bg/60 text-text-secondary hover:border-accent/50 hover:text-accent hover:bg-accent/5'
    }`}
  >
    <span className="text-xs font-medium whitespace-nowrap">{skill}</span>
  </div>
);

const MarqueeRow = ({ items, reverse = false, duration = '40s' }) => {
  const [paused, setPaused] = useState(false);
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-1.5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-36 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, rgb(var(--bg-primary)), transparent)' }} />
      <div aria-hidden="true" className="absolute right-0 top-0 bottom-0 w-36 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, rgb(var(--bg-primary)), transparent)' }} />
      <div
        className="flex gap-2.5 w-max"
        style={{
          animation: `${reverse ? 'marqueeRight' : 'marqueeLeft'} ${duration} linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {doubled.map((skill, i) => (
          <Badge key={`${skill}-${i}`} skill={skill} dim={i % 9 === 4} />
        ))}
      </div>
    </div>
  );
};

/* ── Category card ──────────────────────────────────────────────── */
const CategoryCard = ({ title, skills, description, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`relative rounded-2xl glass-card p-5 overflow-hidden
        hover:border-accent/40 hover:-translate-y-1 transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent pointer-events-none" />
      <div className="relative z-10">
        <p className="text-[11px] font-bold text-text-quaternary uppercase tracking-[0.2em] mb-1">
          {title}
        </p>
        {description && (
          <p className="text-[11px] text-text-quaternary/70 mb-3 leading-relaxed">{description}</p>
        )}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {skills.map((s, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-lg text-[11px] font-medium border border-border/70
                         bg-bg-tertiary/50 text-text-secondary
                         hover:border-accent/40 hover:text-accent transition-all duration-200"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Stat pill ──────────────────────────────────────────────────── */
const StatPill = ({ value, label, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={`text-center p-5 rounded-2xl glass-card
        hover:border-accent/40 hover:-translate-y-1 transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-3xl font-black gradient-text mb-1">{value}</div>
      <div className="text-[11px] text-text-quaternary font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
};

/* ── Section ────────────────────────────────────────────────────── */
const Skills = () => {
  const { skills } = portfolioData;

  const row1 = [...skills.languages, ...skills.frontend,  ...skills.languages, ...skills.frontend];
  const row2 = [...skills.backend,   ...skills.databases, ...skills.backend,   ...skills.databases];
  const row3 = [...skills.cloud,     ...skills.tools,     ...skills.cloud,     ...skills.tools, ...skills.cloud];

  const total = Object.values(skills).flat().length;

  // Categories with context descriptions instead of meaningless percentages
  const categories = [
    {
      title: 'Languages',
      description: 'Day-to-day: JavaScript & Python. Systems work: C++ & Java.',
      skills: skills.languages,
      delay: 0,
    },
    {
      title: 'Frontend',
      description: 'React 18 + Vite in production across all client projects.',
      skills: skills.frontend,
      delay: 60,
    },
    {
      title: 'Backend',
      description: 'Node/Express for APIs; Flask & Spring Boot for ML integrations.',
      skills: skills.backend,
      delay: 120,
    },
    {
      title: 'Databases',
      description: 'Firestore for real-time apps; PostgreSQL & MySQL for relational data.',
      skills: skills.databases,
      delay: 180,
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Azure (RBAC, Blob, APIM) at ADA; Firebase across all freelance work.',
      skills: skills.cloud,
      delay: 240,
    },
    {
      title: 'Tools & DevOps',
      description: 'Git, Docker, Postman — daily. VWO from the Decathlon internship.',
      skills: skills.tools,
      delay: 300,
    },
  ];

  // Currently shipping — the stack in active production use
  const inProduction = ['React 18', 'Vite', 'Azure', 'Firebase', 'Node.js', 'Tailwind CSS', 'TypeScript', 'SheetJS', 'Power Automate'];

  const statsData = [
    { value: skills.languages.length + skills.frontend.length,  label: 'Frontend',       delay: 0   },
    { value: skills.backend.length  + skills.databases.length,  label: 'Backend & DB',   delay: 60  },
    { value: skills.cloud.length    + skills.tools.length,       label: 'DevOps & Tools', delay: 120 },
    { value: total,                                               label: 'Total',          delay: 180 },
  ];

  return (
    <section id="skills" className="section py-24 bg-bg-primary relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pattern-dots opacity-[0.012]" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/[0.04] rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle number="04" subtitle="Technologies and tools I work with">
          Skills & Technologies
        </SectionTitle>
      </div>

      {/* Full-width marquee rows */}
      <div className="relative z-10 space-y-3 mb-16">
        <MarqueeRow items={row1} reverse={false} duration="50s" />
        <MarqueeRow items={row2} reverse={true}  duration="60s" />
        <MarqueeRow items={row3} reverse={false} duration="45s" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* ── Currently shipping strip ── */}
        <div className="max-w-6xl mx-auto mb-10">
          <div className="relative rounded-2xl glass-card p-5 overflow-hidden border-accent/20">
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-accent/[0.06] via-transparent to-accent-light/[0.04] pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-shrink-0">
                <p className="text-[11px] font-bold text-accent tracking-[0.22em] uppercase">
                  Currently Shipping
                </p>
                <p className="text-[11px] text-text-quaternary mt-0.5">Active production stack</p>
              </div>
              <div className="h-px sm:h-8 sm:w-px bg-border/40 flex-shrink-0" />
              <div className="flex flex-wrap gap-2">
                {inProduction.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-semibold
                               border border-accent/30 bg-accent/10 text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Category grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-12">
          {categories.map(c => (
            <CategoryCard
              key={c.title}
              title={c.title}
              skills={c.skills}
              description={c.description}
              delay={c.delay}
            />
          ))}
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {statsData.map(s => (
            <StatPill key={s.label} value={s.value} label={s.label} delay={s.delay} />
          ))}
        </div>

        <p className="mt-10 text-center text-text-quaternary text-xs max-w-sm mx-auto leading-relaxed">
          Always learning — combining modern frontend frameworks, robust backend technologies,
          and cloud infrastructure to ship scalable, secure applications.
        </p>
      </div>

      <style>{`
        @keyframes marqueeLeft  { from { transform: translateX(0);    } to { transform: translateX(-50%); } }
        @keyframes marqueeRight { from { transform: translateX(-50%); } to { transform: translateX(0);    } }
      `}</style>
    </section>
  );
};

export default Skills;