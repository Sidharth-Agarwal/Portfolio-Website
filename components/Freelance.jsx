const Freelance = () => {
    const freelanceProjects = window.portfolioContent.freelance;

    return (
        <section id="freelance" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title">Freelance Work</h2>
                <div className="projects-grid">
                    {freelanceProjects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div style={{ 
                                marginTop: '1rem', 
                                display: 'flex', 
                                justifyContent: 'space-between',
                                color: 'var(--text-tertiary)',
                                fontSize: '0.9rem'
                            }}>
                                <span>
                                    <i data-lucide="briefcase" style={{ width: '16px', height: '16px', marginRight: '0.5rem' }}></i>
                                    {project.client}
                                </span>
                                <span>
                                    <i data-lucide="calendar" style={{ width: '16px', height: '16px', marginRight: '0.5rem' }}></i>
                                    {project.year}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <p style={{ 
                        color: 'var(--text-secondary)', 
                        fontSize: '1.125rem', 
                        marginBottom: '1.5rem' 
                    }}>
                        Interested in working together?
                    </p>
                    <a 
                        href="#contact" 
                        className="btn btn-primary"
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('contact');
                            if (element) {
                                const offset = 80;
                                const elementPosition = element.offsetTop - offset;
                                window.scrollTo({
                                    top: elementPosition,
                                    behavior: 'smooth'
                                });
                            }
                        }}
                    >
                        Let's Talk
                        <i data-lucide="message-circle" style={{ width: '18px', height: '18px' }}></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

window.Freelance = Freelance;