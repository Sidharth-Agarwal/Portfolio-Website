import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import Button from '../common/Button';

/* ── Shared project card ────────────────────────────────────────── */
const ProjectCard = ({ project, index, onClick }) => (
  <Card hover={false} animate={false} className="group cursor-pointer overflow-hidden h-full" onClick={onClick}>
    {project.featured && (
      <div className="absolute top-4 right-4 z-10">
        <div className="flex items-center gap-1 px-3 py-1 bg-accent/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
          <Star className="w-3 h-3 fill-current" />
          <span>Featured</span>
        </div>
      </div>
    )}

    {project.hasImage && project.image && (
      <div className="relative -mx-8 -mt-8 h-48 bg-gradient-to-br from-accent/20 to-accent-light/20 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
          onError={e => { e.target.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card-bg/90 to-transparent" />
      </div>
    )}

    <div className={`space-y-4 ${project.hasImage && project.image ? 'mt-6' : ''}`}>
      <span className="text-4xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
        {String(index + 1).padStart(2, '0')}
      </span>

      <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors line-clamp-2">
        {project.title}
      </h3>

      <p className="text-text-secondary leading-relaxed line-clamp-3">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((tech, i) => (
          <span key={i} className="px-3 py-1 bg-bg-tertiary border border-border text-accent text-xs font-medium rounded-lg hover:border-accent transition-colors">
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="px-3 py-1 bg-bg-tertiary border border-border text-text-tertiary text-xs font-medium rounded-lg">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors">
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">Code</span>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors">
              <ExternalLink className="w-5 h-5" />
              <span className="text-sm font-medium">Demo</span>
            </a>
          )}
        </div>
        <button
          onClick={onClick}
          className="flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium"
        >
          <span className="text-sm">Details</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </Card>
);

/* ── Mobile: Embla carousel ─────────────────────────────────────── */
const MobileCarousel = ({ projects, onProjectClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', dragFree: true });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project, i) => (
            <div key={project.id} className="embla__slide">
              <ProjectCard project={project} index={i} onClick={() => onProjectClick(project)} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-6">
        <button
          onClick={scrollPrev}
          aria-label="Previous project"
          className="p-2.5 rounded-xl glass-card hover:border-accent/40 hover:text-accent text-text-tertiary transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollNext}
          aria-label="Next project"
          className="p-2.5 rounded-xl glass-card hover:border-accent/40 hover:text-accent text-text-tertiary transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

/* ── Desktop: stagger grid via Motion ───────────────────────────── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const DesktopGrid = ({ projects, onProjectClick }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.12 }}
    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
  >
    {projects.map((p, i) => (
      <motion.div key={p.id} variants={cardVariants}>
        <ProjectCard project={p} index={i} onClick={() => onProjectClick(p)} />
      </motion.div>
    ))}
  </motion.div>
);

/* ── Section ────────────────────────────────────────────────────── */
const Projects = () => {
  const { projects } = portfolioData;
  const navigate     = useNavigate();
  const handleClick  = (p) => navigate(`/project/${p.slug}`);

  return (
    <section id="projects" className="section py-24 bg-bg-secondary relative">
      <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-96 h-96 bg-accent-light/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle subtitle="Some of my recent work and side projects">
          Projects
        </SectionTitle>

        {/* Mobile carousel — hidden on md+ */}
        <div className="block md:hidden">
          <MobileCarousel projects={projects} onProjectClick={handleClick} />
        </div>

        {/* Desktop stagger grid — hidden on mobile */}
        <div className="hidden md:block">
          <DesktopGrid projects={projects} onProjectClick={handleClick} />
        </div>

        {projects.length > 2 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              href={portfolioData.personal.github}
              icon={Github}
              iconPosition="left"
            >
              View All Projects on GitHub
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;