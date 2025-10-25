import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import Button from '../common/Button';
import { scrollToElement } from '../../utils/helpers';

const Freelance = () => {
  const { freelance } = portfolioData;

  const handleContactClick = () => {
    scrollToElement('contact');
  };

  return (
    <section id="freelance" className="section py-20 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Client projects and freelance work">
          Freelance Work
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {freelance.map((project) => (
            <Card key={project.id} hover={true} animate={true}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-text-primary">
                  {project.title}
                </h3>

                <p className="text-text-secondary leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-bg-tertiary text-accent text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-text-tertiary pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-text-secondary text-lg mb-6">
            Interested in working together?
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={handleContactClick}
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Freelance;