import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, TrendingUp, CheckCircle2, FolderKanban } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Button from '../components/common/Button';
import LoadingSpinner from '../components/common/LoadingSpinner';

const FreelanceDetail = () => {
  const { freelanceId } = useParams();
  const navigate = useNavigate();

  const project = portfolioData.freelance.find(p => p.slug === freelanceId);

  useEffect(() => {
    if (!project) {
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
          to="/#freelance"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Freelance Work</span>
        </Link>

        {/* Project Header */}
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="mb-12">
            {/* Client Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-semibold">{project.client}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              {project.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-text-tertiary mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-medium">{project.client}</span>
              </div>
            </div>
          </div>

          {/* Project Image or Placeholder */}
          {project.hasImage ? (
            project.image && (
              <div className="mb-12 rounded-2xl overflow-hidden border border-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )
          ) : (
            <div className="mb-12 rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-accent/10 to-accent-light/10 h-80 flex items-center justify-center">
              <FolderKanban className="w-32 h-32 text-accent/30" />
            </div>
          )}

          {/* Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent-light rounded-full"></div>
              Overview
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Key Highlights */}
          {project.highlights && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent-light rounded-full"></div>
                Key Features
              </h2>
              <div className="grid gap-4">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-card-bg border border-border rounded-xl hover:border-accent transition-all duration-300"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed flex-1">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Impact Section */}
          {project.impact && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent-light rounded-full"></div>
                Project Impact
              </h2>
              <div className="grid gap-4">
                {project.impact.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-gradient-to-br from-accent/5 to-accent-light/5 border border-accent/20 rounded-xl"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed flex-1 font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent-light rounded-full"></div>
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-card-bg border border-border rounded-xl text-accent font-medium hover:border-accent hover:bg-accent/5 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-accent/10 to-accent-light/5 border border-accent/20 rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Need similar work done?
            </h3>
            <p className="text-text-secondary mb-6 max-w-xl mx-auto">
              I'm available for freelance projects. Let's discuss how I can help you achieve your goals.
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

export default FreelanceDetail;