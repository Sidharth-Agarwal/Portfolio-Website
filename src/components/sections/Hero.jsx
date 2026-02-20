import React, { useState, useRef } from 'react';
import { ArrowRight, Github, Download } from 'lucide-react';
import CountUp from 'react-countup';
import { TypeAnimation } from 'react-type-animation';
import { portfolioData } from '../../data/portfolioData';
import Button from '../common/Button';
import { scrollToElement } from '../../utils/helpers';

const stats = [
  { end: 1.5, suffix: '+', decimals: 1, label: 'Years Exp.'  },
  { end: 10,  suffix: '+', decimals: 0, label: 'Projects'    },
  { end: 700, suffix: '+', decimals: 0, label: 'Mentored'    },
];

const Hero = () => {
  const { personal } = portfolioData;
  const [mouse, setMouse] = useState({ x: 50, y: 40 });
  const heroRef = useRef(null);

  const [firstName, lastName] = personal.name.split(' ');

  const onMouseMove = (e) => {
    if (!heroRef.current) return;
    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    setMouse({ x: ((e.clientX - left) / width) * 100, y: ((e.clientY - top) / height) * 100 });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      onMouseMove={onMouseMove}
      className="min-h-screen flex items-center bg-bg-primary pt-24 pb-16 relative overflow-hidden"
    >
      {/* Noise grain */}
      <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.025]">
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* Mouse-tracked glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none transition-all duration-[1400ms] ease-out"
        style={{ background: `radial-gradient(65% 55% at ${mouse.x}% ${mouse.y}%, rgb(var(--accent) / 0.12) 0%, transparent 100%)` }}
      />

      {/* Orbs */}
      <div aria-hidden="true" className="absolute -top-10 right-0 w-[600px] h-[600px] rounded-full bg-accent/[0.07] blur-[150px] pointer-events-none animate-float" />
      <div aria-hidden="true" className="absolute -bottom-20 -left-10 w-[480px] h-[480px] rounded-full bg-accent-light/[0.07] blur-[130px] pointer-events-none animate-float" style={{ animationDelay: '1.8s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-10 rounded-full border border-border/70 bg-card-bg/50 backdrop-blur-sm opacity-0 hero-reveal" style={{ animationDelay: '0.05s' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-text-tertiary text-xs tracking-wide">Available for new opportunities</span>
          </div>

          {/* "Hi, I'm" */}
          <p className="text-[11px] font-bold tracking-[0.22em] text-text-quaternary uppercase mb-6 opacity-0 hero-reveal" style={{ animationDelay: '0.15s' }}>
            Hi, I'm
          </p>

          {/* Name */}
          <div className="mb-10 opacity-0 hero-reveal" style={{ animationDelay: '0.25s' }}>
            <h1 className="font-black text-text-primary leading-[0.86] tracking-tight select-none" style={{ fontSize: 'clamp(3.8rem, 9.5vw, 9rem)' }}>
              {firstName}
            </h1>
            <h1 className="text-outline font-black leading-[0.86] tracking-tight select-none" style={{ fontSize: 'clamp(3.8rem, 9.5vw, 9rem)' }}>
              {lastName}<span className="gradient-text" style={{ WebkitTextStroke: 0 }}>.</span>
            </h1>
          </div>

          {/* Typing animation tagline */}
          <h2
            className="text-lg md:text-xl font-semibold text-text-secondary mb-3 max-w-xl leading-snug opacity-0 hero-reveal"
            style={{ animationDelay: '0.35s', minHeight: '1.75rem' }}
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',          1800,
                'Healthcare Systems Engineer',   1800,
                'React & Node.js Specialist',    1800,
                'Quantitative Finance Enthusiast', 1800,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              cursor={true}
              style={{ display: 'inline-block' }}
            />
          </h2>

          {/* Bio */}
          <p className="text-sm text-text-tertiary mb-10 max-w-xl leading-relaxed opacity-0 hero-reveal" style={{ animationDelay: '0.44s' }}>
            {personal.bio}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-14 opacity-0 hero-reveal" style={{ animationDelay: '0.54s' }}>
            <Button variant="primary" size="lg" onClick={() => scrollToElement('contact')} icon={ArrowRight} className="btn-hover">
              Get In Touch
            </Button>
            <Button variant="secondary" size="lg" href={personal.github} icon={Github} iconPosition="left">
              View GitHub
            </Button>
            <Button variant="secondary" size="lg" href={personal.resume} icon={Download} iconPosition="left">
              Download Resume
            </Button>
          </div>

          {/* Stats — animated with react-countup */}
          <div className="flex items-center gap-8 opacity-0 hero-reveal" style={{ animationDelay: '0.64s' }}>
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                <div>
                  <div className="text-2xl font-black gradient-text leading-none">
                    <CountUp
                      end={s.end}
                      decimals={s.decimals}
                      suffix={s.suffix}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>
                  <div className="text-[11px] text-text-quaternary mt-1 tracking-wide">{s.label}</div>
                </div>
                {i < stats.length - 1 && (
                  <div className="h-8 w-px bg-border/60" />
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @keyframes heroReveal {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-reveal { animation: heroReveal 0.75s cubic-bezier(0.16,1,0.3,1) forwards; }
      `}</style>
    </section>
  );
};

export default Hero;