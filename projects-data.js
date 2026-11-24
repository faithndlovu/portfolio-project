/* =========================================================
   PROJECTS — single source of truth
   ---------------------------------------------------------
   The Work page and the Home page's "Featured Projects" are
   both built from this list. To add a project, copy one of
   the blocks below, paste it where you want it to appear,
   and change the details.

   Fields:
     title        Project name
     kicker       Small label above the title, e.g. "Full Stack · Web App"
     categories   Any of: "web", "mobile", "backend", "fullstack"
                  (these drive the filter buttons on the Work page)
     description  One or two sentences
     tags         Technologies used
     image        Screenshot in /images (optional)
     phone        Portrait phone screenshot (optional) — shown inside a
                  phone frame instead of a browser-style screenshot
     cover        Used when there is no image:
                    { icon: "fas fa-...", theme: "blue" | "teal" | "navy",
                      label: "Short stack summary" }
     live         Live demo URL (optional) — shows a "Live" badge
     code         GitHub URL (optional)
     caseStudy    Link to a case study (optional)
     note         Small pill shown when there are no links,
                  e.g. "In Progress" or "Company Project"
     featured     true = also show on the Home page (keep it to 3)
   ========================================================= */

window.PROJECTS = [
  {
    title: "FaithFlow POS",
    kicker: "Full Stack · Web App",
    categories: ["web", "backend", "fullstack"],
    description:
      "Point-of-sale and inventory system with four user roles, barcode scanning, purchase orders, loyalty tracking and dashboards.",
    tags: ["React", "Node.js", "Express", "SQLite", "JWT"],
    image: "images/faithflow.png",
    imageAlt: "FaithFlow Point of Sale sign-in screen",
    live: "https://faithflow-pos.vercel.app/",
    caseStudy: "case-studies.html#faithflow",
    featured: true,
  },
  {
    title: "FAYORA Finance Tracker",
    kicker: "Mobile · Full Stack",
    categories: ["mobile", "backend", "fullstack"],
    description:
      "A React Native mobile app and REST API for tracking income and expenses, monthly budgets with warnings, savings goals and multiple currencies, including ZiG and pula.",
    tags: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "SQLite", "JWT"],
    phone: "images/fayora-phone.jpg",
    imageAlt: "FAYORA Finance Tracker sign-in screen on a phone",
    live: "https://personal-finance-tracker-mobile.vercel.app",
    code: "https://github.com/faithndlovu/personal-finance-tracker",
    featured: true,
  },
  {
    title: "TaskFlow",
    kicker: "Full Stack · Web App",
    categories: ["web", "backend", "fullstack"],
    description:
      "Task management with admin, manager and member roles, an enforced To do → In review → Done workflow, a drag-and-drop Kanban board, audit trail and API tests.",
    tags: ["Node.js", "Express 5", "SQLite", "JWT", "JavaScript", "Supertest"],
    image: "images/taskflow.jpg",
    imageAlt: "TaskFlow sign-in screen",
    live: "https://taskflow-production-production.up.railway.app",
    code: "https://github.com/faithndlovu/task-management-app",
    featured: true,
  },
  {
    title: "LearnHub",
    kicker: "Full Stack · Web App",
    categories: ["web", "backend", "fullstack"],
    description:
      "A student learning platform with registration, a course catalogue, ordered lessons, server-graded quizzes and progress tracking, plus instructor and admin dashboards.",
    tags: ["Node.js", "Express 5", "SQLite", "JWT", "JavaScript"],
    image: "images/learnhub.jpg",
    imageAlt: "LearnHub sign-in and student registration screen",
    live: "https://student-learning-app-production.up.railway.app",
    code: "https://github.com/faithndlovu/student-learning-app",
  },
  {
    title: "Savanna Grill",
    kicker: "Full Stack · Website",
    categories: ["web", "fullstack"],
    description:
      "A restaurant website for a fictional grill house, with menu, gallery, sign-in, table reservations and an admin area, server-rendered with a Supabase backend.",
    tags: ["React 19", "TanStack Start", "Vite", "Supabase", "Tailwind"],
    image: "images/savanna-grill.jpg",
    imageAlt: "Savanna Grill restaurant website home page",
    live: "https://restaurant-seven-pi-10.vercel.app",
    code: "https://github.com/faithndlovu/restaurant",
  },
  {
    title: "E-Learning Platform",
    kicker: "Full Stack · Web Platform",
    categories: ["web", "backend", "fullstack"],
    description:
      "A REST API plus separate student/instructor and admin apps, with courses, sessions, enrolments, instructor payouts and JWT role-based access.",
    tags: ["Node.js", "Express", "PostgreSQL", "React", "TypeScript"],
    cover: {
      icon: "fas fa-graduation-cap",
      theme: "blue",
      label: "Node · Express · PostgreSQL · React",
    },
    code: "https://github.com/faithndlovu/elearning-platform",
    caseStudy: "case-studies.html#elearning",
  },
  {
    title: "Retail Shop Management App",
    kicker: "Mobile · Company Project",
    categories: ["mobile", "backend", "fullstack"],
    description:
      "A Flutter mobile app backed by a PHP REST API that lets a retail business manage stock, record sales and track daily performance.",
    tags: ["Flutter", "Dart", "PHP 8", "MySQL", "REST API"],
    cover: {
      icon: "fas fa-mobile-screen-button",
      theme: "teal",
      label: "Flutter · PHP · MySQL · REST",
    },
    caseStudy: "case-studies.html#retail-app",
    note: "Company Project",
  },
  {
    title: "Student Attachment Tracking System",
    kicker: "Full Stack · Laravel",
    categories: ["web", "backend", "fullstack"],
    description:
      "Manages student placements, supervisor evaluations and reporting, with authentication and role-based access.",
    tags: ["Laravel", "PHP", "MySQL", "Blade"],
    image: "images/sats.png",
    imageAlt: "Student Attachment Tracking System screenshot",
    code: "https://github.com/faithndlovu/student-attachment-tracking-system",
  },
  {
    title: "AI Poem Generator",
    kicker: "Web · AI API",
    categories: ["web"],
    description:
      "Generates creative poems from a user's prompt by calling an AI API, with a clean, responsive interface.",
    tags: ["JavaScript", "AI API", "CSS"],
    image: "images/poemgenerator.png",
    imageAlt: "AI Poem Generator screenshot",
    code: "https://github.com/faithndlovu/Poem-generator",
  },
  {
    title: "Dictionary App",
    kicker: "Web · React",
    categories: ["web"],
    description:
      "A React app that fetches real-time meanings, phonetics and examples from a dictionary API as you search.",
    tags: ["React", "API", "JavaScript"],
    image: "images/dictionary.png",
    imageAlt: "Dictionary App screenshot",
    code: "https://github.com/faithndlovu/dictionary-proj",
  },
  {
    title: "Victoria Falls Travel",
    kicker: "Web · Responsive",
    categories: ["web"],
    description:
      "A responsive travel site showcasing Victoria Falls with strong imagery and a mobile-friendly layout.",
    tags: ["HTML", "CSS", "Responsive"],
    image: "images/travel.png",
    imageAlt: "Victoria Falls Travel Project screenshot",
    code: "https://github.com/faithndlovu/vic-falls-travel-project",
  },
  {
    title: "Hope Hub",
    kicker: "Web · Client Project",
    categories: ["web"],
    description:
      "A multi-page site for a youth empowerment initiative — programme info, products, impact stats, enrolment and donations.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    cover: {
      icon: "fas fa-hand-holding-heart",
      theme: "navy",
      label: "Client project · In progress",
    },
    note: "In Progress",
  },
];

/* GitHub repo IDs that should NOT appear in the live "Latest on GitHub"
   feed (company / client work, and this portfolio itself). IDs are used
   instead of names so the repo names are not exposed in the page source.
   Find a repo's ID at https://api.github.com/repos/faithndlovu/REPO-NAME */
window.HIDDEN_REPO_IDS = [1375678177, 839763373, 1170613370, 1170611874];
