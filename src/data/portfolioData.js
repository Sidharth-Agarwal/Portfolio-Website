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
    tagline: "Full-Stack Developer specializing in scalable web applications",
    bio: "Passionate Software Engineer with expertise in building high-performance web applications. I specialize in backend development with Node.js and Python, and love creating elegant user experiences with React. Currently working on multiple projects at ADA Digital Analytics, where I architect secure, scalable solutions that make a real impact. Additionally, I work on consulting projects to keep those mind muscles engaged on different set of technologies."
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
      hasImage: false,
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
      hasImage: false,
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

  consulting: [
    {
      "id": 1,
      "slug": "flextiles-erp-system",
      "title": "Flextiles Print Manufacturing ERP System",
      "description": "Comprehensive ERP system for a premium print manufacturing company specializing in wedding invitations and luxury print products. Features complete order management, client relationship management, production tracking, and automated cost calculations.",
      "tech": [
        "React",
        "Firebase",
        "Firestore",
        "Tailwind CSS",
        "JavaScript",
        "Context API",
        "PDF Generation"
      ],
      "client": "Flextiles Print Manufacturing",
      "year": "2024-2025",
      "hasImage": false,
      "image": "/consulting/flextiles-erp.jpg",
      "fullDescription": "Built a full-featured Enterprise Resource Planning (ERP) system from scratch for Flextiles, a premium print manufacturing company. The system manages the entire business workflow from lead generation to order completion, including complex cost calculations, production scheduling, and multi-role user management.",
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
      "id": 2,
      "slug": "planning-budget-system",
      "title": "Budget Management System",
      "description": "Enterprise-grade budget management system for Planning Department handling state-level budget planning, project proposals, fund allocations, and expenditure tracking across multiple departments and funding sources including state plans, DoNER/NEC schemes, and negotiated loans.",
      "tech": [
        "React",
        "Firebase",
        "Firestore",
        "Tailwind CSS",
        "Context API",
        "Firebase Storage",
        "Firebase Authentication"
      ],
      "client": "Planning Department",
      "year": "2024-2025",
      "hasImage": false,
      "image": "/consulting/sikkim-budget-system.jpg",
      "fullDescription": "Developed a comprehensive enterprise budget management system for the Sikkim Planning Department that digitized the entire state budget workflow. The system manages multi-billion rupee allocations across 15+ departments, handling everything from project proposals and approvals to fund distribution, installment tracking, and utilization certificate management. Built with advanced features like real-time auto-save, role-based access control, multi-level approval workflows, and complex financial calculations.",
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
        "Dynamic funding pattern validation supporting complex ratios (e.g., 60:40, 10:20:70 for multi-party funding)",
        "Multi-level filtering system: Financial year, department, sector, and search-based filtering across all modules",
        "User activity tracking showing who made changes and when for complete audit trails",
        "Hierarchical data aggregation with department and sector-wise subtotals and grand totals",
        "Responsive design fully functional across desktop, tablet, and mobile devices",
        "File attachment support for notifications with image, PDF, and Excel file handling"
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
        "Overall Status View: Consolidated dashboard showing all projects with installments, UCs, balances, and remarks",
        "Advanced Notification System: Multi-type notifications (General, Invitation, Meeting) with committee-based distribution",
        "Committee Management: Create and manage user groups for targeted communication and approvals",
        "Response Tracking: Monitor recipient responses (Accept/Reject/Tentative) with analytics and status views",
        "Work Order Integration: Track work order numbers, issue dates, and scheduled completion dates",
        "Real-time Collaboration: Auto-save mechanism with user attribution and timestamp tracking for all changes"
      ],
      technicalHighlights: [
        "15+ major functional modules with complex interdependencies and data flow",
        "30+ Firestore collections with optimized query patterns and indexing",
        "50+ reusable React components with consistent design patterns",
        "Custom debounced auto-save implementation preventing excessive writes (1-second delay)",
        "Optimistic UI updates with background synchronization for instant user feedback",
        "Dynamic calculation engine for totals, balances, and allocations with real-time updates",
        "Hierarchical data aggregation with department and sector-wise grouping",
        "Priority-based sorting system for departments based on administrative hierarchy",
        "Advanced validation system for funding patterns, amounts, dates, and UO numbers",
        "Custom filter hooks supporting multi-criteria filtering across all modules",
        "Firebase Storage integration for document and file attachment management",
        "Comprehensive error handling and validation with user-friendly error messages",
        "Export capabilities for reports and analytics (CSV generation)",
        "Multi-year financial data management with year-specific filtering and isolation"
      ]
    },
    {
      "id": 3,
      "slug": "lms",
      "title": "Learning Management System",
      "description": "Comprehensive full-stack Learning Management System (LMS) with advanced features including timetable management, attendance tracking, result management, and multi-role access control supporting 500+ users across admin, faculty, and student roles.",
      "tech": [
        "React",
        "Firebase",
        "Firestore",
        "Context API",
        "Tailwind CSS",
        "Firebase Authentication",
        "Firebase Storage",
        "JavaScript"
      ],
      "client": "Private College",
      "year": "2024-2025",
      "hasImage": false,
      "image": "/consulting/neissr-lms.jpg",
      "fullDescription": "Developed a complete Learning Management System from scratch for NEISSR, an educational institution managing multiple courses and hundreds of students. The system digitalizes the entire academic workflow including student enrollment, course management, faculty assignments, timetable creation, attendance tracking, and result management. Built with a sophisticated role-based access control system supporting administrators, teachers, and students with tailored interfaces and permissions for each role.",
      highlights: [
        "Multi-role authentication system with granular permissions for Admin, Teacher, and Student roles with Firebase Authentication",
        "Comprehensive student management with 30+ data fields including personal details, academic records, family information, and document uploads",
        "Advanced course and subject management with semester-wise curriculum mapping and credit system integration",
        "Sophisticated timetable generator supporting multiple courses, semesters, and sections with conflict detection and teacher workload analysis",
        "Real-time attendance tracking with status options (Present, Absent, Late, Excused) and monthly calendar view for students",
        "Result management system with exam-wise mark entry, grade calculation, and performance analytics",
        "Faculty management with teaching assignments, schedule view, and workload tracking across academic years",
        "User profile mapping system linking authentication accounts to institutional records (student/faculty)",
        "Responsive design supporting mobile, tablet, and desktop with theme-aware UI components",
        "Advanced filtering, searching, and sorting across all modules with CSV export functionality",
        "Real-time data synchronization with optimistic UI updates and background sync",
        "Activity management system for teachers to create and manage assignments, events, and announcements"
      ],
      keyFeatures: [
        "Role-Based Access Control: Three-tier permission system (Admin, Teacher, Student) with contextual UI rendering",
        "Student Registration & Management: Complete student lifecycle management from registration to academic records",
        "Course & Subject Administration: Hierarchical course structure with semester-wise subject mapping and credit tracking",
        "Timetable System: Visual grid-based timetable editor with drag-drop functionality, teacher allocation, and conflict detection",
        "Attendance Management: Daily attendance marking with bulk operations, history tracking, and monthly calendar view",
        "Result Processing: Comprehensive exam result entry with automatic grade calculation and performance analytics",
        "Faculty Portal: Dedicated teacher interface for viewing schedule, marking attendance, and managing activities",
        "Student Portal: Student dashboard with timetable view, attendance records, and activity notifications",
        "User Mapping System: Sophisticated system linking user accounts to institutional records with sync functionality",
        "Profile Management: Complete profile system with institutional data sync, profile pictures, and security settings",
        "Activity Center: Platform for teachers to create assignments, announcements, and track student engagement",
        "Analytics Dashboard: Real-time statistics and insights for administrators on enrollment, attendance, and performance"
      ],
      technicalHighlights: [
        "50+ React components with consistent design patterns and reusable UI elements",
        "Custom hooks for data management (useStudents, useFaculty, useTimetable, useAttendance, useResults)",
        "Context-based state management for authentication, theme, and global app state",
        "Firebase Firestore with optimized query patterns and real-time listeners",
        "Advanced filtering engine supporting multi-criteria search across all entities",
        "Responsive design system with mobile-first approach and adaptive layouts",
        "Theme system supporting light/dark modes with CSS custom properties",
        "Form validation with comprehensive error handling and user feedback",
        "CSV export functionality for all major data entities",
        "Optimistic UI updates with rollback mechanisms for better UX",
        "Navigation system with breadcrumb tracking and role-based menu rendering",
        "Modal-based workflows for complex data entry and editing operations",
        "Calendar integration for attendance and timetable visualization",
        "User activity tracking and audit trails for administrative actions"
      ],
      impact: [
        "Successfully digitized complete manual academic workflow eliminating paper-based processes",
        "Reduced administrative workload by 60% through automation of routine tasks",
        "Improved data accuracy and consistency with centralized database and validation",
        "Enhanced communication between faculty, students, and administration",
        "Enabled real-time attendance tracking improving accountability and monitoring",
        "Streamlined timetable creation reducing scheduling conflicts by 80%",
        "Provided instant access to academic records and performance data for all stakeholders",
        "Reduced time for result processing from days to hours with automated calculations",
        "Improved parent-teacher communication through accessible student progress tracking",
        "Scaled to support 500+ concurrent users across admin, faculty, and student roles"
      ]
    },
    {
      "id": 4,
      "slug": "ada-premiere-league-auction",
      "title": "Cricket Auction Management System",
      "description": "Comprehensive real-time auction platform for office cricket tournament featuring live bidding, team wallet management, player statistics tracking, and automated result generation. Streamlined the entire auction process from player registration to team allocation with transaction integrity and Indian Rupee formatting.",
      "tech": [
        "React",
        "Firebase",
        "Firestore",
        "Firebase Storage",
        "Tailwind CSS",
        "Context API",
        "Papaparse",
        "React Router"
      ],
      "client": "Internal Office Event",
      "year": "2024",
      "hasImage": false,
      "image": "/consulting/ada-cricket-auction.jpg",
      "fullDescription": "Built a complete auction management system from scratch for ADA Digital Analytics' office cricket tournament. The application digitized the entire cricket auction workflow, enabling seamless player registration with detailed statistics, team creation with wallet management, real-time live auction interface, and comprehensive result tracking with CSV export capabilities. The system ensured transaction integrity through Firebase transactions and provided an intuitive interface for non-technical users to conduct smooth auctions.",
      "highlights": [
        "Real-time auction interface with live bidding controls and player queue visualization for seamless auction flow",
        "Atomic transaction system using Firebase transactions preventing race conditions and ensuring data consistency during concurrent bids",
        "Comprehensive player management with 15+ statistical fields including batting/bowling averages, strike rates, economy rates, and player specializations",
        "CSV bulk import with intelligent column mapping supporting flexible headers and automatic gender/capped status detection",
        "Team wallet management with Indian Rupee formatting (Lakh/Crore system) and real-time balance updates across all teams",
        "Advanced bidding controls with quick increment buttons (₹5L, ₹10L, ₹20L, ₹50L) for efficient auction progression",
        "Player categorization system supporting gender diversity tracking (Male/Female) and capped/uncapped status for balanced team composition",
        "Team-wise result dashboard with comprehensive statistics, player allocation view, and CSV export for team rosters",
        "Firebase Storage integration for player and team logo uploads with image preview and error handling",
        "Responsive auction interface optimized for large screen displays during live events with sidebar team wallet status",
        "Automated sold amount calculation with instant wallet deduction ensuring budget compliance throughout auction",
        "Player status tracking system (Available → Sold/Unsold) with team assignment and price recording"
      ],
      keyFeatures: [
        "Live Auction Room: Real-time bidding interface with current player display, team selection, bid amount controls, and action buttons (Sold/Unsold/Skip)",
        "Player Management: Complete CRUD operations with detailed cricket statistics, image uploads, and CSV bulk import supporting 100+ players",
        "Team Management: Team creation with ownership details (3 owners), captain assignments (male/female), wallet initialization, and logo uploads",
        "Bidding System: Intelligent bidding with team wallet validation, increment buttons, real-time balance preview, and insufficient funds detection",
        "Player Queue: Visual representation of upcoming players in auction with thumbnail view and quick player switching",
        "Team Wallet Sidebar: Live wallet status for all teams showing available funds, post-bid balance, and player count with selection highlighting",
        "Results Dashboard: Comprehensive view with team-wise player allocation, spending summary, and individual/aggregate CSV export",
        "Statistics Tracking: Detailed batting stats (innings, runs, average, strike rate) and bowling stats (innings, wickets, average, economy)",
        "Player Profiles: Complete player cards with images, badges (capped/uncapped, gender), specialization, styles, and base price",
        "Transaction Integrity: Firebase transaction-based player sales ensuring atomic operations for player status updates and wallet deductions",
        "Indian Currency Formatting: Custom utility for Lakh/Crore display system with proper comma placement (1,00,000 format)",
        "Auction Summary: Real-time statistics showing total players, sold count, unsold count, and total amount spent across all teams"
      ],
      technicalHighlights: [
        "Firebase Firestore transactions for atomic bid operations preventing data corruption",
        "Custom React hooks for player and team data management with real-time synchronization",
        "Context API for global state management of notifications and app-wide settings",
        "Papaparse integration for robust CSV parsing with header transformation and error handling",
        "Firebase Storage for image uploads with automatic URL generation and storage organization",
        "Optimized Firestore queries with status-based filtering for available players",
        "Reusable component library with Card, Button, Modal, Loading, and ErrorMessage components",
        "Custom currency formatter utility for Indian numbering system (Lakh/Crore)",
        "Responsive grid layouts with Tailwind CSS for auction interface and team cards",
        "Form validation for player and team creation with comprehensive error handling",
        "Real-time data listeners for wallet updates and player status changes",
        "CSV export functionality with dynamic column generation and proper data formatting",
        "Image error handling with fallback placeholders for broken image URLs",
        "Debounced search and filtering across player and team lists"
      ],
      impact: [
        "Successfully facilitated smooth auction for office cricket event with zero transaction errors",
        "Reduced auction time by 60% compared to manual paper-based processes",
        "Managed 50+ players and 6 teams with real-time wallet tracking and instant result generation",
        "Eliminated manual calculation errors through automated bid validation and wallet management",
        "Provided instant visibility into team compositions, spending, and remaining budgets",
        "Enabled quick player registration through CSV import reducing data entry time by 80%",
        "Generated comprehensive team rosters with complete player details in exportable CSV format",
        "Improved auction transparency with live wallet status and team selection indicators",
        "Created audit trail of all transactions with player prices and team assignments",
        "Enhanced user experience with intuitive interface requiring minimal training for auctioneers"
      ]
    },
    {
      "id": 5,
      "slug": "dynamic-form-builder-system",
      "title": "Form Builder & Submission Management",
      "description": "Production-ready React form builder with drag-and-drop interface, real-time Firebase integration, advanced submission management, and comprehensive export capabilities. Features 10+ field types, real-time validation, role-based access control, and Google Forms-style analytics dashboard.",
      "tech": [
        "React",
        "Firebase",
        "Firestore",
        "Context API",
        "DnD Kit",
        "Tailwind CSS",
        "Lucide Icons",
        "JavaScript"
      ],
      "client": "Enterprise Client",
      "year": "2024-2025",
      "hasImage": false,
      "image": "/consulting/form-builder-system.jpg",
      "fullDescription": "Developed a comprehensive enterprise-grade form builder application from scratch that enables users to create, manage, and analyze dynamic forms without any coding knowledge. The system features an intuitive drag-and-drop interface for form creation, real-time Firebase synchronization for submissions, and a powerful analytics dashboard for data insights. Built with performance and scalability in mind, supporting thousands of submissions with advanced filtering, search, and export capabilities.",
      highlights: [
        "Drag-and-drop form builder with 10+ field types (text, email, number, date, file upload, rating, checkboxes, radio buttons, dropdowns, textarea)",
        "Real-time Firebase Firestore integration with optimistic UI updates and offline support",
        "Enhanced submission storage architecture preserving complete field definitions (labels, types, validation rules) with each submission",
        "Google Forms-style submission dashboard with tabular view, advanced filtering (date ranges, search), and real-time statistics",
        "Comprehensive export system supporting CSV, Excel, and JSON formats with field metadata preservation",
        "Advanced validation engine with 10+ validation types including required, min/max length, email, pattern matching, file size/type restrictions",
        "Role-based access control supporting Admin, Editor, and Viewer roles with granular permissions",
        "Real-time form preview with live updates as fields are added or modified",
        "Field reordering via drag-and-drop with visual drop zones and smooth animations",
        "Persistent storage system using Firebase Storage for file uploads with automatic URL generation",
        "Submission analytics with field-level insights, response rates, completion scores, and data quality recommendations",
        "Advanced filtering system with date range presets (today, last 7/30/90 days, custom ranges) and full-text search",
        "Pagination with configurable page sizes (10/25/50/100 per page) and efficient data loading",
        "Export history tracking with format breakdown, enhancement rate analytics, and size estimation"
      ],
      keyFeatures: [
        "Form Builder Interface: Visual drag-and-drop editor with field type selector, real-time preview, and inline field editing with validation rules",
        "10+ Field Types: Text, Email, Number, Date, Textarea, Select Dropdown, Radio Buttons, Checkboxes, File Upload, Star Rating with customizable properties",
        "Enhanced Data Storage: Submissions stored with complete field definitions including labels, types, validation rules, and options for proper future display",
        "Submission Dashboard: Google Forms-style table view with dynamic columns based on form fields, time-based statistics, and quality indicators",
        "Advanced Filtering: Date range filters (predefined + custom), full-text search across all submission data, form-specific filtering",
        "Export System: Multi-format export (CSV, Excel, JSON) with field metadata, batch export, filtered export, and export history tracking",
        "Real-time Sync: Firebase Firestore integration with real-time listeners, optimistic updates, and automatic conflict resolution",
        "Field Validation: Comprehensive validation with required fields, min/max lengths, email validation, number ranges, date constraints, file restrictions",
        "Analytics Dashboard: Submission statistics by time period, field usage analysis, response rate tracking, data quality scoring with recommendations",
        "Role Management: Admin (full access), Editor (create/edit forms), Viewer (view-only) with permission-based UI rendering",
        "Form Management: Create, edit, duplicate, delete forms with version tracking and submission count monitoring",
        "Responsive Design: Fully responsive interface with mobile, tablet, and desktop optimizations using Tailwind CSS",
        "File Upload Handling: Firebase Storage integration with multiple file support, file type restrictions, size validation, and download URL management",
        "Search & Pagination: Full-text search with field label matching, configurable pagination, sort options (newest/oldest first)"
      ],
      technicalHighlights: [
        "50+ React components with consistent design patterns and reusable architecture",
        "Custom hooks ecosystem: useFormBuilder, useValidation, useDragDrop, useSubmissions, useExport, useFilters, usePagination",
        "Context-based state management with FormBuilderProvider and SubmissionsProvider for clean data flow",
        "Firebase Firestore with optimized queries, real-time listeners, and transaction-based operations",
        "DnD Kit integration for smooth drag-and-drop with collision detection, accessibility support, and keyboard navigation",
        "Advanced validation system with field-level and form-level validation, cross-field validation support, and real-time error feedback",
        "Export service with CSV/Excel/JSON generation, field metadata preservation, UTF-8 BOM support, and size estimation",
        "Modular architecture with clear separation: components, hooks, services, utils for maintainability",
        "Firebase Storage for file management with automatic cleanup and URL generation",
        "Comprehensive error handling with user-friendly messages and fallback mechanisms",
        "Performance optimizations: lazy loading, pagination, debounced search, optimistic UI updates",
        "Type safety through JSDoc comments and consistent prop validation",
        "Accessibility features: keyboard navigation, ARIA labels, screen reader support, focus management"
      ],
      impact: [
        "Eliminated need for expensive third-party form builder subscriptions saving client significant recurring costs",
        "Enabled non-technical users to create complex forms in minutes without developer assistance",
        "Processed 1000+ form submissions with zero data loss and 99.9% uptime",
        "Reduced form creation time from hours (custom development) to minutes (drag-and-drop)",
        "Enhanced data quality with field-level validation reducing invalid submissions by 90%+",
        "Provided comprehensive analytics enabling data-driven decision making for form optimization",
        "Flexible export system supporting multiple formats for integration with external systems",
        "Real-time synchronization enabling collaborative form management across multiple users"
      ],
      "challenges": [
        "Architecting submission storage to preserve field definitions for proper data display even when forms are modified",
        "Implementing smooth drag-and-drop for both field reordering and new field insertion with visual feedback",
        "Building a flexible validation system supporting 10+ field types with customizable rules",
        "Optimizing Firebase queries for large datasets while maintaining real-time updates",
        "Creating a Google Forms-style dynamic table that adapts to different field types and counts"
      ]
    },
    {
      id: 6,
      slug: "nagaland-tourism-website",
      title: "Nagaland Tourism Official Portal",
      description: "Comprehensive tourism website for the Government of Nagaland showcasing 18+ tribes, festivals, destinations, and complete travel information. Features interactive UI, detailed tribal profiles, festival calendars, and essential tourist resources with responsive design.",
      tech: [
        "React",
        "JavaScript",
        "CSS3",
        "React Router",
        "AOS Library",
        "JSON Data Management",
        "Responsive Design"
      ],
      client: "Department of Tourism, Government of Nagaland",
      year: "2024",
      hasImage: false,
      image: "/consulting/nagaland-tourism.jpg",
      fullDescription: "Developed the official tourism portal for the Government of Nagaland's Department of Tourism, serving as the digital gateway for domestic and international tourists. The platform provides comprehensive information about Nagaland's rich cultural heritage, featuring detailed profiles of 18+ tribes, their unique festivals, tourist destinations, and essential travel services. Built with a focus on user experience, the website features interactive modal systems, smooth animations, and a responsive design that works seamlessly across all devices.",
      highlights: [
        "Comprehensive tribal showcase with 18+ detailed tribe profiles featuring cultural information, traditional attire, and festival details with interactive modal views",
        "Advanced festival calendar system displaying tribal festivals with timing, duration, significance, and district-wise categorization",
        "Tourist destinations explorer with rich media content, categorized listings, and detailed destination information",
        "Integrated digital platform section with QR codes and download links for official tourism mobile apps (iOS and Android)",
        "Complete travel resources including ILP/PAP permit information, accommodation listings (hotels and homestays), registered guides, and tour operators",
        "Interactive image galleries with 100+ optimized assets using efficient URL mapping system for fast loading",
        "News and events section with multi-image galleries and detailed content management",
        "Downloadable resources including tourism policy documents, administrative reports, and tourist maps with direct PDF access",
        "Custom modal system for detailed content exploration without page navigation maintaining user context",
        "Smooth scroll animations using AOS library with carefully timed delays for enhanced visual appeal",
        "Multi-page architecture with 25+ routes covering all aspects of Nagaland tourism",
        "Responsive design optimized for desktop, tablet, and mobile devices with adaptive layouts"
      ],
      impact: [
        "Official digital presence for Nagaland Tourism Department serving as primary information source for tourists",
        "Digital preservation of cultural heritage with detailed documentation of 18+ tribes and their traditions",
        "Streamlined access to tourism services reducing time for permit information and service provider discovery",
        "Enhanced discoverability of Nagaland as a tourist destination through comprehensive online presence",
        "Improved tourist experience with centralized access to all necessary travel information and resources"
      ]
    },
    {
      id: 7,
      slug: "portfolio-website-react",
      title: "Modern Portfolio Website",
      description: "Built a fully responsive, modern portfolio website with dynamic theme switching, smooth animations, and optimized performance. Features include project showcases, experience timeline, and contact integration.",
      tech: ["React", "React Router", "Tailwind CSS", "Vite", "Lucide Icons", "CSS Animations"],
      client: "Personal/Professional Portfolio",
      year: "2024",
      hasImage: false,
      image: "/consulting/portfolio-website-react.jpg",
      fullDescription: "Developed a professional portfolio website from scratch using React and modern web technologies. The site features a fully responsive design, dynamic dark/light theme switching, smooth scroll animations, and an intuitive navigation system. Built with performance and user experience in mind, implementing lazy loading, intersection observers, and optimized rendering.",
      highlights: [
        "Implemented custom React hooks for scroll spy navigation and intersection observer animations",
        "Built responsive navigation with smooth scrolling and active section highlighting",
        "Created reusable component library with Card, Button, and SectionTitle components",
        "Integrated dynamic routing for project and consulting detail pages",
        "Designed custom CSS theme system with dark/light mode support using CSS variables",
        "Optimized performance with lazy loading and efficient state management",
        "Implemented accessibility features with proper ARIA labels and keyboard navigation",
        "Built custom scroll progress indicator and smooth page transitions"
      ],
      impact: [
        "Achieved 95+ Lighthouse performance score",
        "100% responsive across all device sizes and browsers",
        "Reduced initial load time with code splitting and lazy loading",
        "Improved user engagement with smooth animations and interactive elements"
      ]
    }
  ],

  skills: {
    languages: ["C++", "Java", "Python", "JavaScript"],
    frontend: ["HTML", "CSS", "Tailwind CSS", "ShadCN", "React", "Redux", "Webpack"],
    backend: ["Node.js", "Express", "Flask", "REST APIs", "JWT", "Spring Boot"],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    cloud: ["AWS", "Firebase"],
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