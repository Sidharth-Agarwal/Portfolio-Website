import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Button from '../components/common/Button';
import LoadingSpinner from '../components/common/LoadingSpinner';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = portfolioData.projects.find(p => p.slug === projectId);

  useEffect(() => {
    if (!project) {
      // Redirect to home if project not found
      setTimeout(() => navigate('/'), 2000);
    }
  }, [project, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center pt-16">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="text-text-secondary mt-4">Project not found. Redirecting...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              {project.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-text-tertiary mb-6">
              {project.year && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
              )}
              {project.client && (
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{project.client}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <Button
                  variant="primary"
                  href={project.github}
                  icon={Github}
                  iconPosition="left"
                >
                  View Code
                </Button>
              )}
              {project.live && (
                <Button
                  variant="secondary"
                  href={project.live}
                  icon={ExternalLink}
                  iconPosition="left"
                >
                  Live Demo
                </Button>
              )}
            </div>
          </div>

          {/* Project Image */}
          {project.image && (
            <div className="mb-12 rounded-xl overflow-hidden border border-border">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}

          {/* Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Overview
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Key Highlights */}
          {project.highlights && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Key Highlights
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-text-secondary leading-relaxed pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-bg-secondary border border-border rounded-lg text-accent font-medium hover:border-accent transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Interested in similar projects?
            </h3>
            <p className="text-text-secondary mb-6">
              Let's discuss how I can help bring your ideas to life.
            </p>
            <Link to="/#contact">
              <Button variant="primary" size="lg">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;