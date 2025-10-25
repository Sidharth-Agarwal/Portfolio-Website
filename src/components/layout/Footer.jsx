import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
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
    <footer className="bg-bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-bg-tertiary border border-border hover:border-accent hover:bg-bg-primary transition-all hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-text-secondary hover:text-accent" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-text-tertiary text-sm">
              © {currentYear} {personal.name}. All rights reserved.
            </p>
            <p className="text-text-quaternary text-xs mt-2">
              Built with React & ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;