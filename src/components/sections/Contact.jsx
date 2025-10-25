import React, { useState } from 'react';
import { Mail, Github, Linkedin, Code2, Copy, Check, Send, MapPin, Clock } from 'lucide-react';
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
      color: 'hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900',
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: personal.linkedin,
      color: 'hover:bg-blue-600 hover:text-white',
      description: 'Connect professionally'
    },
    {
      name: 'LeetCode',
      icon: Code2,
      href: personal.leetcode,
      color: 'hover:bg-orange-500 hover:text-white',
      description: 'See my solutions'
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
    <section id="contact" className="section py-24 bg-bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-light/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle subtitle="Let's build something amazing together">
          Get In Touch
        </SectionTitle>

        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <div className="text-center mb-12">
            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              I'm always open to new opportunities, collaborations, and interesting projects.
            </p>
            <p className="text-text-tertiary">
              Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out!
            </p>
          </div>

          {/* Main Contact Card */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Email Card */}
            <div className="bg-card-bg border border-border rounded-2xl p-8 hover:border-accent transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-accent/10 rounded-2xl">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">
                    Email Me
                  </h3>
                  <p className="text-text-tertiary text-sm">Preferred method</p>
                </div>
              </div>
              
              <a
                href={`mailto:${personal.email}`}
                className="text-accent hover:text-accent-hover text-lg font-semibold transition-colors block mb-6 break-all"
              >
                {personal.email}
              </a>
              
              <div className="flex flex-col gap-3">
                <Button
                  variant="primary"
                  size="md"
                  href={`mailto:${personal.email}`}
                  icon={Send}
                  className="w-full btn-hover"
                >
                  Send Email
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={handleCopyEmail}
                  icon={emailCopied ? Check : Copy}
                  className="w-full"
                >
                  {emailCopied ? 'Copied!' : 'Copy Email'}
                </Button>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              {/* Location Card */}
              <div className="bg-card-bg border border-border rounded-2xl p-6 hover:border-accent transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Location</h4>
                    <p className="text-text-secondary text-sm">{personal.location}</p>
                  </div>
                </div>
                <p className="text-text-tertiary text-sm ml-14">
                  Available for remote opportunities worldwide
                </p>
              </div>

              {/* Availability Card */}
              <div className="bg-card-bg border border-border rounded-2xl p-6 hover:border-accent transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-green-500/10 rounded-xl">
                    <Clock className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Availability</h4>
                    <p className="text-green-500 text-sm font-medium">Open to opportunities</p>
                  </div>
                </div>
                <p className="text-text-tertiary text-sm ml-14">
                  Typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gradient-to-br from-accent/5 to-accent-light/5 border border-accent/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-text-primary mb-6 text-center">
              Connect on Social Media
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center justify-center p-6 bg-card-bg border border-border rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${social.color}`}
                  >
                    <Icon className="w-8 h-8 mb-3 transition-transform group-hover:scale-110" />
                    <span className="font-semibold text-text-primary mb-1">{social.name}</span>
                    <span className="text-text-tertiary text-sm text-center">{social.description}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-card-bg border border-border rounded-full px-6 py-3">
              <p className="text-text-tertiary text-sm">
                📍 Based in {personal.location} • 💼 Available for remote work • ⚡ Quick responder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;