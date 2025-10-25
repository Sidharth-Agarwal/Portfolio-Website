export const portfolioData = {
  personal: {
    name: "Sidharth Agarwal",
    title: "Software Engineer",
    location: "Bengaluru, India",
    email: "sidharthagarwal.2003@gmail.com",
    phone: "9927279831",
    linkedin: "https://linkedin.com/in/sidharth-agarwal",
    github: "https://github.com/sidharthagarwal",
    leetcode: "https://leetcode.com/sidharthagarwal",
    tagline: "Full-Stack Developer specializing in scalable web applications",
    bio: "Passionate Software Engineer with expertise in building high-performance web applications. I specialize in backend development with Node.js and Python, and love creating elegant user experiences with React. Currently working on healthcare technology at ADA Digital Analytics, where I architect secure, scalable solutions that make a real impact."
  },

  experience: [
    {
      id: 1,
      title: "Software Engineer",
      company: "ADA Digital Analytics Private Limited",
      location: "Bengaluru, India",
      period: "July 2024 - Present",
      description: [
        "Spearheaded backend development for a healthcare data center project, implementing scalable RESTful APIs that improved system performance by 35%",
        "Architected an advanced role-based access control (RBAC) system transforming user permission management across healthcare facility hierarchies",
        "Engineered secure, HIPAA-compliant API endpoints for critical healthcare operations, reducing unauthorized access attempts by 70%",
        "Developed comprehensive unit test suites achieving over 80% code coverage, reducing production-level bugs by 60%"
      ]
    },
    {
      id: 2,
      title: "SDE Intern",
      company: "Decathlon",
      location: "Bengaluru, India",
      period: "August 2023 - October 2023",
      description: [
        "Led implementation of 10+ A/B tests using VWO, driving 25% increase in user engagement through data-driven UX improvements",
        "Developed comprehensive technical documentation covering system architecture, API integrations, and component library",
        "Collaborated with UX team to optimize website performance, reducing load time by 30%"
      ]
    },
    {
      id: 3,
      title: "Teaching Assistant",
      company: "Coding Ninjas",
      location: "Remote",
      period: "January 2022 - May 2022",
      description: [
        "Mentored 700+ students in C++ programming, focusing on DSA concepts with 95% positive student feedback",
        "Created supplementary learning materials and practice problems, improving student assessment scores by 30%",
        "Reviewed and graded coding assignments for data structures and algorithms courses"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      slug: "react-projects",
      title: "React Based Projects",
      description: "Engineered high-performance React applications including Food App, YouTube Clone, and Netflix Clone with real-time data fetching using Custom Hooks and Redux. Integrated Firebase for authentication and real-time data synchronization with 99.9% uptime.",
      tech: ["React", "Redux", "Firebase", "Tailwind CSS", "JavaScript", "REST APIs"],
      github: "https://github.com/sidharthagarwal",
      live: null,
      featured: true,
      image: "/projects/react-projects.jpg",
      fullDescription: "A collection of production-ready React applications demonstrating modern web development practices, state management, and real-time data handling.",
      highlights: [
        "Custom hooks for data fetching and state management",
        "Redux for global state management",
        "Firebase integration for authentication",
        "Responsive design with Tailwind CSS",
        "99.9% uptime with real-time synchronization"
      ]
    },
    {
      id: 2,
      slug: "paytm-clone",
      title: "Paytm Clone",
      description: "Full-stack payment application with secure payment gateway integration, real-time transaction tracking, and wallet management. Designed microservices architecture for payment processing with load balancing and error handling.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Microservices"],
      github: "https://github.com/sidharthagarwal",
      live: null,
      featured: true,
      image: "/projects/paytm-clone.jpg",
      fullDescription: "A comprehensive payment platform clone featuring secure transactions, wallet management, and microservices architecture for scalable payment processing.",
      highlights: [
        "Microservices architecture for scalability",
        "Secure JWT-based authentication",
        "Real-time transaction tracking",
        "Load balancing and error handling",
        "MongoDB for efficient data storage"
      ]
    }
  ],

  freelance: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Built a complete e-commerce solution with shopping cart, payment integration, and admin dashboard for inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      client: "Local Business",
      year: "2024"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Designed and developed a responsive portfolio website for a creative professional with custom animations and CMS integration.",
      tech: ["React", "Tailwind CSS", "Firebase"],
      client: "Freelance Designer",
      year: "2024"
    }
  ],

  skills: {
    languages: ["C++", "Java", "Python", "JavaScript"],
    frontend: ["HTML", "CSS", "Tailwind CSS", "ShadCN", "React", "Redux", "Webpack"],
    backend: ["Node.js", "Express", "Flask", "REST APIs", "JWT", "Spring Boot"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    cloud: ["AWS (Amazon Web Services)"],
    tools: ["Git", "Docker", "VWO", "Postman"]
  },

  education: {
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Artificial Intelligence and Machine Learning",
    institution: "Meerut Institute of Engineering and Technology",
    period: "September 2020 - June 2024",
    coursework: [
      "Database Management System",
      "Theory of Automata and Formal Language",
      "Operating System",
      "Computer Networks",
      "Design and Analysis of Algorithm",
      "Computer Architecture"
    ]
  }
};