import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, ArrowRight, Calendar, Users } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { scrollToElement } from '../../utils/helpers';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const ConsultingCard = ({ project, index }) => {
  const navigate = useNavigate();
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      onClick={() => navigate(`/consulting/${project.slug}`)}
      className={`
        group relative rounded-2xl glass-card cursor-pointer overflow-hidden
        transition-all duration-500
        hover:border-accent/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/12
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      {/* Hover inner glow */}
      <div aria-hidden="true" className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 group-hover:from-accent/[0.05] to-transparent transition-all duration-500 pointer-events-none" />

      {/* Watermark index */}
      <div aria-hidden="true" className="absolute -right-2 -top-3 font-black text-text-primary/[0.03] select-none pointer-events-none leading-none group-hover:text-accent/[0.06] transition-all duration-500" style={{ fontSize: 'clamp(5rem, 10vw, 8rem)' }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative z-10 p-6 flex flex-col gap-4 h-full">

        {/* Client badge + title */}
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-2.5 rounded-full border border-accent/25 bg-accent/10">
            <Users className="w-2.5 h-2.5 text-accent flex-shrink-0" />
            <span className="text-accent text-[11px] font-bold truncate">{project.client}</span>
          </div>
          {/* Title — primary focal point */}
          <h3 className="text-lg font-bold text-text-primary leading-snug group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        {/* Description — clearly secondary */}
        <p className="text-text-tertiary text-xs leading-relaxed line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Tech tags — dimmest element */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((tech, i) => (
            <span key={i} className="px-2 py-0.5 rounded-md text-[11px] font-medium border border-border/60 bg-bg-tertiary/50 text-text-quaternary group-hover:border-accent/25 group-hover:text-accent/70 transition-all duration-300">
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

        {/* Footer — date left, CTA right (only accent element) */}
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
  );
};

const Consulting = () => {
  const { consulting } = portfolioData;

  return (
    <section id="consulting" className="section py-24 bg-bg-secondary relative">
      <div aria-hidden="true" className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[130px] pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-accent-light/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle number="03" subtitle="Client projects and consulting engagements">
          Consulting Work
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {consulting.map((project, i) => (
            <ConsultingCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
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
              <Button variant="primary" size="md" onClick={() => scrollToElement('contact')} icon={ArrowRight}>
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