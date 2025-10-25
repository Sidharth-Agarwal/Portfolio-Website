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
      hasImage: false, // Set to true when you have an image
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
      hasImage: false, // Set to true when you have an image
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
      slug: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "Built a complete e-commerce solution with shopping cart, payment integration, and admin dashboard for inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API", "Express", "Redux"],
      client: "Local Business",
      year: "2024",
      hasImage: false, // Set to true when you have an image
      image: "/freelance/ecommerce-platform.jpg",
      fullDescription: "Developed a full-featured e-commerce platform from scratch for a local retail business looking to expand their online presence. The platform includes a customer-facing storefront, admin dashboard for inventory management, and integrated payment processing.",
      highlights: [
        "Integrated Stripe payment gateway for secure transactions",
        "Built responsive admin dashboard with real-time inventory tracking",
        "Implemented shopping cart with persistent state management",
        "Created product search and filtering system",
        "Deployed with CI/CD pipeline for continuous updates"
      ],
      impact: [
        "Increased online sales by 150% in first quarter",
        "Reduced inventory management time by 60%",
        "Processed over 500 transactions in first month"
      ]
    },
    {
      id: 2,
      slug: "portfolio-website",
      title: "Portfolio Website",
      description: "Designed and developed a responsive portfolio website for a creative professional with custom animations and CMS integration.",
      tech: ["React", "Tailwind CSS", "Firebase", "Framer Motion"],
      client: "Freelance Designer",
      year: "2024",
      hasImage: false, // Set to true when you have an image
      image: "/freelance/portfolio-website.jpg",
      fullDescription: "Created a stunning portfolio website for a freelance designer to showcase their creative work. The site features smooth animations, a content management system for easy updates, and a contact form with email notifications.",
      highlights: [
        "Custom animations using Framer Motion for engaging user experience",
        "Firebase integration for dynamic content management",
        "Responsive design optimized for all devices",
        "SEO optimization for better search visibility",
        "Contact form with automated email notifications"
      ],
      impact: [
        "Client reported 200% increase in project inquiries",
        "Achieved 95+ PageSpeed score",
        "Featured in design community showcases"
      ]
    },
    {
      id: 3,
      slug: "booking-system",
      title: "Appointment Booking System",
      description: "Developed a comprehensive booking system for a healthcare clinic with calendar integration, SMS reminders, and patient management.",
      tech: ["React", "Node.js", "PostgreSQL", "Twilio", "Material-UI"],
      client: "Healthcare Clinic",
      year: "2023",
      hasImage: false, // Set to true when you have an image
      image: "/freelance/booking-system.jpg",
      fullDescription: "Built an appointment booking system that streamlines patient scheduling for a busy healthcare clinic. The system includes calendar management, automated SMS reminders, patient records, and reporting features.",
      highlights: [
        "Real-time calendar with conflict detection",
        "Automated SMS reminders via Twilio integration",
        "Patient management with secure data storage",
        "Reporting dashboard for clinic analytics",
        "Mobile-responsive interface for on-the-go access"
      ],
      impact: [
        "Reduced no-show rates by 40%",
        "Saved 10+ hours per week in administrative work",
        "Improved patient satisfaction scores by 35%"
      ]
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