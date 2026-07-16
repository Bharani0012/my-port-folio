export const profile = {
  name: 'Bharanitharan M',
  initials: 'BM',
  role: 'Full Stack Developer',
  location: 'Erode, Tamil Nadu',
  locationNote: 'Open to relocation / remote',
  phone: '+91 7449015872',
  email: 'bharanitharan695@gmail.com',
  linkedin: 'http://www.linkedin.com/in/bharani-tharan',
  github: 'https://github.com/Bharani0012',
  githubLabel: 'github.com/bharanitharanm',
  resumeFile: '/Bharanitharan-Resume.pdf',
  tagline: 'Building multi-tenant SaaS platforms — from JWT-scoped auth to a CI/CD pipeline that ships in one click.',
};

export const summary =
  "Full stack developer engineering multi-tenant SaaS products end to end — FastAPI services, React/Next.js frontends, " +
  "and the CI/CD pipelines that ship them. Background in high-accuracy document QA gave me a low tolerance for regressions " +
  "and a habit of building the workflow, not just the feature.";

export const stats = [
  { num: '8 → 1', label: 'CI/CD release steps cut via parameterized GitHub Actions pipeline' },
  { num: '99%+', label: 'Accuracy sustained across 500+ documents reviewed per month' },
  { num: '3 mo', label: 'Time to promotion from Title Search to Quality Analyst' },
  { num: '20%', label: 'Team throughput gain after training 6 reviewers' },
];

export const skills = [
  { group: 'Backend', items: ['FastAPI', 'Python', 'REST API', 'Async Programming', 'Pydantic'] },
  { group: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'] },
  { group: 'Database', items: ['PostgreSQL', 'MySQL', 'SQLite'] },
  { group: 'DevOps & Tools', items: ['Docker', 'GitHub Actions (CI/CD)', 'Git', 'Linux CLI', 'API Testing'] },
  { group: 'Auth & Billing', items: ['Clerk (JWT / OAuth)', 'Paddle'] },
];

export const learning = [
  'Advanced FastAPI patterns',
  'Production logging & tracing',
  'Unit of Work pattern',
  'Backend system design & scalability',
];

export const experience = [
  {
    role: 'Full Stack Developer',
    org: 'Visual AI Agent Builder',
    context: 'Early-stage SaaS Startup · Remote',
    date: 'Nov 2024 — Present',
    bullets: [
      'Engineered a multi-tenant SaaS platform for visual AI workflow orchestration, implementing Clerk JWT-based RBAC for 3+ independent tenants — eliminating unauthorized cross-tenant data access entirely.',
      'Integrated Paddle subscription billing across FastAPI + React.js with tiered pricing and conditional UI rendering — reducing manual billing overhead to zero and enabling self-serve monetization.',
      'Designed a parameterized GitHub Actions CI/CD pipeline with Docker image builds and environment-aware deployments, cutting manual release steps from 8 to 1 and eliminating environment mismatch errors.',
      'Refactored monolithic backend into modular components (routers, services, models) following clean architecture — reduced PR review time and improved unit testability across the codebase.',
      'Built a full-stack internal ticketing & real-time support system (FastAPI + Next.js) with persistent storage, paginated REST APIs, and role-based workflow handling.',
    ],
    tech: 'FastAPI, React.js, Next.js, PostgreSQL, Docker, GitHub Actions, Clerk, Paddle, TypeScript',
  },
  {
    role: 'Title Search → Quality Analyst',
    org: 'SKP Title Search Pvt Ltd',
    context: null,
    date: 'Jun 2020 — Mar 2023',
    bullets: [
      'Reviewed and validated 500+ US real estate title commitments/month, maintaining 99%+ accuracy with zero compliance escalations across the entire tenure.',
      'Promoted to Quality Analyst in 3 months; built structured review workflows and QA benchmarks adopted team-wide across 6+ reviewers.',
      'Trained 6 team members on document review best practices, contributing to a 20% improvement in team throughput.',
    ],
    tech: null,
  },
];

export const projects = [
  {
    title: 'Primitive-Chat — Support Ticketing Module',
    date: 'Nov 2024 — Present',
    tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'REST APIs'],
    bullets: [
      'Architected a full-stack issue-tracking system end-to-end using FastAPI and Next.js; designed paginated REST APIs handling complete ticket lifecycle from creation to resolution with role-scoped access control.',
      'Modeled a PostgreSQL schema for multi-state ticket management (users, roles, ticket states) and wrote unit tests for core API modules — ensuring stable releases and catching regressions before deployment.',
      'Delivered customized chat UI and frontend workflows in Next.js that streamlined support interactions, reducing issue-reporting friction for end users.',
    ],
  },
];

export const education = {
  school: 'Hindusthan College of Engineering',
  degree: 'BE — Electrical & Electronics',
  place: 'Coimbatore, Tamil Nadu',
  meta: '· Graduated Mar 2019',
};
