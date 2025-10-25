import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
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
    <section id="projects" className="section py-20 bg-bg-primary">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Some of my recent work and side projects">
          Projects
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.id}
              hover={true}
              animate={true}
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              {project.image && (
                <div className="mb-6 -mx-6 -mt-6 h-48 bg-bg-tertiary rounded-t-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-text-primary hover:text-accent transition-colors">
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
                      className="px-3 py-1 bg-bg-tertiary text-accent text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 bg-bg-tertiary text-text-tertiary text-sm font-medium rounded-full">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
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
                      className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                  <button
                    onClick={() => handleProjectClick(project)}
                    className="ml-auto flex items-center gap-2 text-accent hover:gap-3 transition-all"
                  >
                    <span className="text-sm font-medium">View Details</span>
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