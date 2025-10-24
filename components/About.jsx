const About = () => {
    const content = window.portfolioContent.personal;
    const education = window.portfolioContent.education;

    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <p className="about-text">
                        I'm a Software Engineer based in {content.location}, specializing in building 
                        exceptional digital experiences. With a strong foundation in both frontend and 
                        backend development, I create scalable and secure web applications that solve 
                        real-world problems.
                    </p>
                    <p className="about-text">
                        My journey in tech began with a passion for problem-solving through code. I hold a 
                        {education.degree} with a specialization in {education.specialization} from {education.institution}. 
                        Whether it's architecting complex backend systems or crafting intuitive user interfaces, 
                        I'm driven by the challenge of turning ideas into reality.
                    </p>
                    <p className="about-text">
                        When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                        projects, or mentoring aspiring developers. I'm always eager to collaborate on innovative 
                        projects that make a difference.
                    </p>
                </div>
            </div>
        </section>
    );
};

window.About = About;