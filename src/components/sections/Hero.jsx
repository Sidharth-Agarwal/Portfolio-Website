import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Github, Download, ChevronDown } from 'lucide-react';
import CountUp from 'react-countup';
import { TypeAnimation } from 'react-type-animation';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { portfolioData } from '../../data/portfolioData';
import Button from '../common/Button';
import MagneticButton from '../common/MagneticButton';
import AuroraBackground from '../common/AuroraBackground';
import { scrollToElement } from '../../utils/helpers';

const stats = [
  { end: 1.5, suffix: '+', decimals: 1, label: 'Years Exp.' },
  { end: 10,  suffix: '+', decimals: 0, label: 'Projects'   },
  { end: 700, suffix: '+', decimals: 0, label: 'Mentored'   },
];

const PARTICLES_OPTS = {
  particles: {
    number: { value: 38, density: { enable: true, value_area: 900 } },
    color:  { value: '#0d9488' },
    opacity: { value: 0.2, random: true, anim: { enable: true, speed: 0.4, opacity_min: 0.06 } },
    size:   { value: 2.2, random: true },
    move:   { enable: true, speed: 0.5, direction: 'none', random: true, out_mode: 'out' },
    links:  { enable: true, distance: 130, color: '#0d9488', opacity: 0.08, width: 1 },
  },
  interactivity: {
    events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: false } },
    modes:  { grab: { distance: 140, line_linked: { opacity: 0.2 } } },
  },
  retina_detect: true,
};

const Hero = () => {
  const { personal } = portfolioData;
  const [mouse, setMouse]   = useState({ x: 50, y: 40 });
  const [pReady, setPReady] = useState(false);
  const heroRef = useRef(null);
  const [firstName, lastName] = personal.name.split(' ');

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setPReady(true));
  }, []);

  const onMouseMove = (e) => {
    if (!heroRef.current) return;
    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - left) / width)  * 100,
      y: ((e.clientY - top)  / height) * 100,
    });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      onMouseMove={onMouseMove}
      className="min-h-screen flex items-center bg-bg-primary pt-24 pb-16 relative overflow-hidden"
    >
      <AuroraBackground />

      {pReady && (
        <Particles
          id="hero-particles"
          options={PARTICLES_OPTS}
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        />
      )}

      <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.025] z-[1]">
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[1] transition-all duration-[1400ms] ease-out"
        style={{
          background: `radial-gradient(65% 55% at ${mouse.x}% ${mouse.y}%, rgb(var(--accent) / 0.12) 0%, transparent 100%)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Availability badge */}
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 mb-10 rounded-full border border-border/70 bg-card-bg/50 backdrop-blur-sm opacity-0 hero-reveal"
            style={{ animationDelay: '0.05s' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-text-tertiary text-xs tracking-wide">Available for new opportunities</span>
          </div>

          {/* Label */}
          <p
            className="text-[11px] font-bold tracking-[0.22em] text-text-quaternary uppercase mb-6 opacity-0 hero-reveal"
            style={{ animationDelay: '0.15s' }}
          >
            Hi, I'm
          </p>

          {/* Name */}
          <div className="mb-8 opacity-0 hero-reveal" style={{ animationDelay: '0.25s' }}>
            <h1
              className="font-black text-text-primary leading-[0.86] tracking-tight select-none"
              style={{ fontSize: 'clamp(3.8rem, 9.5vw, 9rem)' }}
            >
              {firstName}
            </h1>
            <h1
              className="text-outline font-black leading-[0.86] tracking-tight select-none"
              style={{ fontSize: 'clamp(3.8rem, 9.5vw, 9rem)' }}
            >
              {lastName}
              <span className="gradient-text" style={{ WebkitTextStroke: 0 }}>.</span>
            </h1>
          </div>

          {/* Typing tagline */}
          <h2
            className="text-lg md:text-xl font-semibold text-text-secondary mb-3 max-w-xl leading-snug opacity-0 hero-reveal"
            style={{ animationDelay: '0.35s', minHeight: '1.75rem' }}
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',            1800,
                'Healthcare Systems Engineer',     1800,
                'React & Node.js Specialist',      1800,
                'Quantitative Finance Enthusiast', 1800,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              cursor
              style={{ display: 'inline-block' }}
            />
          </h2>

          {/* Short bio — one tight paragraph, no walls of text */}
          <p
            className="text-sm text-text-tertiary mb-10 max-w-md leading-relaxed opacity-0 hero-reveal"
            style={{ animationDelay: '0.44s' }}
          >
            {personal.heroBio}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3 mb-14 opacity-0 hero-reveal"
            style={{ animationDelay: '0.54s' }}
          >
            <MagneticButton strength={0.35}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToElement('contact')}
                icon={ArrowRight}
              >
                Get In Touch
              </Button>
            </MagneticButton>

            <Button variant="secondary" size="lg" href={personal.github} icon={Github} iconPosition="left">
              View GitHub
            </Button>

            <Button variant="secondary" size="lg" href={personal.resume} icon={Download} iconPosition="left">
              Download Resume
            </Button>
          </div>

          {/* Stats */}
          <div
            className="flex items-center gap-8 opacity-0 hero-reveal"
            style={{ animationDelay: '0.64s' }}
          >
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
                {i < stats.length - 1 && <div className="h-8 w-px bg-border/60" />}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                   flex flex-col items-center gap-1.5 opacity-0 hero-reveal"
        style={{ animationDelay: '0.9s' }}
      >
        <span className="text-[10px] font-bold tracking-[0.22em] text-text-quaternary uppercase">
          Scroll
        </span>
        <ChevronDown
          className="w-4 h-4 text-accent/60"
          style={{ animation: 'heroScrollBounce 1.6s ease-in-out infinite' }}
        />
      </div>

      <style>{`
        @keyframes heroScrollBounce {
          0%, 100% { transform: translateY(0);   opacity: 0.6; }
          50%       { transform: translateY(5px); opacity: 1;   }
        }
      `}</style>
    </section>
  );
};

export default Hero;