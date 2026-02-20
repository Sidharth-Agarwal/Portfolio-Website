import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, MapPin, Calendar, TrendingUp } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

gsap.registerPlugin(ScrollTrigger);

/* ── Pulsing dot + card ─────────────────────────────────────────── */
const TimelineItem = ({ exp, index, isLast }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`
        relative flex gap-5 md:gap-7 transition-all duration-700
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}
      `}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* ── Timeline column ── */}
      <div className="flex flex-col items-center flex-shrink-0 pt-1">
        {/* Dot */}
        <div className="relative z-10">
          <div
            className={`
              w-3 h-3 rounded-full border-2 border-accent bg-bg-primary
              transition-all duration-700
              ${isVisible ? 'shadow-[0_0_14px_rgba(13,148,136,0.55)]' : ''}
            `}
          />
          {isVisible && (
            <div
              className="absolute inset-0 rounded-full border border-accent/40 animate-ping"
              style={{ animationDuration: '1.8s' }}
            />
          )}
        </div>
        {/* Spacer so cards have breathing room (actual line is behind via absolute) */}
        {!isLast && <div className="flex-1 mt-2" style={{ minHeight: '3rem' }} />}
      </div>

      {/* ── Card ── */}
      <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-8'}`}>
        <div className="group relative rounded-2xl glass-card p-6 overflow-hidden hover:border-accent/45 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-accent/0 group-hover:from-accent/[0.04] to-transparent rounded-2xl transition-all duration-500 pointer-events-none"
          />

          {/* Watermark */}
          <div
            aria-hidden="true"
            className="absolute right-4 top-3 font-black text-text-primary/[0.04] select-none pointer-events-none leading-none group-hover:text-accent/[0.06] transition-all duration-500"
            style={{ fontSize: '4rem' }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>

          <div className="relative z-10">
            {/* Company badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-3 rounded-full border border-accent/25 bg-accent/10">
              <Briefcase className="w-3 h-3 text-accent" />
              <span className="text-accent text-[11px] font-bold">{exp.company}</span>
            </div>

            <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300 leading-snug">
              {exp.title}
            </h3>

            <div className="flex flex-wrap gap-3 mb-4">
              <div className="flex items-center gap-1.5 text-text-quaternary text-[11px]">
                <MapPin className="w-3 h-3 flex-shrink-0" />
                <span>{exp.location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-text-quaternary text-[11px]">
                <Calendar className="w-3 h-3 flex-shrink-0" />
                <span>{exp.period}</span>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-border/40 to-transparent mb-4" />

            <ul className="space-y-2.5">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 p-1 bg-accent/10 rounded">
                    <TrendingUp className="w-2.5 h-2.5 text-accent" />
                  </div>
                  <span className="text-text-tertiary text-sm leading-relaxed group-hover:text-text-secondary transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Main section ───────────────────────────────────────────────── */
const Experience = () => {
  const { experience } = portfolioData;
  const containerRef = useRef(null);
  const lineRef      = useRef(null);

  /**
   * Scroll-linked timeline path draw.
   * A single gradient bar scales from 0 → 1 as the section scrolls through.
   * The bar sits absolutely at the dot column centre (left: 5px = half of w-3=12px minus 1px).
   */
  useEffect(() => {
    const bar  = lineRef.current;
    const wrap = containerRef.current;
    if (!bar || !wrap) return;

    gsap.set(bar, { scaleY: 0, transformOrigin: 'top center' });

    const st = ScrollTrigger.create({
      trigger: wrap,
      start: 'top 72%',
      end:   'bottom 62%',
      scrub: 0.9,
      onUpdate: (self) => {
        gsap.set(bar, { scaleY: self.progress });
      },
    });

    return () => st.kill();
  }, []);

  return (
    <section id="experience" className="section py-24 bg-bg-primary relative">
      <div aria-hidden="true" className="absolute inset-0 pattern-dots opacity-[0.012]" />
      <div aria-hidden="true" className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle number="02" subtitle="My professional journey and career highlights">
          Experience
        </SectionTitle>

        <div ref={containerRef} className="max-w-4xl mx-auto relative">
          {/* Scroll-drawn gradient line */}
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 w-[2px] rounded-full overflow-hidden pointer-events-none"
            style={{ left: '5px' }}
          >
            <div
              ref={lineRef}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(to bottom, rgb(var(--accent) / 0.75), rgb(var(--accent-light) / 0.18))',
              }}
            />
          </div>

          {experience.map((exp, i) => (
            <TimelineItem
              key={exp.id}
              exp={exp}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-block glass-card rounded-2xl px-8 py-5">
            <p className="text-text-secondary text-sm font-medium">Want to know more?</p>
            <p className="text-text-quaternary text-xs mt-1">Reach out for my detailed resume</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;