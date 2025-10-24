const Experience = () => {
    const experiences = window.portfolioContent.experience;

    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-header">
                                <div>
                                    <h3 className="experience-title">{exp.title}</h3>
                                    <p className="experience-company">{exp.company}</p>
                                </div>
                                <div className="experience-date">{exp.period}</div>
                            </div>
                            <ul className="experience-description">
                                {exp.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

window.Experience = Experience;