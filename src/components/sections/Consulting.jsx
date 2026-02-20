import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, ArrowRight, Calendar, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { useSpotlightCard } from '../../hooks/useSpotlightCard';
import { useTilt } from '../../hooks/useTilt';
import { scrollToElement } from '../../utils/helpers';

/* ── Motion variants ────────────────────────────────────────────── */
const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.10 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

/* ── Single consulting card ─────────────────────────────────────── */
const ConsultingCard = ({ project, index }) => {
  const navigate = useNavigate();
  const tiltRef  = useTilt({ max: 5, 'max-glare': 0.07 });
  const { cardRef: spotRef, glowStyle, onMouseMove, onMouseLeave } = useSpotlightCard('rgba(13,148,136,0.13)', 300);

  // Merge tilt + spotlight refs onto the same node
  const setRef = (node) => {
    tiltRef.current  = node;
    spotRef.current  = node;
  };

  return (
    <motion.div variants={item} className="h-full">
      <div
        ref={setRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={() => navigate(`/consulting/${project.slug}`)}
        className="group relative rounded-2xl glass-card overflow-hidden cursor-pointer h-full
                   transition-all duration-300 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/12"
      >
        {/* ── Layer 0: spotlight glow ── */}
        <div style={glowStyle} aria-hidden="true" />

        {/* ── Layer 1: hover inner tint ── */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 group-hover:from-accent/[0.05] to-transparent transition-all duration-500 pointer-events-none"
        />

        {/* ── Layer 2: watermark number (sits below content) ── */}
        <div
          aria-hidden="true"
          className="absolute -right-2 -top-3 font-black select-none pointer-events-none leading-none
                     text-text-primary/[0.035] group-hover:text-accent/[0.07] transition-all duration-500"
          style={{ fontSize: 'clamp(5rem, 10vw, 8rem)', zIndex: 1 }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* ── Layer 3: real content (always on top) ── */}
        <div className="relative flex flex-col gap-4 h-full p-6" style={{ zIndex: 2 }}>
          {/* Client + title */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-2.5 rounded-full border border-accent/25 bg-accent/10">
              <Users className="w-2.5 h-2.5 text-accent flex-shrink-0" />
              <span className="text-accent text-[11px] font-bold truncate">{project.client}</span>
            </div>
            <h3 className="text-lg font-bold text-text-primary leading-snug group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-text-tertiary text-xs leading-relaxed line-clamp-2 flex-1">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md text-[11px] font-medium border border-border/60 bg-bg-tertiary/50 text-text-quaternary group-hover:border-accent/25 group-hover:text-accent/70 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] border border-border/60 bg-bg-tertiary/50 text-text-quaternary">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-text-quaternary text-[11px]">
              <Calendar className="w-3 h-3 flex-shrink-0" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-1.5 text-accent text-xs font-semibold group-hover:gap-2.5 transition-all duration-300">
              <span>View Details</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Section ────────────────────────────────────────────────────── */
const Consulting = () => {
  const { consulting } = portfolioData;

  return (
    <section id="consulting" className="section py-24 bg-bg-secondary relative">
      <div aria-hidden="true" className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[130px] pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-accent-light/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle number="04" subtitle="Client projects and consulting engagements">
          Consulting Work
        </SectionTitle>

        {/* Stagger grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto"
        >
          {consulting.map((project, i) => (
            <ConsultingCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* CTA block */}
        <div className="mt-14 max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl glass-card p-9 text-center">
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-accent/[0.06] to-accent-light/[0.03] pointer-events-none" />
            <div aria-hidden="true" className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="w-10 h-10 bg-accent/10 border border-accent/25 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Interested in working together?
              </h3>
              <p className="text-text-tertiary text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                Available for consulting projects and professional engagements.
              </p>
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToElement('contact')}
                icon={ArrowRight}
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;