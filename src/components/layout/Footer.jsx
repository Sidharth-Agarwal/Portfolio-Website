import React from 'react';
import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  const socials = [
    { icon: Github,   href: personal.github,            label: 'GitHub'   },
    { icon: Linkedin, href: personal.linkedin,          label: 'LinkedIn' },
    { icon: Code2,    href: personal.leetcode,          label: 'LeetCode' },
    { icon: Mail,     href: `mailto:${personal.email}`, label: 'Email'    },
  ];

  return (
    <footer className="relative bg-bg-secondary border-t border-border/40 pt-14 pb-8 overflow-hidden">
      {/* Subtle pattern */}
      <div aria-hidden="true" className="absolute inset-0 pattern-dots opacity-[0.012]" />

      {/* Bottom centre glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2
                   w-[500px] h-40 bg-accent/[0.05] rounded-full blur-[80px] pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* ── Top row: name + socials ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">

          {/* Large editorial name */}
          <div>
            <div
              className="font-black gradient-text leading-none select-none"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}
            >
              {personal.name}
            </div>
            <p className="text-text-tertiary text-sm mt-2">{personal.title}</p>
          </div>

          {/* Social icon buttons */}
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="group p-2.5 rounded-xl border border-border/60 bg-card-bg/40
                           backdrop-blur-sm hover:border-accent/40 hover:bg-accent/10
                           hover:-translate-y-1 transition-all duration-300"
              >
                <Icon
                  className="w-4 h-4 text-text-tertiary group-hover:text-accent
                             transition-colors duration-300"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent mb-8" />

        {/* ── Bottom row ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-quaternary">
          <span>© {year} {personal.name}. All rights reserved.</span>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Availability indicator */}
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span>Available for work</span>
            </div>

            <span className="text-border/60">·</span>

            {/* Location */}
            <span>{personal.location}</span>

            <span className="text-border/60">·</span>

            {/* Built with */}
            <div className="flex items-center gap-1">
              <span>Built with</span>
              <Heart className="w-2.5 h-2.5 text-red-400 fill-current mx-0.5 animate-pulse" />
              <span>React &amp; Tailwind</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;