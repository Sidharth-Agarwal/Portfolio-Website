const Hero = () => {
    const content = window.portfolioContent.personal;

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content fade-in-up">
                    <p className="hero-greeting">Hi, my name is</p>
                    <h1 className="hero-title">{content.name}</h1>
                    <h2 className="hero-subtitle">{content.tagline}</h2>
                    <p className="hero-description">{content.bio}</p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={scrollToContact}>
                            Get In Touch
                            <i data-lucide="arrow-right" style={{ width: '18px', height: '18px' }}></i>
                        </button>
                        <a 
                            href={content.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-secondary"
                        >
                            <i data-lucide="github" style={{ width: '18px', height: '18px' }}></i>
                            View GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

window.Hero = Hero;