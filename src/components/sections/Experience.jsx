import React from 'react';
import { Briefcase, MapPin, Calendar, TrendingUp } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section py-24 bg-bg-primary relative">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="My professional journey and career highlights">
          Experience
        </SectionTitle>

        <div className="max-w-5xl mx-auto space-y-6">
          {experience.map((exp, index) => (
            <Card key={exp.id} animate={true} hover={false} className="group">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    {/* Company Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full mb-4">
                      <Briefcase className="w-4 h-4 text-accent" />
                      <span className="text-accent font-semibold text-sm">{exp.company}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
                      {exp.title}
                    </h3>
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-text-tertiary">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-text-tertiary">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Index Badge */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/10 to-accent-light/10 border border-accent/20 rounded-2xl">
                    <span className="text-2xl font-bold text-accent">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

                {/* Description */}
                <ul className="space-y-4">
                  {exp.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4 text-text-secondary leading-relaxed group/item"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="p-1 bg-accent/10 rounded">
                          <TrendingUp className="w-4 h-4 text-accent" />
                        </div>
                      </div>
                      <span className="group-hover/item:text-text-primary transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-accent/5 to-accent-light/5 border border-accent/20 rounded-2xl px-8 py-6">
            <p className="text-text-secondary text-lg mb-2">
              Want to know more about my work experience?
            </p>
            <p className="text-text-tertiary text-sm">
              Feel free to reach out for my detailed resume
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;