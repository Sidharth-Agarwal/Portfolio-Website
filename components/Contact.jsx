const Contact = () => {
    const content = window.portfolioContent.personal;

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <p className="contact-text">
                        I'm always open to new opportunities, collaborations, and interesting projects. 
                        Whether you have a question or just want to say hi, feel free to reach out!
                    </p>
                    <div className="contact-links">
                        <a 
                            href={content.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="contact-link"
                            aria-label="GitHub"
                        >
                            <i data-lucide="github"></i>
                        </a>
                        <a 
                            href={content.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="contact-link"
                            aria-label="LinkedIn"
                        >
                            <i data-lucide="linkedin"></i>
                        </a>
                        <a 
                            href={content.leetcode} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="contact-link"
                            aria-label="LeetCode"
                        >
                            <i data-lucide="code-2"></i>
                        </a>
                        <a 
                            href={`mailto:${content.email}`} 
                            className="contact-link"
                            aria-label="Email"
                        >
                            <i data-lucide="mail"></i>
                        </a>
                    </div>
                    <a href={`mailto:${content.email}`} className="contact-email">
                        {content.email}
                    </a>
                </div>
            </div>
        </section>
    );
};

window.Contact = Contact;