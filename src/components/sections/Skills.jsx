import React, { useState } from 'react';
import {
  RadarChart, PolarGrid, PolarAngleAxis,
  Radar, ResponsiveContainer, Tooltip,
} from 'recharts';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';

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

/* ── Bento category cell ────────────────────────────────────────── */
const BentoCell = ({ title, skills, glow = false }) => (
  <div className={`relative rounded-2xl glass-card p-5 overflow-hidden hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 ${glow ? 'border-accent/18' : ''}`}>
    {glow && (
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-accent/[0.06] to-transparent pointer-events-none" />
    )}
    <div className="relative z-10">
      <p className="text-[11px] font-bold text-text-quaternary uppercase tracking-[0.2em] mb-3">{title}</p>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((s, i) => (
          <span
            key={i}
            className="px-2.5 py-1 rounded-lg text-[11px] font-medium border border-border/70 bg-bg-tertiary/50 text-text-secondary hover:border-accent/40 hover:text-accent transition-all duration-200"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  </div>
);

/* ── Recharts radar tooltip ─────────────────────────────────────── */
const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="px-3 py-2 rounded-xl glass-card text-[12px]">
      <span className="text-text-primary font-semibold">{payload[0].value}%</span>
      <span className="text-text-quaternary ml-1">proficiency</span>
    </div>
  );
};

/* ── Radar data ─────────────────────────────────────────────────── */
const radarData = [
  { subject: 'Frontend',  value: 90, fullMark: 100 },
  { subject: 'Backend',   value: 82, fullMark: 100 },
  { subject: 'Databases', value: 75, fullMark: 100 },
  { subject: 'Cloud',     value: 65, fullMark: 100 },
  { subject: 'Tools',     value: 72, fullMark: 100 },
  { subject: 'Languages', value: 88, fullMark: 100 },
];

/* ── Section ────────────────────────────────────────────────────── */
const Skills = () => {
  const { skills } = portfolioData;

  const row1 = [...skills.languages, ...skills.frontend,  ...skills.languages, ...skills.frontend];
  const row2 = [...skills.backend,   ...skills.databases, ...skills.backend,   ...skills.databases];
  const row3 = [...skills.cloud,     ...skills.tools,     ...skills.cloud,     ...skills.tools,    ...skills.cloud];

  const total = Object.values(skills).flat().length;

  const categories = [
    { title: 'Languages',      skills: skills.languages, glow: true  },
    { title: 'Frontend',       skills: skills.frontend              },
    { title: 'Backend',        skills: skills.backend               },
    { title: 'Databases',      skills: skills.databases             },
    { title: 'Cloud',          skills: skills.cloud                 },
    { title: 'Tools & DevOps', skills: skills.tools                 },
  ];

  const statsData = [
    { value: skills.languages.length + skills.frontend.length, label: 'Frontend'       },
    { value: skills.backend.length  + skills.databases.length, label: 'Backend & DB'   },
    { value: skills.cloud.length    + skills.tools.length,     label: 'DevOps & Tools' },
    { value: total,                                             label: 'Total'          },
  ];

  return (
    <section id="skills" className="section py-24 bg-bg-primary relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pattern-dots opacity-[0.012]" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/[0.04] rounded-full blur-[110px] pointer-events-none" />

      {/* Title (inside container so it aligns) */}
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

        {/* ── Bento grid + Radar ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 max-w-6xl mx-auto mb-12">

          {/* Bento cells — 3 cols */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {categories.map(c => (
              <BentoCell key={c.title} title={c.title} skills={c.skills} glow={c.glow} />
            ))}
          </div>

          {/* Radar chart — 2 cols */}
          <div className="lg:col-span-2 rounded-2xl glass-card p-6 flex flex-col hover:border-accent/40 transition-all duration-300">
            <p className="text-[11px] font-bold text-text-quaternary uppercase tracking-[0.2em] mb-4">
              Skill Proficiency
            </p>
            <div className="flex-1" style={{ minHeight: '260px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="72%">
                  <PolarGrid
                    stroke="rgb(var(--border))"
                    strokeOpacity={0.45}
                  />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{
                      fill: 'var(--text-quaternary)',
                      fontSize: 11,
                      fontWeight: 600,
                    }}
                  />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="rgb(var(--accent))"
                    fill="rgb(var(--accent))"
                    fillOpacity={0.16}
                    strokeWidth={2}
                    dot={{ r: 3, fill: 'rgb(var(--accent))', strokeWidth: 0 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {statsData.map(s => (
            <div
              key={s.label}
              className="text-center p-5 rounded-2xl glass-card hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
            >
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