import React, { useState } from 'react';
import { Code2, Layout, Server, Database, Cloud, Wrench, CheckCircle2 } from 'lucide-react';
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
        { title: 'Languages', items: skills.languages, icon: Code2, color: 'from-blue-500 to-cyan-500' },
        { title: 'Frontend', items: skills.frontend, icon: Layout, color: 'from-purple-500 to-pink-500' },
        { title: 'Backend', items: skills.backend, icon: Server, color: 'from-green-500 to-emerald-500' },
        { title: 'Databases', items: skills.databases, icon: Database, color: 'from-orange-500 to-red-500' },
        { title: 'Cloud', items: skills.cloud, icon: Cloud, color: 'from-indigo-500 to-blue-500' },
        { title: 'Tools', items: skills.tools, icon: Wrench, color: 'from-yellow-500 to-orange-500' },
      ];
    }
    
    const categoryData = categories.find(cat => cat.id === activeCategory);
    const colorMap = {
      languages: 'from-blue-500 to-cyan-500',
      frontend: 'from-purple-500 to-pink-500',
      backend: 'from-green-500 to-emerald-500',
      databases: 'from-orange-500 to-red-500',
      cloud: 'from-indigo-500 to-blue-500',
      tools: 'from-yellow-500 to-orange-500',
    };
    
    return [{
      title: categoryData.label,
      items: skills[activeCategory],
      icon: categoryData.icon,
      color: colorMap[activeCategory]
    }];
  };

  const skillCategories = getSkillsByCategory();

  return (
    <section id="skills" className="section py-24 bg-bg-primary relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle subtitle="Technologies and tools I work with">
          Skills & Technologies
        </SectionTitle>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-accent text-white shadow-lg shadow-accent/30 scale-105'
                    : 'bg-card-bg border border-border text-text-secondary hover:bg-bg-tertiary hover:text-text-primary hover:border-accent hover:-translate-y-1'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div
          ref={ref}
          className={`max-w-6xl mx-auto space-y-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-2xl shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">
                      {category.title}
                    </h3>
                    <p className="text-text-tertiary text-sm">{category.items.length} technologies</p>
                  </div>
                </div>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.items.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="group bg-card-bg border border-border rounded-xl px-4 py-4 text-center hover:border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-default"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-text-primary font-medium text-sm group-hover:text-accent transition-colors">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-accent/10 via-accent-light/10 to-accent/5 border border-accent/20 rounded-3xl p-10">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent-light/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Full-Stack Expertise
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
                With expertise across the full stack, I combine modern frontend frameworks,
                robust backend technologies, and cloud infrastructure to build scalable,
                secure, and performant applications. Always learning and adapting to new technologies.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-8 max-w-2xl mx-auto">
                <div>
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {skills.languages.length + skills.frontend.length}
                  </div>
                  <div className="text-text-tertiary text-sm">Frontend Skills</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {skills.backend.length + skills.databases.length}
                  </div>
                  <div className="text-text-tertiary text-sm">Backend Skills</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {skills.cloud.length + skills.tools.length}
                  </div>
                  <div className="text-text-tertiary text-sm">DevOps & Tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;