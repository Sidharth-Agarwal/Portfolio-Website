import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail, Github, Linkedin, Code2, Copy, Check,
  Send, MapPin, Clock, Terminal, CheckCircle, AlertCircle,
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { copyToClipboard } from '../../utils/helpers';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

/* ── Shared card wrapper ──────────────────────────────────────── */
const InfoCard = ({ children, className = '' }) => (
  <div className={`relative rounded-2xl glass-card hover:border-accent/40 transition-all duration-300 overflow-hidden ${className}`}>
    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-accent/0 hover:from-accent/[0.04] to-transparent pointer-events-none transition-all duration-500" />
    <div className="relative z-10">{children}</div>
  </div>
);

/* ── Social link card ─────────────────────────────────────────── */
const SocialLink = ({ href, icon: Icon, name, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center gap-1.5 p-4 rounded-2xl glass-card text-center hover:border-accent/45 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
  >
    <Icon className="w-4 h-4 text-text-tertiary group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
    <span className="text-text-primary text-xs font-bold">{name}</span>
    <span className="text-text-quaternary text-[11px]">{label}</span>
  </a>
);

/* ── Contact form ─────────────────────────────────────────────── */
const ContactForm = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [fields, setFields] = useState({ from_name: '', from_email: '', message: '' });

  const handleChange = (e) =>
    setFields(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      setFields({ from_name: '', from_email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputBase = `
    w-full px-4 py-2.5 rounded-xl text-sm
    bg-bg-tertiary/50 border border-border/70
    text-text-primary placeholder:text-text-quaternary
    focus:border-accent/60 focus:ring-1 focus:ring-accent/30 outline-none
    transition-all duration-200
  `;

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="rounded-2xl glass-card p-6 space-y-4">
      <p className="text-[11px] font-bold text-accent tracking-[0.22em] uppercase">
        Send a Message
      </p>

      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2 sm:col-span-1">
          <input
            name="from_name"
            value={fields.from_name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className={inputBase}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <input
            name="from_email"
            type="email"
            value={fields.from_email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className={inputBase}
          />
        </div>
        <div className="col-span-2">
          <textarea
            name="message"
            value={fields.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Tell me about your project…"
            className={`${inputBase} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                   bg-accent text-white text-sm font-semibold
                   hover:bg-accent-hover transition-all duration-300
                   disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' && (
          <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending…</>
        )}
        {status === 'success' && (
          <><CheckCircle className="w-4 h-4" />Message Sent!</>
        )}
        {status === 'error' && (
          <><AlertCircle className="w-4 h-4" />Failed — try email directly</>
        )}
        {status === 'idle' && (
          <><Send className="w-4 h-4" />Send Message</>
        )}
      </button>
    </form>
  );
};

/* ── Main section ─────────────────────────────────────────────── */
const Contact = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [ref, isVisible] = useIntersectionObserver();

  const handleCopy = async () => {
    if (await copyToClipboard(personal.email)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const socials = [
    { href: personal.github,   icon: Github,  name: 'GitHub',   label: 'My code'      },
    { href: personal.linkedin, icon: Linkedin, name: 'LinkedIn', label: 'Connect'      },
    { href: personal.leetcode, icon: Code2,    name: 'LeetCode', label: 'My solutions' },
  ];

  return (
    <section id="contact" className="section py-24 bg-bg-secondary relative overflow-hidden">
      <div aria-hidden="true" className="absolute top-0 left-1/4 w-[440px] h-[440px] bg-accent/[0.06] rounded-full blur-[110px] pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 right-1/4 w-[440px] h-[440px] bg-accent-light/[0.06] rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle number="06" subtitle="Let's build something amazing together">
          Get In Touch
        </SectionTitle>

        <div
          ref={ref}
          className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* ── Left column ── */}
          <div className="flex flex-col gap-4">

            {/* Email */}
            <InfoCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-accent/10 rounded-xl">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-text-primary font-bold text-sm">Email</p>
                  <p className="text-text-quaternary text-[11px]">Preferred method of contact</p>
                </div>
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="text-accent text-sm font-medium hover:text-accent-hover transition-colors break-all block mb-4"
              >
                {personal.email}
              </a>
              <div className="flex gap-2.5">
                <Button variant="primary" size="sm" href={`mailto:${personal.email}`} icon={Send} className="flex-1">
                  Send Email
                </Button>
                <Button variant="secondary" size="sm" onClick={handleCopy} icon={copied ? Check : Copy} className="flex-1">
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
              </div>
            </InfoCard>

            {/* Location */}
            <InfoCard className="p-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-accent/10 rounded-xl flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                </div>
                <div>
                  <p className="text-text-primary font-bold text-sm">{personal.location}</p>
                  <p className="text-text-quaternary text-[11px] mt-0.5">Remote opportunities worldwide</p>
                </div>
              </div>
            </InfoCard>

            {/* Availability */}
            <InfoCard className="p-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-green-500/10 rounded-xl flex-shrink-0">
                  <Clock className="w-3.5 h-3.5 text-green-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-text-primary font-bold text-sm">Open to opportunities</p>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <p className="text-text-quaternary text-[11px] mt-0.5">Responds within 24 hours</p>
                </div>
              </div>
            </InfoCard>

            {/* Social links */}
            <div className="grid grid-cols-3 gap-3">
              {socials.map(s => <SocialLink key={s.name} {...s} />)}
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="flex flex-col gap-4">

            {/* Terminal */}
            <div className="rounded-2xl glass-card overflow-hidden hover:border-accent/40 transition-all duration-300">
              {/* Chrome bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/40 bg-bg-tertiary/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                </div>
                <div className="flex items-center gap-1.5 ml-1.5">
                  <Terminal className="w-3 h-3 text-text-quaternary" />
                  <span className="text-text-quaternary text-[11px] font-mono">contact.sh</span>
                </div>
              </div>

              <div className="p-5 font-mono space-y-2">
                <div>
                  <span className="text-accent/60">~</span>
                  <span className="text-text-quaternary"> $ </span>
                  <span className="text-text-secondary text-xs">contact </span>
                  <span className="text-accent text-xs">"{personal.name}"</span>
                </div>
                <div className="pl-4 py-2 border-l-2 border-accent/20 space-y-1.5 text-[11px] leading-relaxed">
                  {[
                    ['name',     personal.name],
                    ['email',    personal.email],
                    ['location', personal.location],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <span className="text-text-quaternary">{k.padEnd(10)}</span>
                      <span className="text-text-secondary">→ {v}</span>
                    </div>
                  ))}
                  <div>
                    <span className="text-text-quaternary">{'status'.padEnd(10)}</span>
                    <span className="text-green-400 font-semibold">→ available</span>
                  </div>
                  <div>
                    <span className="text-text-quaternary">{'response'.padEnd(10)}</span>
                    <span className="text-text-secondary">→ &lt; 24 hours</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-accent/60">~</span>
                  <span className="text-text-quaternary text-xs"> $ </span>
                  <span className="terminal-blink text-accent/70 font-bold">▋</span>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <ContactForm />
          </div>
        </div>
      </div>

      <style>{`
        .terminal-blink { animation: termBlink 1.1s step-start infinite; }
        @keyframes termBlink { 50% { opacity: 0; } }
      `}</style>
    </section>
  );
};

export default Contact;