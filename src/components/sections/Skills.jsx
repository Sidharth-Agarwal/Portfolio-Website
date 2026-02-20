import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';

const Badge = ({ skill, dim = false }) => (
  <div className={`flex-shrink-0 px-4 py-2 rounded-xl border backdrop-blur-sm transition-all duration-300 select-none ${
    dim
      ? 'border-border/40 bg-bg-secondary/40 text-text-quaternary'
      : 'border-border/70 bg-card-bg/60 text-text-secondary hover:border-accent/50 hover:text-accent hover:bg-accent/5'
  }`}>
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

const Skills = () => {
  const { skills } = portfolioData;

  const row1 = [...skills.languages, ...skills.frontend, ...skills.languages, ...skills.frontend];
  const row2 = [...skills.backend, ...skills.databases, ...skills.backend, ...skills.databases];
  const row3 = [...skills.cloud, ...skills.tools, ...skills.cloud, ...skills.tools, ...skills.cloud, ...skills.tools];

  const total = Object.values(skills).flat().length;
  const statsData = [
    { value: skills.languages.length + skills.frontend.length, label: 'Frontend' },
    { value: skills.backend.length + skills.databases.length,  label: 'Backend & DB' },
    { value: skills.cloud.length + skills.tools.length,        label: 'DevOps & Tools' },
    { value: total, label: 'Total' },
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

      {/* Stats */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {statsData.map((s) => (
            <div key={s.label} className="text-center p-5 rounded-2xl glass-card hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl font-black gradient-text mb-1">{s.value}</div>
              <div className="text-[11px] text-text-quaternary font-medium uppercase tracking-wider">{s.label}</div>
            </div>
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