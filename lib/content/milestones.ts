export type Milestone = {
  date: string;
  period: string;
  title: string;
  category: "education" | "experience" | "learning";
  description: string;
};

export const milestones: Milestone[] = [
  {
    date: "2019-08-01",
    period: "Aug 2019 – May 2023",
    title: "B.E. in Electrical and Electronics Engineering",
    category: "education",
    description:
      "Graduated with 8.0/10 CGPA from Vidya Jyothi Institute of Technology, Hyderabad. Built strong foundational analytical and problem-solving skills.",
  },
  {
    date: "2023-09-01",
    period: "Sep 2023 – Apr 2024",
    title: "Software Engineer at EnterPi Software Solutions",
    category: "experience",
    description:
      "Built multiple production React.js and TypeScript web applications with reusable component architectures, Redux state management, and load performance optimizations.",
  },
  {
    date: "2024-05-01",
    period: "May 2024 – Aug 2026",
    title: "Software Engineer at Enspirit Technology Services",
    category: "experience",
    description:
      "Sole frontend developer on an invitation-based event travel platform in an 11-member engineering team. Owned flight, hotel, and train booking workflows, auth, GDS integrations, and achieved 20–25% search render speedup.",
  },
  {
    date: "2025-01-01",
    period: "Ongoing Direction",
    title: "Full-Stack Backend Expansion",
    category: "learning",
    description:
      "Actively expanding engineering capabilities into Node.js, Express.js, PostgreSQL, and Prisma ORM — implementing greedy settlement algorithms, ACID database transactions, and high-performance REST APIs.",
  },
];
