import React from 'react';
import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: personal.github, label: 'GitHub' },
    { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
    { icon: Code2, href: personal.leetcode, label: 'LeetCode' },
    { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
  ];

  return (
    <footer className="bg-bg-secondary border-t border-border py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent mb-2">
              {personal.name}
            </div>
            <p className="text-text-tertiary text-sm">
              {personal.title}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-bg-tertiary border border-border hover:border-accent hover:bg-accent/10 transition-all hover:-translate-y-1 hover:shadow-lg"
                aria-label={social.label}
                title={social.label}
              >
                <social.icon className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

          {/* Copyright & Info */}
          <div className="text-center space-y-3">
            <p className="text-text-tertiary text-sm">
              © {currentYear} {personal.name}. All rights reserved.
            </p>
            <p className="flex items-center justify-center gap-2 text-text-quaternary text-xs">
              <span>Built with</span>
              <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </p>
            <p className="text-text-quaternary text-xs">
              Designed & Developed by {personal.name}
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center gap-6 text-xs text-text-quaternary">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for work</span>
            </div>
            <span>•</span>
            <span>{personal.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;