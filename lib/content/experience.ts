export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  startDate: string; // ISO
  endDate: string | "present";
  formattedPeriod: string;
  teamContext?: string;
  metrics?: string;
  storyBeats: string[];
  techStack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    company: "Enspirit Technology Services Pvt. Ltd.",
    location: "Hyderabad, India",
    startDate: "2024-05-01",
    endDate: "2026-08-31",
    formattedPeriod: "May 2024 – Aug 2026",
    teamContext: "Sole frontend developer in a 9–11 member engineering team",
    metrics: "20–25% search render speedup",
    storyBeats: [
      "Served as the sole frontend developer on an invitation-based event travel platform within a 9–11 member engineering team, building customer-facing interfaces for guests booking flights, hotels, and trains.",
      "Built end-to-end booking workflows covering search, filtering, passenger and guest forms, fare rules, and checkout using React, TypeScript, and reusable component architecture.",
      "Integrated third-party travel and GDS REST APIs for search and booking, implementing caching, background refetching, and shared state with React Query, Axios, Context API, and custom hooks.",
      "Developed the complete frontend authentication flow, including login, protected routes, JWT token handling, and session management.",
      "Optimized high-traffic search and checkout screens using lazy loading, code splitting, and memoization on a Vite build, improving flight search-results rendering by 20–25%.",
      "Built the Drive Stipend reimbursement workflow end-to-end across frontend and backend, translating business requirements into a complete user-facing feature.",
      "Developed responsive and WCAG-accessible interfaces using Tailwind CSS and Material UI, and collaborated with backend engineers on GDS integrations including Sabre and Travelport, owning features from sprint planning through release.",
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "Vite",
      "React Query",
      "Axios",
      "Tailwind CSS",
      "Material UI",
      "Context API",
      "JWT Auth",
      "WCAG Accessibility",
      "Sabre & Travelport GDS",
    ],
  },
  {
    role: "Software Engineer",
    company: "EnterPi Software Solutions Pvt. Ltd.",
    location: "Hyderabad, India",
    startDate: "2023-09-01",
    endDate: "2024-04-30",
    formattedPeriod: "Sep 2023 – Apr 2024",
    teamContext: "Cross-functional Agile engineering & QA collaboration",
    storyBeats: [
      "Built multiple React.js and TypeScript web applications using reusable UI components, improving application load performance through lazy loading and code splitting.",
      "Integrated REST APIs and managed application state using Redux and Context API, implementing authentication, form validation, and core application workflows.",
      "Collaborated with backend and QA teams on API integration, code reviews, testing, and release readiness within an Agile development environment.",
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "Context API",
      "REST APIs",
      "Code Splitting",
      "Agile & Scrum",
    ],
  },
];
