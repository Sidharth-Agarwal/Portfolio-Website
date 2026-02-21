import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Button from '../components/common/Button';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const DetailSection = ({ icon: Icon, title, children, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 bg-accent/10 border border-accent/20 rounded-xl">
          <Icon className="w-4 h-4 text-accent" />
        </div>
        <h2 className="text-xl font-bold text-text-primary">{title}</h2>
      </div>
      {children}
    </div>
  );
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Look up from the merged work array, filtered to projects only
  const project = portfolioData.work.find(
    p => p.slug === projectId && p.type === 'project'
  );

  useEffect(() => {
    if (!project) setTimeout(() => navigate('/'), 2000);
  }, [project, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center pt-16">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="text-text-tertiary text-sm mt-4">Project not found. Redirecting…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary pt-28 pb-24 relative overflow-hidden">
      <div aria-hidden="true" className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.05] rounded-full blur-[130px] pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-accent-light/[0.05] rounded-full blur-[110px] pointer-events-none" />
      <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.02]">
        <filter id="proj-grain"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
        <rect width="100%" height="100%" filter="url(#proj-grain)" />
      </svg>

      <div className="container mx-auto px-4 relative z-10">

        {/* Back */}
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-text-quaternary hover:text-accent transition-colors duration-200 mb-10 text-sm group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Back to Work</span>
        </Link>

        <div className="max-w-5xl mx-auto">

          {/* ── Header ── */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2.5 mb-5">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent/50" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-text-quaternary uppercase">Project</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent/50" />
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-text-primary leading-tight mb-5">
              {project.title}
            </h1>

            {/* Meta + action buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {project.year && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card text-xs">
                  <Calendar className="w-3 h-3 text-accent" />
                  <span className="text-text-secondary font-medium">{project.year}</span>
                </div>
              )}
              {project.client && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card text-xs">
                  <Users className="w-3 h-3 text-accent" />
                  <span className="text-text-secondary font-medium">{project.client}</span>
                </div>
              )}
              <div className="flex gap-2.5 ml-auto">
                {project.github && (
                  <Button variant="primary" size="sm" href={project.github} icon={Github} iconPosition="left">
                    View Code
                  </Button>
                )}
                {project.live && (
                  <Button variant="secondary" size="sm" href={project.live} icon={ExternalLink} iconPosition="left">
                    Live Demo
                  </Button>
                )}
              </div>
            </div>

            <p className="text-text-secondary leading-relaxed max-w-3xl">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* ── Two-column grid ── */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">

            <div className="md:col-span-2 space-y-8">
              {project.highlights && (
                <DetailSection icon={CheckCircle2} title="Key Highlights" delay={0}>
                  <div className="rounded-2xl glass-card p-6">
                    <ul className="space-y-3">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-text-tertiary text-sm leading-relaxed">
                          <span className="text-accent font-bold mt-0.5 flex-shrink-0 text-xs">✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </DetailSection>
              )}
            </div>

            {/* Sticky sidebar */}
            <div>
              <div className="rounded-2xl glass-card p-5 sticky top-28">
                <p className="text-[11px] font-bold text-text-quaternary tracking-[0.2em] uppercase mb-4">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium
                                 border border-border/70 bg-bg-tertiary/50
                                 text-text-secondary hover:border-accent/40 hover:text-accent
                                 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-border/40 space-y-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text-tertiary text-xs hover:text-accent transition-colors">
                      <Github className="w-3.5 h-3.5" />
                      <span>View on GitHub</span>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text-tertiary text-xs hover:text-accent transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden rounded-3xl glass-card p-9 text-center">
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-accent/[0.07] to-accent-light/[0.04] pointer-events-none" />
            <div aria-hidden="true" className="absolute -top-12 -right-12 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Interested in similar projects?
              </h3>
              <p className="text-text-tertiary text-sm mb-6 max-w-sm mx-auto">
                Let's discuss how I can help bring your ideas to life.
              </p>
              <Link to="/#contact">
                <Button variant="primary" size="md">Get In Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;