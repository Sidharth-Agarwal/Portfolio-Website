import React, { useState } from 'react';
import { Mail, Github, Linkedin, Code2, Copy, Check, Send } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { copyToClipboard } from '../../utils/helpers';

const Contact = () => {
  const { personal } = portfolioData;
  const [emailCopied, setEmailCopied] = useState(false);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: personal.github,
      color: 'hover:text-gray-900 dark:hover:text-gray-100',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: personal.linkedin,
      color: 'hover:text-blue-600',
    },
    {
      name: 'LeetCode',
      icon: Code2,
      href: personal.leetcode,
      color: 'hover:text-orange-500',
    },
  ];

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(personal.email);
    if (success) {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="section py-20 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Let's build something amazing together">
          Get In Touch
        </SectionTitle>

        <div className="max-w-3xl mx-auto">
          {/* Description */}
          <div className="text-center mb-12">
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              I'm always open to new opportunities, collaborations, and interesting projects. 
              Whether you have a question, want to discuss a project, or just want to say hi, 
              feel free to reach out!
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-card-bg border border-border rounded-xl p-8 mb-8 text-center">
            <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Email Me
            </h3>
            <a
              href={`mailto:${personal.email}`}
              className="text-accent hover:text-accent-hover text-xl font-semibold transition-colors inline-block mb-4"
            >
              {personal.email}
            </a>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button
                variant="primary"
                size="md"
                href={`mailto:${personal.email}`}
                icon={Send}
              >
                Send Email
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={handleCopyEmail}
                icon={emailCopied ? Check : Copy}
              >
                {emailCopied ? 'Copied!' : 'Copy Email'}
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <p className="text-text-secondary mb-6">
              Or connect with me on social media
            </p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full bg-bg-tertiary border border-border transition-all hover:border-accent hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                  aria-label={social.name}
                  title={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-text-tertiary text-sm">
              Based in {personal.location} • Available for remote opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;