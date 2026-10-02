import { Reveal } from "@/components/motion/reveal";

const METRICS = [
  {
    title: "Production Tenure",
    desc: "3 years of hands-on web development across Enspirit Technology Services & EnterPi Software Solutions.",
  },
  {
    title: "Sole Frontend Ownership",
    desc: "Owned booking workflows, filtering, passenger forms, fare rules, and auth across flights, hotels, and trains.",
  },
  {
    title: "Measurable Performance Impact",
    desc: "20–25% flight search-results rendering improvement through lazy loading, code splitting, and memoization.",
  },
  {
    title: "Backend Expansion Stack",
    desc: "Actively building with Node.js, Express.js, PostgreSQL, and Prisma ORM for full-stack depth.",
  },
  {
    title: "Academic Background",
    desc: "B.E. in Electrical and Electronics Engineering, Vidya Jyothi Institute of Technology (CGPA: 8.0/10).",
  },
];

/**
 * About Section — Authentic professional narrative grounded in resume experience,
 * highlighting frontend depth and structured backend expansion.
 */
export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto grid w-full max-w-6xl scroll-mt-16 gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:px-16 lg:py-32"
    >
      <Reveal>
        <p className="text-text-secondary mb-4 font-mono text-sm tracking-wide uppercase">
          01 — About &amp; Background
        </p>
        <h2
          id="about-heading"
          className="font-display text-text-primary text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Engineering resilient, high-performance web interfaces.
        </h2>

        <div className="text-text-secondary mt-6 flex flex-col gap-4 text-base leading-[1.7] sm:text-lg">
          <p>
            I am a <strong className="text-text-primary">Frontend Developer with 3 years of experience</strong> building
            production-grade web applications using React, Next.js, TypeScript, and
            JavaScript. My focus is on creating responsive, accessible, and performance-focused
            interfaces that handle complex state and high-traffic workflows smoothly.
          </p>

          <p>
            At <strong className="text-text-primary">Enspirit Technology Services</strong>, I served as the
            sole frontend developer on an invitation-based event travel platform within a 9–11 member
            engineering team. I owned customer-facing interfaces for booking flights, hotels,
            and trains—building end-to-end booking workflows, third-party GDS integrations (Sabre, Travelport),
            and complete authentication. By optimizing search and checkout screens on a Vite build,
            I improved flight search-results rendering by <strong className="text-accent">20–25%</strong>.
          </p>

          <p>
            Prior to that at <strong className="text-text-primary">EnterPi Software Solutions</strong>, I built
            multiple React and TypeScript applications with reusable UI components and Redux state
            management within fast-paced Agile sprint cycles.
          </p>

          <p className="border-accent/30 bg-surface rounded-md border-l-2 py-3 pr-4 pl-4 text-sm sm:text-base">
            <span className="text-text-primary font-medium">Full-Stack Growth: </span>
            Expanding my expertise beyond frontend development into backend engineering with{" "}
            <span className="text-accent font-mono text-xs sm:text-sm">
              Node.js, Express.js, PostgreSQL, and Prisma ORM
            </span>
            —bringing end-to-end understanding to data modeling, API design, and system architecture.
          </p>
        </div>
      </Reveal>

      <Reveal index={1}>
        <div className="border-border bg-surface/50 rounded-xl border p-6 backdrop-blur-sm sm:p-8">
          <h3 className="font-display text-text-primary text-sm font-semibold tracking-wide uppercase">
            Career Snapshot
          </h3>
          <ul className="mt-6 flex flex-col gap-5">
            {METRICS.map((metric) => (
              <li
                key={metric.title}
                className="border-border/60 border-b pb-4 last:border-0 last:pb-0"
              >
                <span className="text-text-primary font-mono text-xs font-semibold uppercase tracking-wider">
                  {metric.title}
                </span>
                <p className="text-text-secondary mt-1 text-sm leading-relaxed">
                  {metric.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
