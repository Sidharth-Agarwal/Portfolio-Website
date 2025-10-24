const Projects = () => {
    const projects = window.portfolioContent.projects;

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                {project.github && (
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="project-link"
                                    >
                                        <i data-lucide="github" style={{ width: '18px', height: '18px' }}></i>
                                        Code
                                    </a>
                                )}
                                {project.live && (
                                    <a 
                                        href={project.live} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="project-link"
                                    >
                                        <i data-lucide="external-link" style={{ width: '18px', height: '18px' }}></i>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

window.Projects = Projects;