export type SkillCluster =
  | "frontend"
  | "state-data"
  | "backend-expansion"
  | "database-orm"
  | "performance"
  | "testing"
  | "auth"
  | "tools";

export type Skill = {
  name: string;
  cluster: SkillCluster;
  isBackendExpansion?: boolean;
  /** Explanatory status for backend learning / practical application */
  status?: string;
};

export const skillClusters = [
  { key: "all", label: "All Skills" },
  { key: "frontend", label: "Frontend Core" },
  { key: "state-data", label: "State & Data" },
  { key: "backend-expansion", label: "Backend (Expanding)" },
  { key: "database-orm", label: "Database & ORM" },
  { key: "performance", label: "Performance" },
  { key: "testing", label: "Testing" },
  { key: "auth", label: "Authentication" },
  { key: "tools", label: "Tools & Practices" },
] as const;

export const skills: Skill[] = [
  // Frontend (Primary Focus)
  { name: "React.js", cluster: "frontend" },
  { name: "Next.js", cluster: "frontend" },
  { name: "TypeScript", cluster: "frontend" },
  { name: "JavaScript (ES6+)", cluster: "frontend" },
  { name: "HTML5 & CSS3", cluster: "frontend" },
  { name: "Tailwind CSS", cluster: "frontend" },
  { name: "Material UI", cluster: "frontend" },
  { name: "Custom Hooks", cluster: "frontend" },
  { name: "Component Architecture", cluster: "frontend" },
  { name: "Responsive Design", cluster: "frontend" },
  { name: "Accessibility (WCAG)", cluster: "frontend" },

  // State & Data
  { name: "Redux", cluster: "state-data" },
  { name: "React Query", cluster: "state-data" },
  { name: "Context API", cluster: "state-data" },
  { name: "REST APIs", cluster: "state-data" },
  { name: "GraphQL", cluster: "state-data" },
  { name: "Axios", cluster: "state-data" },

  // Backend - Actively Expanding
  {
    name: "Node.js",
    cluster: "backend-expansion",
    isBackendExpansion: true,
    status: "Expanding full-stack capabilities; used in Splitzy & Product Explorer",
  },
  {
    name: "Express.js",
    cluster: "backend-expansion",
    isBackendExpansion: true,
    status: "Building REST APIs with middleware, error contracts, and pagination",
  },
  {
    name: "REST API Design",
    cluster: "backend-expansion",
    isBackendExpansion: true,
    status: "Designing resource-oriented routes, status codes, and input validation",
  },
  {
    name: "Middleware & Validation",
    cluster: "backend-expansion",
    isBackendExpansion: true,
    status: "Express request sanitization and JWT auth verification",
  },
  {
    name: "Server-Side Pagination",
    cluster: "backend-expansion",
    isBackendExpansion: true,
    status: "Implemented cursor and offset pagination for catalog datasets",
  },
  {
    name: "Postman",
    cluster: "backend-expansion",
    isBackendExpansion: true,
    status: "API endpoint testing, contract verification, and debugging",
  },

  // Database & ORM - Actively Expanding
  {
    name: "PostgreSQL",
    cluster: "database-orm",
    isBackendExpansion: true,
    status: "Normalized 3NF relational schemas, indexes, and ACID transactions",
  },
  {
    name: "Prisma ORM",
    cluster: "database-orm",
    isBackendExpansion: true,
    status: "Type-safe database client, schema migrations, and relational relations",
  },

  // Performance
  { name: "Lazy Loading", cluster: "performance" },
  { name: "Code Splitting", cluster: "performance" },
  { name: "React Memoization", cluster: "performance" },
  { name: "Lighthouse Optimization", cluster: "performance" },
  { name: "Debounced Search", cluster: "performance" },

  // Testing
  { name: "Jest", cluster: "testing" },
  { name: "React Testing Library", cluster: "testing" },
  { name: "Unit Testing", cluster: "testing" },
  { name: "Component Testing", cluster: "testing" },

  // Authentication
  { name: "JWT Authentication", cluster: "auth" },
  { name: "Protected Routes", cluster: "auth" },
  { name: "Token Handling", cluster: "auth" },
  { name: "Session Management", cluster: "auth" },

  // Tools & Practices
  { name: "Vite", cluster: "tools" },
  { name: "Git & GitHub", cluster: "tools" },
  { name: "Jira", cluster: "tools" },
  { name: "Figma", cluster: "tools" },
  { name: "VS Code", cluster: "tools" },
  { name: "Agile & Scrum", cluster: "tools" },
];
