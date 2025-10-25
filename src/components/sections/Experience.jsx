import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section py-20 bg-bg-primary">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="My professional journey and career highlights">
          Experience
        </SectionTitle>

        <div className="max-w-5xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <Card key={exp.id} animate={true}>
              <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-accent font-semibold mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-text-tertiary">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3 mt-4">
                  {exp.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-text-secondary leading-relaxed pl-6 relative before:content-['▹'] before:absolute before:left-0 before:text-accent before:font-bold"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;