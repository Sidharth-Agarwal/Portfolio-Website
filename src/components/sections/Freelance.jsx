import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Calendar, Users, ArrowRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import Button from '../common/Button';
import { scrollToElement } from '../../utils/helpers';

const Freelance = () => {
  const { freelance } = portfolioData;
  const navigate = useNavigate();

  const handleContactClick = () => {
    scrollToElement('contact');
  };

  const handleFreelanceClick = (project) => {
    navigate(`/freelance/${project.slug}`);
  };

  return (
    <section id="freelance" className="section py-24 bg-bg-primary relative">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Client projects and freelance work">
          Freelance Work
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {freelance.map((project, index) => (
            <Card 
              key={project.id} 
              hover={false} 
              animate={true} 
              className="group cursor-pointer overflow-hidden"
              onClick={() => handleFreelanceClick(project)}
            >
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

              <div className={`space-y-5 ${project.hasImage && project.image ? 'mt-6' : ''}`}>
                {/* Header with Index */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors mb-2">
                      {project.title}
                    </h3>
                    
                    {/* Client Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
                      <Users className="w-3 h-3 text-accent" />
                      <span className="text-accent text-xs font-semibold">{project.client}</span>
                    </div>
                  </div>

                  {/* Index Number */}
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-accent/10 to-accent-light/10 border border-accent/20 rounded-xl">
                    <span className="text-xl font-bold text-accent">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed line-clamp-2">
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

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-text-tertiary">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                  <button
                    onClick={() => handleFreelanceClick(project)}
                    className="flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all"
                  >
                    <span className="text-xs">View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-accent/10 via-accent-light/10 to-accent/5 border border-accent/20 rounded-3xl p-10 text-center">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-light/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <Briefcase className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-text-primary mb-3">
                Interested in working together?
              </h3>
              <p className="text-text-secondary mb-6 max-w-xl mx-auto">
                I'm available for freelance projects and consulting work. Let's discuss how I can help bring your ideas to life.
              </p>
              <Button
                variant="primary"
                size="lg"
                onClick={handleContactClick}
                icon={ArrowRight}
                className="btn-hover"
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

export default Freelance;