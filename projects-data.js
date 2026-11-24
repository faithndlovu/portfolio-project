/* =========================================================
   PROJECTS — single source of truth
   ---------------------------------------------------------
   The Projects page and the Home page's "Featured Projects" are
   both built from this list, in this order. To add a project,
   copy one of the blocks below, paste it where you want it to
   appear, change the details, then run:

       node tools/build-projects.js

   (That writes the cards into the HTML so they show up even
   without JavaScript. The browser refreshes them from this file
   anyway, so the site is never out of date.)

   Fields:
     title        Project name
     type         "Personal project" | "Company project" | "Client project"
     kicker       Small label above the title, e.g. "Full Stack · Web App"
     categories   Any of: "web", "mobile", "backend", "fullstack"
                  (these drive the filter buttons on the Projects page)
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
     note         Small pill shown when there are no public links,
                  e.g. "In Progress" or "Confidential"
     featured     true = also show on the Home page (keep it to 3)

   Company work: no source code, screenshots, client names or
   internal details — describe what it does, not how it is built.
   ========================================================= */

window.PROJECTS = [
  {
    title: "FaithFlow POS",
    type: "Personal project",
    kicker: "Full Stack · Web App",
    categories: ["web", "backend", "fullstack"],
    description:
      "A point-of-sale and inventory system for running a store: sales, stock, purchase orders, expenses and reporting, with separate access for admins, managers, cashiers and stock controllers.",
    tags: ["React", "Node.js", "Express", "SQLite", "Tailwind CSS", "JWT"],
    image: "images/faithflow.png",
    imageAlt: "FaithFlow Point of Sale sign-in screen",
    live: "https://faithflow-pos.vercel.app/",
    caseStudy: "case-studies.html#faithflow",
    featured: true,
  },
  {
    title: "FAYORA Finance Tracker",
    type: "Personal project",
    kicker: "Mobile · Full Stack",
    categories: ["mobile", "backend", "fullstack"],
    description:
      "A mobile app for managing income, expenses, monthly budgets and savings goals, with separate totals for each currency, including ZiG and pula.",
    tags: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "SQLite"],
    phone: "images/fayora-phone.jpg",
    imageAlt: "FAYORA Finance Tracker sign-in screen on a phone",
    live: "https://personal-finance-tracker-mobile.vercel.app",
    code: "https://github.com/faithndlovu/personal-finance-tracker",
    caseStudy: "case-studies.html#fayora",
    featured: true,
  },
  {
    title: "Savanna Grill",
    type: "Personal project",
    kicker: "Full Stack · Website",
    categories: ["web", "fullstack"],
    description:
      "A restaurant website for a fictional grill house, with menu, gallery, table reservations, sign-in and an admin area for managing bookings and the menu.",
    tags: ["React 19", "TanStack Start", "Supabase", "Tailwind CSS"],
    image: "images/savanna-grill.jpg",
    imageAlt: "Savanna Grill restaurant website home page",
    live: "https://restaurant-seven-pi-10.vercel.app",
    code: "https://github.com/faithndlovu/restaurant",
    featured: true,
  },
  {
    title: "TaskFlow",
    type: "Personal project",
    kicker: "Full Stack · Backend & API",
    categories: ["web", "backend", "fullstack"],
    description:
      "Task management with admin, manager and member roles, an enforced review workflow, a drag-and-drop Kanban board, an audit trail and automated API tests.",
    tags: ["Node.js", "Express 5", "SQLite", "REST API", "JWT", "Supertest"],
    image: "images/taskflow.jpg",
    imageAlt: "TaskFlow sign-in screen",
    live: "https://taskflow-production-production.up.railway.app",
    code: "https://github.com/faithndlovu/task-management-app",
    caseStudy: "case-studies.html#taskflow",
  },
  {
    title: "Student Attachment Tracking System",
    type: "Personal project",
    kicker: "Full Stack · Laravel",
    categories: ["web", "backend", "fullstack"],
    description:
      "Connects students, companies, supervisors and assessors through applications, placements, location-based check-ins, reports, grading and real-time chat.",
    tags: ["Laravel", "PHP", "MySQL", "Livewire", "Tailwind CSS"],
    image: "images/sats.png",
    imageAlt: "Student Attachment Tracking System landing page",
    code: "https://github.com/faithndlovu/student-attachment-tracking-system",
    caseStudy: "case-studies.html#sats",
  },
  {
    title: "LearnHub",
    type: "Personal project",
    kicker: "Full Stack · Web App",
    categories: ["web", "backend", "fullstack"],
    description:
      "A learning platform with student registration, a course catalogue, ordered lessons, server-graded quizzes and progress tracking, plus instructor and admin dashboards.",
    tags: ["Node.js", "Express 5", "SQLite", "JWT", "JavaScript"],
    image: "images/learnhub.jpg",
    imageAlt: "LearnHub sign-in and student registration screen",
    live: "https://student-learning-app-production.up.railway.app",
    code: "https://github.com/faithndlovu/student-learning-app",
  },
  {
    title: "E-Learning Platform",
    type: "Personal project",
    kicker: "Backend & API · Architecture",
    categories: ["web", "backend", "fullstack"],
    description:
      "A layered REST API with separate student/instructor and admin apps, covering courses, sessions, enrolments and instructor payouts.",
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
    type: "Company project",
    kicker: "Mobile · Flutter",
    categories: ["mobile", "backend"],
    description:
      "A Flutter mobile app, backed by a REST API, that lets a retail business manage stock, record sales and see daily performance.",
    tags: ["Flutter", "Dart", "PHP", "MySQL", "REST API"],
    cover: {
      icon: "fas fa-mobile-screen-button",
      theme: "teal",
      label: "Flutter · REST API",
    },
    note: "Confidential",
  },
  {
    title: "AI Poem Generator",
    type: "Personal project",
    kicker: "Frontend · AI API",
    categories: ["web"],
    description:
      "Generates creative poems from a user's prompt by calling an AI API, with a clean, responsive interface.",
    tags: ["JavaScript", "AI API", "CSS"],
    image: "images/poemgenerator.jpg",
    imageAlt: "AI Poem Generator screenshot",
    code: "https://github.com/faithndlovu/Poem-generator",
  },
  {
    title: "Dictionary App",
    type: "Personal project",
    kicker: "Frontend · React",
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
    type: "Personal project",
    kicker: "Frontend · Responsive",
    categories: ["web"],
    description:
      "A responsive travel site showcasing Victoria Falls with strong imagery and a mobile-friendly layout.",
    tags: ["HTML", "CSS", "Responsive"],
    image: "images/travel.jpg",
    imageAlt: "Victoria Falls Travel Project screenshot",
    code: "https://github.com/faithndlovu/vic-falls-travel-project",
  },
  {
    title: "Hope Hub",
    type: "Client project",
    kicker: "Frontend · Website",
    categories: ["web"],
    description:
      "A multi-page site for a youth empowerment initiative, with programme information, products, impact stats, enrolment and donations.",
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
