const Skills = () => {
    const skills = window.portfolioContent.skills;

    const skillCategories = [
        { title: "Languages", items: skills.languages },
        { title: "Frontend", items: skills.frontend },
        { title: "Backend", items: skills.backend },
        { title: "Databases", items: skills.databases },
        { title: "Cloud & Tools", items: [...skills.cloud, ...skills.tools] }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>
                <div className="skills-container">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="skill-category-title">{category.title}</h3>
                            <div className="skill-tags">
                                {category.items.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

window.Skills = Skills;