export const portfolioData = {
  personal: {
    name: "Sidharth Agarwal",
    title: "Software Engineer",
    location: "Bengaluru, India",
    email: "sidharthagarwal.2003@gmail.com",
    phone: "9927279831",
    linkedin: "https://linkedin.com/in/sidharthagarwal03",
    github: "https://github.com/sidharth-agarwal",
    leetcode: "https://leetcode.com/sidharth_2003",
    resume: "/Sidharth_Agarwal_Resume.pdf",
    tagline: "Full-Stack Engineer building scalable healthcare systems and enterprise React applications",

    // One-liner used in the Hero section only — keep it tight
    heroBio: "Software Engineer at ADA Digital Analytics, building HIPAA-compliant healthcare systems on Azure. I also consult on enterprise React applications — from government budget portals to manufacturing ERPs.",

    // Two focused paragraphs used in the About section
    bio: [
      "I'm a Software Engineer at ADA Digital Analytics in Bengaluru, building HIPAA-compliant healthcare data systems on Azure — architecting RBAC layers, securing API endpoints, and cutting production bugs by 60% through rigorous test coverage. On the side I consult on enterprise React projects: a state budget portal handling multi-billion rupee allocations for Nagaland, a print manufacturing ERP, and an LMS serving 500+ users.",
      "I'm currently building AthMech, a React Native cricket analytics app that processes match footage shot-by-shot — the kind of granular performance data that usually only exists at the professional level. I previously mentored 700+ students in C++ and DSA at Coding Ninjas, and that experience of explaining complex systems clearly still shapes how I write documentation and design APIs today.",
    ],
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

  // ── Merged work array: consulting first, then projects ──────────
  work: [
    // ── CONSULTING (7 items) ─────────────────────────────────────
    {
      id: "c1",
      type: "consulting",
      slug: "flextiles-erp-system",
      title: "Flextiles Print Manufacturing ERP System",
      description: "Comprehensive ERP system for a premium print manufacturing company specializing in wedding invitations and luxury print products. Features complete order management, client relationship management, production tracking, and automated cost calculations.",
      tech: ["React", "Firebase", "Firestore", "Tailwind CSS", "JavaScript", "Context API", "PDF Generation"],
      client: "Flextiles Print Manufacturing",
      year: "2024-2025",
      featured: false,
      hasImage: false,
      image: "/consulting/flextiles-erp.jpg",
      fullDescription: "Built a full-featured Enterprise Resource Planning (ERP) system from scratch for Flextiles, a premium print manufacturing company. The system manages the entire business workflow from lead generation to order completion, including complex cost calculations, production scheduling, and multi-role user management.",
      highlights: [
        "Advanced billing system with dynamic cost calculations for 15+ production processes (letterpress, foil stamping, embossing, die-cutting)",
        "Real-time order tracking with production stage management and staff assignment capabilities",
        "Comprehensive CRM with lead qualification pipeline, discussion history, and automated follow-ups",
        "Role-based access control supporting 4 user types (Admin, Staff, Production, Accountant) with granular permissions",
        "B2B client portal with escrow system for order approvals and loyalty tier management",
        "Intelligent estimate versioning system allowing multiple iterations per client project",
        "Automated serial number generation for orders with format FL-YYYY-NNNNN",
        "Client and vendor management with important dates tracking and GST/HSN code integration",
        "PDF generation for customer estimates with pagination support",
        "Real-time Firebase synchronization ensuring data consistency across all modules"
      ],
      impact: [
        "Digitized complete manual workflow, eliminating paper-based processes",
        "Reduced estimate creation time from 2+ hours to under 15 minutes",
        "Automated complex pricing calculations with 80%+ accuracy improvement",
        "Enabled real-time production tracking improving delivery time accuracy by 40%",
        "Provided comprehensive business analytics and reporting capabilities"
      ],
      keyFeatures: [
        "Multi-stage Billing System: Dynamic form with 15+ production service configurations supporting various job types (Cards, Envelopes, Notebooks, Packaging)",
        "Order Serial System: Automated order numbering with year-based sequences for tracking",
        "Production Management: Staff assignment, deadline tracking, and stage-based workflow progression",
        "Version Control: Multiple estimate versions per client with comparison and approval workflows",
        "CRM Pipeline: Lead management with qualification badges, discussion tracking, and conversion workflows",
        "Material Database: Comprehensive inventory system for papers, materials, and dies with cost calculations",
        "Client Portal: Dedicated B2B interface for order viewing, approval, and estimate tracking",
        "Advanced Calculations: Automatic cost computation for paper, production processes, overheads, markup, and GST"
      ]
    },
    {
      id: "c2",
      type: "consulting",
      slug: "planning-budget-system",
      title: "Budget Management System",
      description: "Enterprise-grade budget management system for Planning Department handling state-level budget planning, project proposals, fund allocations, and expenditure tracking across multiple departments and funding sources including state plans, DoNER/NEC schemes, and negotiated loans.",
      tech: ["React", "Firebase", "Firestore", "Tailwind CSS", "Context API", "Firebase Storage", "Firebase Authentication"],
      client: "Planning Department",
      year: "2024-2025",
      featured: false,
      hasImage: false,
      image: "/consulting/sikkim-budget-system.jpg",
      fullDescription: "Developed a comprehensive enterprise budget management system for the Sikkim Planning Department that digitized the entire state budget workflow. The system manages multi-billion rupee allocations across 15+ departments, handling everything from project proposals and approvals to fund distribution, installment tracking, and utilization certificate management.",
      highlights: [
        "Complete digitization of state budget planning and allocation processes eliminating paper-based workflows",
        "Multi-level budget management: State Share (50% allocation + common pool), Department-wise, and Project-wise allocations",
        "Central Schemes Integration: Complete DoNER and NEC project tracking with installment and UC management",
        "Real-time auto-save with debounced updates ensuring data safety without manual saves",
        "Advanced project approval workflow with status tracking (Pending → Approved → Rejected) and amount adjustment capability",
        "Ongoing project tracking with estimated costs, expenditures, and balance calculations",
        "Session budget clearance system with UO number and date tracking",
        "Comprehensive notification system with meeting invites, committee management, and response tracking (Accept/Reject/Tentative)",
        "Role-based access control supporting Admin, Department Users, and View-only roles with granular permissions",
        "Dynamic funding pattern validation supporting complex ratios (e.g., 60:40, 10:20:70 for multi-party funding)"
      ],
      impact: [
        "100% digital transformation eliminating all paper-based budget processes for the state government",
        "Reduced budget preparation time from several weeks to just a few days",
        "Manages multi-billion rupee allocations across 15+ government departments with zero errors",
        "Real-time budget status visibility enabling better financial planning and decision-making",
        "Complete audit trail of all transactions, approvals, and changes for transparency and accountability",
        "Automated calculations eliminated manual computation errors, improving data accuracy by 95%+",
        "Enhanced cross-department collaboration through integrated notification and committee management system",
        "Streamlined central schemes management reducing administrative overhead by 60%"
      ],
      keyFeatures: [
        "Budgetry Initiative Module: State share allocation with automatic common pool calculation and consistency validation",
        "Project Lifecycle Management: Complete workflow from proposal submission to approval with amount modification",
        "Department-wise Allocation: Track approved amounts, cleared amounts, and balance calculations per department",
        "Project-wise Allocation: Granular fund distribution with support for cleared against allocation, common pool, and additional state share",
        "Ongoing Projects Module: Monitor total estimated costs, expenditures (including current year), and balance remaining",
        "Central Schemes Management: Separate workflows for DoNER and NEC projects with complete lifecycle tracking",
        "Installment Management: Track multiple installments per project with release dates, amounts, and physical progress percentage",
        "UC Management System: Handle utilization certificates with furnished and due amounts, auto-populating central/state share",
        "Session Budget Module: Integrate with annual budget sessions for clearance tracking and allocation monitoring",
        "Overall Status View: Consolidated dashboard showing all projects with installments, UCs, balances, and remarks"
      ]
    },
    {
      id: "c3",
      type: "consulting",
      slug: "lms",
      title: "Learning Management System",
      description: "Comprehensive full-stack Learning Management System (LMS) with advanced features including timetable management, attendance tracking, result management, and multi-role access control supporting 500+ users across admin, faculty, and student roles.",
      tech: ["React", "Firebase", "Firestore", "Context API", "Tailwind CSS", "Firebase Authentication", "Firebase Storage", "JavaScript"],
      client: "Private College",
      year: "2024-2025",
      featured: false,
      hasImage: false,
      image: "/consulting/neissr-lms.jpg",
      fullDescription: "Developed a complete Learning Management System from scratch for NEISSR, an educational institution managing multiple courses and hundreds of students. The system digitalizes the entire academic workflow including student enrollment, course management, faculty assignments, timetable creation, attendance tracking, and result management.",
      highlights: [
        "Multi-role authentication system with granular permissions for Admin, Teacher, and Student roles with Firebase Authentication",
        "Comprehensive student management with 30+ data fields including personal details, academic records, family information, and document uploads",
        "Advanced course and subject management with semester-wise curriculum mapping and credit system integration",
        "Sophisticated timetable generator supporting multiple courses, semesters, and sections with conflict detection and teacher workload analysis",
        "Real-time attendance tracking with status options (Present, Absent, Late, Excused) and monthly calendar view for students",
        "Result management system with exam-wise mark entry, grade calculation, and performance analytics",
        "Faculty management with teaching assignments, schedule view, and workload tracking across academic years",
        "User profile mapping system linking authentication accounts to institutional records (student/faculty)"
      ],
      keyFeatures: [
        "Role-Based Access Control: Three-tier permission system (Admin, Teacher, Student) with contextual UI rendering",
        "Student Registration & Management: Complete student lifecycle management from registration to academic records",
        "Course & Subject Administration: Hierarchical course structure with semester-wise subject mapping and credit tracking",
        "Timetable System: Visual grid-based timetable editor with drag-drop functionality, teacher allocation, and conflict detection",
        "Attendance Management: Daily attendance marking with bulk operations, history tracking, and monthly calendar view",
        "Result Processing: Comprehensive exam result entry with automatic grade calculation and performance analytics",
        "Faculty Portal: Dedicated teacher interface for viewing schedule, marking attendance, and managing activities",
        "Student Portal: Student dashboard with timetable view, attendance records, and activity notifications"
      ],
      impact: [
        "Successfully digitized complete manual academic workflow eliminating paper-based processes",
        "Reduced administrative workload by 60% through automation of routine tasks",
        "Improved data accuracy and consistency with centralized database and validation",
        "Streamlined timetable creation reducing scheduling conflicts by 80%",
        "Scaled to support 500+ concurrent users across admin, faculty, and student roles"
      ]
    },
    {
      id: "c4",
      type: "consulting",
      slug: "nagaland-tourism-website",
      title: "Nagaland Tourism Official Portal",
      description: "Comprehensive tourism website for the Government of Nagaland showcasing 18+ tribes, festivals, destinations, and complete travel information. Features interactive UI, detailed tribal profiles, festival calendars, and essential tourist resources with responsive design.",
      tech: ["React", "JavaScript", "CSS3", "React Router", "AOS Library", "JSON Data Management", "Responsive Design"],
      client: "Department of Tourism, Government of Nagaland",
      year: "2024",
      featured: false,
      hasImage: false,
      image: "/consulting/nagaland-tourism.jpg",
      fullDescription: "Developed the official tourism portal for the Government of Nagaland's Department of Tourism, serving as the digital gateway for domestic and international tourists. The platform provides comprehensive information about Nagaland's rich cultural heritage.",
      highlights: [
        "Comprehensive tribal showcase with 18+ detailed tribe profiles featuring cultural information, traditional attire, and festival details",
        "Advanced festival calendar system displaying tribal festivals with timing, duration, significance, and district-wise categorization",
        "Tourist destinations explorer with rich media content, categorized listings, and detailed destination information",
        "Integrated digital platform section with QR codes and download links for official tourism mobile apps",
        "Complete travel resources including ILP/PAP permit information, accommodation listings, registered guides, and tour operators",
        "Interactive image galleries with 100+ optimized assets using efficient URL mapping system for fast loading",
        "Multi-page architecture with 25+ routes covering all aspects of Nagaland tourism"
      ],
      impact: [
        "Official digital presence for Nagaland Tourism Department serving as primary information source for tourists",
        "Digital preservation of cultural heritage with detailed documentation of 18+ tribes and their traditions",
        "Streamlined access to tourism services reducing time for permit information and service provider discovery"
      ]
    },
    {
      id: "c5",
      type: "consulting",
      slug: "ada-premiere-league-auction",
      title: "Cricket Auction Management System",
      description: "Comprehensive real-time auction platform for office cricket tournament featuring live bidding, team wallet management, player statistics tracking, and automated result generation.",
      tech: ["React", "Firebase", "Firestore", "Firebase Storage", "Tailwind CSS", "Context API", "Papaparse", "React Router"],
      client: "Internal Office Event",
      year: "2024",
      featured: false,
      hasImage: false,
      image: "/consulting/ada-cricket-auction.jpg",
      fullDescription: "Built a complete auction management system from scratch for ADA Digital Analytics' office cricket tournament. The application digitized the entire cricket auction workflow, enabling seamless player registration with detailed statistics, team creation with wallet management, real-time live auction interface, and comprehensive result tracking.",
      highlights: [
        "Real-time auction interface with live bidding controls and player queue visualization",
        "Atomic transaction system using Firebase transactions preventing race conditions during concurrent bids",
        "Comprehensive player management with 15+ statistical fields including batting/bowling averages and strike rates",
        "CSV bulk import with intelligent column mapping supporting flexible headers",
        "Team wallet management with Indian Rupee formatting (Lakh/Crore system) and real-time balance updates",
        "Advanced bidding controls with quick increment buttons (₹5L, ₹10L, ₹20L, ₹50L)",
        "Player categorization system supporting gender diversity tracking and capped/uncapped status"
      ],
      impact: [
        "Successfully facilitated smooth auction with zero transaction errors",
        "Reduced auction time by 60% compared to manual paper-based processes",
        "Managed 50+ players and 6 teams with real-time wallet tracking",
        "Eliminated manual calculation errors through automated bid validation"
      ]
    },
    {
      id: "c6",
      type: "consulting",
      slug: "dynamic-form-builder-system",
      title: "Form Builder & Submission Management",
      description: "Production-ready React form builder with drag-and-drop interface, real-time Firebase integration, advanced submission management, and comprehensive export capabilities.",
      tech: ["React", "Firebase", "Firestore", "Context API", "DnD Kit", "Tailwind CSS", "Lucide Icons", "JavaScript"],
      client: "Enterprise Client",
      year: "2024-2025",
      featured: false,
      hasImage: false,
      image: "/consulting/form-builder-system.jpg",
      fullDescription: "Developed a comprehensive enterprise-grade form builder application enabling users to create, manage, and analyze dynamic forms without any coding knowledge. Features drag-and-drop interface, real-time Firebase synchronization, and a powerful analytics dashboard.",
      highlights: [
        "Drag-and-drop form builder with 10+ field types (text, email, number, date, file upload, rating, checkboxes, radio buttons, dropdowns, textarea)",
        "Real-time Firebase Firestore integration with optimistic UI updates and offline support",
        "Enhanced submission storage architecture preserving complete field definitions with each submission",
        "Google Forms-style submission dashboard with tabular view, advanced filtering, and real-time statistics",
        "Comprehensive export system supporting CSV, Excel, and JSON formats",
        "Advanced validation engine with 10+ validation types",
        "Role-based access control supporting Admin, Editor, and Viewer roles"
      ],
      impact: [
        "Eliminated need for expensive third-party form builder subscriptions",
        "Enabled non-technical users to create complex forms in minutes",
        "Processed 1000+ form submissions with zero data loss and 99.9% uptime",
        "Reduced form creation time from hours to minutes"
      ]
    },
    {
      id: "c7",
      type: "consulting",
      slug: "portfolio-website-react",
      title: "Modern Portfolio Website",
      description: "Built a fully responsive, modern portfolio website with dynamic theme switching, smooth animations, and optimized performance. Features include project showcases, experience timeline, and contact integration.",
      tech: ["React", "React Router", "Tailwind CSS", "Vite", "Lucide Icons", "CSS Animations"],
      client: "Personal/Professional Portfolio",
      year: "2024",
      featured: false,
      hasImage: false,
      image: "/consulting/portfolio-website-react.jpg",
      fullDescription: "Developed a professional portfolio website from scratch using React and modern web technologies. The site features a fully responsive design, dynamic dark/light theme switching, smooth scroll animations, and an intuitive navigation system.",
      highlights: [
        "Implemented custom React hooks for scroll spy navigation and intersection observer animations",
        "Built responsive navigation with smooth scrolling and active section highlighting",
        "Created reusable component library with Card, Button, and SectionTitle components",
        "Integrated dynamic routing for project and consulting detail pages",
        "Designed custom CSS theme system with dark/light mode support using CSS variables",
        "Optimized performance with lazy loading and efficient state management"
      ],
      impact: [
        "Achieved 95+ Lighthouse performance score",
        "100% responsive across all device sizes and browsers",
        "Reduced initial load time with code splitting and lazy loading"
      ]
    },

    // ── PROJECTS (5 items) ───────────────────────────────────────
    {
      id: "p1",
      type: "project",
      slug: "athmech",
      title: "AthMech — Cricket Analytics App",
      description: "React Native mobile application for cricket performance analytics featuring video processing, shot classification, and player performance tracking. Built for coaches and players to analyse batting and bowling technique through AI-assisted video breakdown.",
      tech: ["React Native", "Firebase", "Firestore", "Firebase Storage", "Video Processing", "JavaScript"],
      client: "Personal Project",
      year: "2024",
      featured: true,
      hasImage: false,
      image: "/projects/athmech.jpg",
      github: null,
      live: null,
      fullDescription: "AthMech is a cricket analytics mobile application built with React Native, designed to bridge the gap between professional performance analysis and grassroots cricket. The app allows coaches to record, upload, and annotate match footage, while players can track their performance metrics over time. Video processing pipelines break down innings shot-by-shot, providing granular batting and bowling statistics not available in standard scorecards.",
      highlights: [
        "Video upload and processing pipeline with Firebase Storage for match footage management",
        "Shot-by-shot batting analysis with classification (drives, pulls, cuts, sweeps) and outcome tagging",
        "Player performance dashboard with session-wise and career aggregate statistics",
        "Coach portal for annotating video clips and sharing feedback directly with players",
        "Real-time Firestore sync enabling live session tracking during matches",
        "Cross-platform React Native build targeting both iOS and Android",
        "Offline-first architecture with background sync for poor connectivity environments"
      ]
    },
    {
      id: "p2",
      type: "project",
      slug: "mbs-portal",
      title: "MBS Portal — Automotive Supply Chain",
      description: "Material Balance System portal for automotive clients Toyota Malaysia and Perodua, built with React 18, Vite, and Azure integration. Features Excel file parsing with merged cell support, Power Automate workflows, and real-time supply chain tracking.",
      tech: ["React 18", "Vite", "Azure", "Power Automate", "TypeScript", "REST APIs", "SheetJS"],
      client: "ADA Digital Analytics",
      year: "2024-2025",
      featured: true,
      hasImage: false,
      image: "/projects/mbs-portal.jpg",
      github: null,
      live: null,
      fullDescription: "The Material Balance System (MBS) Portal is an enterprise-grade supply chain management platform serving Toyota Malaysia and Perodua. The system digitises the material planning workflow, enabling procurement teams to upload complex Excel manifests (with merged cells and multi-level headers), reconcile supplier deliveries against purchase orders, and trigger automated approval workflows via Power Automate. Built on React 18 with Azure backend services for RBAC, blob storage, and API management.",
      highlights: [
        "Advanced Excel parsing engine using SheetJS handling merged cells, multi-row headers, and variable column layouts",
        "Azure Active Directory integration for role-based access across supplier, procurement, and management tiers",
        "Power Automate workflow triggers for purchase order approvals, discrepancy alerts, and delivery confirmations",
        "Real-time material balance dashboard tracking inbound, allocated, and available stock per SKU",
        "File upload system with validation, error reporting, and re-upload workflows for rejected manifests",
        "Comprehensive audit trail logging all inventory movements, approvals, and system events",
        "Responsive UI optimised for warehouse floor tablets as well as desktop procurement workstations"
      ]
    },
    {
      id: "p3",
      type: "project",
      slug: "statesync",
      title: "StateSync — Government Budget Platform",
      description: "Enterprise state budget management system for Nagaland government handling multi-departmental fund allocations, project proposals, expenditure tracking, and utilisation certificate management across multiple financial years.",
      tech: ["React", "Firebase", "Firestore", "Tailwind CSS", "Context API", "Firebase Auth", "Firebase Storage"],
      client: "Personal Project",
      year: "2024",
      featured: false,
      hasImage: false,
      image: "/projects/statesync.jpg",
      github: null,
      live: null,
      fullDescription: "StateSync is a full-scale government budget management platform built for Nagaland's Planning Department, managing multi-billion rupee allocations across 15+ departments. The system handles the complete budget lifecycle — from annual planning and project proposals through to fund distribution, installment tracking, and utilisation certificate management. Features multi-level approval workflows, real-time auto-save, role-based access for government officials, and comprehensive audit trails for accountability.",
      highlights: [
        "Multi-level budget architecture: State Share, Department-wise, and Project-wise allocation tracking",
        "Central Schemes integration for DoNER and NEC project management with installment lifecycle",
        "Real-time auto-save with 1-second debounce preventing data loss without manual saves",
        "Role-based access for Admin, Department Users, and View-only roles with granular permissions",
        "Advanced notification system with meeting invites, committee management, and response tracking",
        "Dynamic funding pattern validation supporting complex ratios (60:40, 10:20:70 multi-party)",
        "30+ Firestore collections with optimised query patterns managing 15+ functional modules",
        "CSV export for all reports with hierarchical department/sector subtotals and grand totals"
      ]
    },
    {
      id: "p4",
      type: "project",
      slug: "react-projects",
      title: "React Based Projects",
      description: "Engineered high-performance React applications including Food App, YouTube Clone, and Netflix Clone with real-time data fetching using Custom Hooks and Redux. Integrated Firebase for authentication and real-time data synchronization with 99.9% uptime.",
      tech: ["React", "Redux", "Firebase", "Tailwind CSS", "JavaScript", "REST APIs"],
      client: "Personal Project",
      year: "2023",
      featured: false,
      hasImage: false,
      image: "/projects/react-projects.jpg",
      github: "https://github.com/sidharthagarwal",
      live: null,
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
      id: "p5",
      type: "project",
      slug: "paytm-clone",
      title: "Paytm Clone",
      description: "Full-stack payment application with secure payment gateway integration, real-time transaction tracking, and wallet management. Designed microservices architecture for payment processing with load balancing and error handling.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Microservices"],
      client: "Personal Project",
      year: "2023",
      featured: false,
      hasImage: false,
      image: "/projects/paytm-clone.jpg",
      github: "https://github.com/sidharthagarwal",
      live: null,
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

  skills: {
    languages: ["C++", "Java", "Python", "JavaScript"],
    frontend: ["HTML", "CSS", "Tailwind CSS", "ShadCN", "React", "Redux", "Webpack"],
    backend: ["Node.js", "Express", "Flask", "REST APIs", "JWT", "Spring Boot"],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    cloud: ["AWS", "Azure", "Firebase"],
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