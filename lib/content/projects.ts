export type ProjectStatus = "production" | "fullstack" | "frontend" | "shipped" | "personal";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  category: string;
  stack: string[];
  status: ProjectStatus;
  statusLabel: string;
  metrics?: string;
  highlights: string[];
  technicalDetails: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyHref?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "splitzy-expense-splitter",
    title: "Splitzy – Expense Splitter",
    subtitle: "Algorithmic Debt Simplification & Group Expense Sharing",
    summary:
      "Full-stack expense splitting application engineered to settle shared balances with minimum transactions using a greedy debtor-creditor algorithm, backed by transactional database writes for strict consistency.",
    category: "Full-Stack Web App",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "React Query",
    ],
    status: "fullstack",
    statusLabel: "Full-Stack Project",
    highlights: [
      "Implemented a greedy debtor-creditor settlement algorithm to minimize the total number of transactions needed to clear shared debts.",
      "Wrapped expense writes in atomic database transactions with Prisma to preserve balance consistency and avoid partial state mutations.",
      "Designed a normalized PostgreSQL schema and developed a REST API secured with JWT authentication.",
      "Built a modern responsive frontend with React Query caching and persisted dark/light theme switching.",
    ],
    technicalDetails: [
      "Greedy Settlement Algorithm: Resolves net debtor/creditor graph into minimal settlement paths.",
      "Atomic DB Transactions: Prisma $transaction blocks prevent balance discrepancies during concurrent writes.",
      "Normalized Relational Schema: 3NF tables in PostgreSQL for users, groups, expenses, and split shares.",
      "JWT & State Architecture: Stateless JWT authentication paired with React Query optimistic cache mutations.",
    ],
    liveUrl: "https://splitzy-expense-splitter.vercel.app",
    githubUrl: "https://github.com/AravindAnnaldas-Dev/splitzy-expense-splitter",
    featured: true,
  },
  {
    slug: "product-explorer",
    title: "Product Explorer",
    subtitle: "High-Performance Product Catalog & Search Engine",
    summary:
      "Performance-focused e-commerce product catalog optimized for sub-second search, multi-facet filtering, and high core web vitals, powered by a validated Node/Express REST API.",
    category: "Performance & Frontend",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "React Query",
      "Tailwind CSS",
    ],
    status: "shipped",
    statusLabel: "Performance Showcase",
    metrics: "Lighthouse 63 → 89",
    highlights: [
      "Improved Google Lighthouse Performance score from 63 to 89 using next/image, lazy loading, code splitting, and React memoization.",
      "Engineered an interactive product catalog with server-side pagination, combinable multi-parameter category and price filters, and debounced search.",
      "Backed by a Node.js and Express REST API featuring rigorous query parameter validation and error contracts.",
      "Implemented accessible skeleton loaders for seamless content transitions and accessible dark/light themes.",
    ],
    technicalDetails: [
      "Lighthouse Optimization: Eliminated layout shifts and render-blocking resources, lifting score from 63 to 89.",
      "Debounced Search & Server Pagination: Kept network traffic lightweight while delivering immediate UI feedback.",
      "Multi-Filter Composition: Clean URL synchronization with stateful query params for bookmarkable search states.",
      "Resilient UI Architecture: Custom skeleton states and WCAG-compliant high-contrast theme styling.",
    ],
    liveUrl: "https://product-explorer-app.vercel.app",
    githubUrl: "https://github.com/AravindAnnaldas-Dev/product-explorer",
    featured: true,
  },
  {
    slug: "portfolio-builder",
    title: "Portfolio Builder",
    subtitle: "Interactive Multi-Template Developer Portfolio Creator",
    summary:
      "Interactive resume and developer portfolio generator with real-time drag-to-reorder layout customization, instant live preview, autosave, and clean static HTML export.",
    category: "Full-Stack Web App",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "React Query",
    ],
    status: "fullstack",
    statusLabel: "Full-Stack Project",
    highlights: [
      "Designed a drag-to-reorder editor with live preview and autosave, allowing users to rearrange resume sections and inspect changes instantaneously.",
      "Engineered four distinct, responsive templates structured around a shared normalized data model.",
      "Built clean static HTML export capabilities so users can deploy self-contained portfolios anywhere.",
      "Implemented user accounts with JWT authentication and strict per-user record ownership in PostgreSQL.",
    ],
    technicalDetails: [
      "Drag-to-Reorder Layout Engine: Dynamic section sorting with instant dual-pane live preview.",
      "Autosave Mechanism: Debounced background synchronization to PostgreSQL via Prisma ORM.",
      "Shared Multi-Template Schema: Polymorphic component architecture rendering distinct layouts from a unified data contract.",
      "Static Generation: Client-side compilation into standalone, production-ready HTML and CSS files.",
    ],
    liveUrl: "https://portfolio-builder-app.vercel.app",
    githubUrl: "https://github.com/AravindAnnaldas-Dev/portfolio-builder",
    featured: true,
  },
  {
    slug: "travel-platform",
    title: "Event Travel Booking Platform",
    subtitle: "Multi-Vertical Enterprise Booking Engine (Flights, Hotels, Trains)",
    summary:
      "Sole frontend developer on an invitation-based event travel platform within a 9–11 member engineering team, building customer-facing interfaces for booking flights, hotels, and trains, with 20–25% search render speedup.",
    category: "Production Platform",
    stack: [
      "React.js",
      "TypeScript",
      "Vite",
      "React Query",
      "Axios",
      "Tailwind CSS",
      "Material UI",
      "Context API",
    ],
    status: "production",
    statusLabel: "Production Work @ Enspirit",
    metrics: "20–25% Search Render Boost",
    highlights: [
      "Sole frontend developer on an invitation-based travel platform across a 9–11 member engineering team, owning flight, hotel, and train booking workflows.",
      "Built end-to-end booking workflows covering search, filtering, passenger and guest forms, fare rules, and checkout.",
      "Integrated third-party travel and GDS REST APIs (Sabre, Travelport), implementing caching and background refetching with React Query.",
      "Optimized high-traffic search and checkout screens on a Vite build, improving flight search-results rendering by 20–25%.",
      "Built the Drive Stipend reimbursement workflow end-to-end across frontend and backend.",
    ],
    technicalDetails: [
      "Multi-Vertical Architecture: Unified state and UI engine accommodating disparate booking models for flights, hotels, and trains.",
      "GDS Integration: Real-time data synchronization with Sabre and Travelport APIs via Axios and React Query.",
      "Rendering Performance: Profiled and reduced DOM re-renders by 20–25% using virtualized lazy loading and memoization.",
      "Authentication & Security: Complete JWT session lifecycle, role-based protected routes, and token refresh.",
    ],
    caseStudyHref: "/work/travel-platform",
    featured: true,
  },
];
