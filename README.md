portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   ├── Sidharth_Agarwal_Resume.pdf
│   └── projects/
│       ├── athmech.jpg
│       ├── mbs-portal.jpg
│       └── statesync.jpg
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── AnimatedGradientText.jsx     ← NEW  (flowing gradient text for headings)
│   │   │   ├── AuroraBackground.jsx         ← NEW  (animated aurora for hero/sections)
│   │   │   ├── Button.jsx                   (no change)
│   │   │   ├── Card.jsx                     ← MODIFIED  (spotlight glow + Motion 3D tilt)
│   │   │   ├── CustomCursor.jsx             ← MODIFIED  (mix-blend-mode exclusion upgrade)
│   │   │   ├── EmptyState.jsx               (no change)
│   │   │   ├── LoadingSpinner.jsx           (no change)
│   │   │   ├── MagneticButton.jsx           ← NEW  (GSAP magnetic hover effect)
│   │   │   ├── PageTransition.jsx           ← NEW  (curtain wipe between routes)
│   │   │   ├── Preloader.jsx                ← NEW  (initial loading screen)
│   │   │   ├── SectionTitle.jsx             ← MODIFIED  (GSAP SplitText reveal)
│   │   │   ├── SpotlightCard.jsx            ← NEW  (reusable card with cursor spotlight)
│   │   │   └── ThemeToggle.jsx              (no change)
│   │   │
│   │   ├── layout/
│   │   │   ├── Footer.jsx                   (no change)
│   │   │   ├── Layout.jsx                   ← MODIFIED  (PageTransition wrapper)
│   │   │   ├── MobileNav.jsx                ← NEW  (glassmorphism bottom nav for mobile)
│   │   │   └── Navbar.jsx                   (no change)
│   │   │
│   │   └── sections/
│   │       ├── About.jsx                    (no change)
│   │       ├── Consulting.jsx               ← MODIFIED  (SpotlightCard + stagger reveals)
│   │       ├── Contact.jsx                  (no change)
│   │       ├── Experience.jsx               ← MODIFIED  (SVG path drawing + scroll-linked)
│   │       ├── Hero.jsx                     ← MODIFIED  (particles + GSAP SplitText + MagneticButton)
│   │       ├── Projects.jsx                 ← MODIFIED  (Embla carousel on mobile + stagger)
│   │       └── Skills.jsx                   ← MODIFIED  (bento grid + radar chart)
│   │
│   ├── contexts/
│   │   └── ThemeContext.jsx                 (no change)
│   │
│   ├── data/
│   │   └── portfolioData.js                 (no change)
│   │
│   ├── hooks/
│   │   ├── useGSAPReveal.js                 ← NEW  (ScrollTrigger text/element reveals)
│   │   ├── useIntersectionObserver.js       (no change)
│   │   ├── useMagneticButton.js             ← NEW  (GSAP magnetic button logic)
│   │   ├── useScrollProgress.js             (no change)
│   │   ├── useScrollSpy.js                  (no change)
│   │   ├── useSmoothScroll.js               ← NEW  (Lenis smooth scroll setup)
│   │   ├── useSpotlightCard.js              ← NEW  (cursor-tracked spotlight glow)
│   │   └── useTilt.js                       (no change)
│   │
│   ├── pages/
│   │   ├── ConsultingDetail.jsx             (no change)
│   │   ├── Home.jsx                         (no change)
│   │   ├── NotFound.jsx                     (no change)
│   │   └── ProjectDetail.jsx                (no change)
│   │
│   ├── styles/
│   │   └── index.css                        ← MODIFIED  (aurora CSS, animated gradient,
│   │                                                      noise texture, bento grid utils)
│   │
│   ├── utils/
│   │   └── helpers.js                       (no change)
│   │
│   ├── App.jsx                              ← MODIFIED  (Lenis provider + Preloader)
│   ├── index.jsx                            (no change)
│   └── router.jsx                           (no change)
│
├── .env                                     (no change)
├── index.html                               (no change)
├── package.json                             ← MODIFIED  (new packages)
├── tailwind.config.js                       ← MODIFIED  (custom animations + bento utils)
└── vite.config.js                           (no change)