import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight, Star } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import Button from '../common/Button';

const Projects = () => {
  const { projects } = portfolioData;
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    navigate(`/project/${project.slug}`);
  };

  return (
    <section id="projects" className="section py-24 bg-bg-secondary relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-light/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle subtitle="Some of my recent work and side projects">
          Projects
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              hover={false}
              animate={true}
              className="group cursor-pointer overflow-hidden"
              onClick={() => handleProjectClick(project)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1 px-3 py-1 bg-accent/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Featured</span>
                  </div>
                </div>
              )}

              {/* Project Image - Only show if hasImage is true */}
              {project.hasImage && project.image && (
                <div className="relative -mx-8 -mt-8 h-48 bg-gradient-to-br from-accent/20 to-accent-light/20 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card-bg/90 to-transparent"></div>
                </div>
              )}

              {/* Content */}
              <div className={`space-y-4 ${project.hasImage && project.image ? 'mt-6' : ''}`}>
                {/* Project Number */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-text-secondary leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-bg-tertiary border border-border text-accent text-xs font-medium rounded-lg hover:border-accent transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 bg-bg-tertiary border border-border text-text-tertiary text-xs font-medium rounded-lg">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

                {/* Links */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors group/link"
                      >
                        <Github className="w-5 h-5" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors group/link"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => handleProjectClick(project)}
                    className="flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium"
                  >
                    <span className="text-sm">Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        {projects.length > 2 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              href={portfolioData.personal.github}
              icon={Github}
              iconPosition="left"
              className="btn-hover"
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