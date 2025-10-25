import React, { useState } from 'react';
import { Code2, Layout, Server, Database, Cloud, Wrench } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Skills = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, isVisible] = useIntersectionObserver();

  const categories = [
    { id: 'all', label: 'All Skills', icon: Code2 },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'cloud', label: 'Cloud', icon: Cloud },
    { id: 'tools', label: 'Tools', icon: Wrench },
  ];

  const getSkillsByCategory = () => {
    if (activeCategory === 'all') {
      return [
        { title: 'Languages', items: skills.languages, icon: Code2 },
        { title: 'Frontend', items: skills.frontend, icon: Layout },
        { title: 'Backend', items: skills.backend, icon: Server },
        { title: 'Databases', items: skills.databases, icon: Database },
        { title: 'Cloud', items: skills.cloud, icon: Cloud },
        { title: 'Tools', items: skills.tools, icon: Wrench },
      ];
    }
    
    const categoryData = categories.find(cat => cat.id === activeCategory);
    return [{
      title: categoryData.label,
      items: skills[activeCategory],
      icon: categoryData.icon
    }];
  };

  const skillCategories = getSkillsByCategory();

  return (
    <section id="skills" className="section py-20 bg-bg-primary">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Technologies and tools I work with">
          Skills & Technologies
        </SectionTitle>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-bg-secondary text-text-secondary hover:bg-bg-tertiary hover:text-text-primary'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span className="text-sm">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          ref={ref}
          className={`max-w-5xl mx-auto space-y-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold text-text-primary">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.items.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="bg-card-bg border border-border rounded-lg px-4 py-3 text-center hover:border-accent hover:shadow-lg transition-all hover:-translate-y-1 cursor-default"
                  >
                    <span className="text-text-primary font-medium text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-8 text-center">
            <p className="text-text-secondary text-lg leading-relaxed">
              With expertise across the full stack, I combine modern frontend frameworks,
              robust backend technologies, and cloud infrastructure to build scalable,
              secure, and performant applications. Always learning and adapting to new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;