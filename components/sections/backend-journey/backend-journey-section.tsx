import { Check, Database, Layers, Server, Terminal } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";

const BACKEND_STACK = [
  {
    category: "Backend Engine",
    name: "Node.js & Express.js",
    icon: Server,
    summary:
      "Building clean RESTful APIs with structured routing, custom middleware pipelines, and query validation.",
    points: [
      "REST API design following industry HTTP standards and resource patterns",
      "Middleware for request validation, error contracts, and JWT authentication",
      "Server-side pagination and debounced query handling for large datasets",
      "API testing and contract verification using Postman",
    ],
    appliedIn: "Implemented in Splitzy, Product Explorer & Portfolio Builder",
  },
  {
    category: "Relational Database",
    name: "PostgreSQL",
    icon: Database,
    summary:
      "Modeling structured relational schemas with strict data integrity, foreign key relations, and ACID safety.",
    points: [
      "Normalized 3NF schema design for users, groups, expenses, and records",
      "Atomic database transactions to prevent partial writes and race conditions",
      "Indexed query strategies for high-read catalog filtering and pagination",
      "Data consistency guarantees across multi-party balance updates",
    ],
    appliedIn: "Powering persistence and transactional consistency in Splitzy",
  },
  {
    category: "Object-Relational Mapping",
    name: "Prisma ORM",
    icon: Layers,
    summary:
      "End-to-end type safety between database schemas and API controllers with automated migration workflows.",
    points: [
      "Declarative schema definition and automated migration tracking",
      "Type-safe query generation eliminating common SQL runtime errors",
      "Prisma $transaction execution for multi-table atomic operations",
      "Relational querying with eager loading and nested field selections",
    ],
    appliedIn: "Schema management and typed mutations in Splitzy & Portfolio Builder",
  },
];

/**
 * Backend Learning Journey —
 * Authentically presents full-stack capability expansion across Node.js, Express.js,
 * PostgreSQL, and Prisma ORM backed by actual project implementations.
 */
export function BackendJourneySection() {
  return (
    <section
      id="backend-journey"
      aria-labelledby="backend-journey-heading"
      className="border-border mx-auto w-full max-w-6xl scroll-mt-16 border-t px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <Reveal>
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-text-secondary font-mono text-sm tracking-wide uppercase">
            03 — Capabilities Expansion
          </p>
          <span className="border-accent/40 bg-accent/10 text-accent rounded-full border px-3 py-0.5 font-mono text-xs">
            Active Learning &amp; Applied Projects
          </span>
        </div>

        <h2
          id="backend-journey-heading"
          className="font-display text-text-primary mt-4 max-w-[50ch] text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Expanding into backend &amp; full-stack engineering.
        </h2>

        <p className="text-text-secondary mt-4 max-w-[68ch] text-base leading-relaxed sm:text-lg">
          Expanding my expertise beyond frontend development into backend engineering with{" "}
          <strong className="text-text-primary font-medium">
            Node.js, Express.js, PostgreSQL, and Prisma ORM
          </strong>
          . Rather than treating the backend as a black box, I build end-to-end
          systems to understand data integrity, database transactions, and API contracts.
        </p>
      </Reveal>

      {/* Backend Pillars Grid */}
      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {BACKEND_STACK.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.name} index={i} as="li" className="h-full">
              <div className="border-border bg-surface/50 hover:border-accent/40 hover:bg-surface/80 flex h-full flex-col justify-between rounded-xl border p-6 transition-all duration-300 sm:p-7">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-text-secondary font-mono text-xs uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className="border-border bg-surface rounded-md border p-2 text-accent">
                      <Icon className="size-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-text-primary mt-3 text-xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-text-secondary mt-2 text-sm leading-relaxed">
                    {item.summary}
                  </p>

                  <ul className="mt-5 flex flex-col gap-2.5">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check className="size-3.5 shrink-0 text-accent mt-0.5" />
                        <span className="text-text-secondary leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-border/60 mt-6 border-t pt-4">
                  <span className="text-accent flex items-center gap-1.5 font-mono text-xs">
                    <Terminal className="size-3" />
                    {item.appliedIn}
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
