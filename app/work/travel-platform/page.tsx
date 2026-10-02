import { ArrowLeft, CheckCircle2, TrendingUp, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ArchitectureDiagram } from "@/components/case-study/architecture-diagram";
import { CaseStudySection } from "@/components/case-study/case-study-section";
import { TextReveal } from "@/components/motion/text-reveal";

export const metadata: Metadata = {
  title: "Event Travel Booking Platform — Architecture Case Study",
  description:
    "How I engineered a multi-vertical booking platform covering flights, hotels, and trains as the sole frontend developer at Enspirit Technology Services.",
};

const STACK = [
  "React.js",
  "TypeScript",
  "Vite",
  "React Query",
  "Axios",
  "Context API",
  "Tailwind CSS",
  "Material UI",
  "JWT Auth",
  "Sabre GDS",
  "Travelport GDS",
];

export default function TravelPlatformCaseStudy() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 lg:px-0 lg:py-24">
      <Link
        href="/#featured-projects"
        className="text-text-secondary hover:text-text-primary focus-visible:outline-ring mb-10 inline-flex items-center gap-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to projects
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="border-border bg-surface text-text-secondary rounded-full border px-3 py-1 font-mono text-xs">
          Production Platform @ Enspirit Technology Services
        </span>
        <span className="border-accent/40 bg-accent/10 text-accent rounded-full border px-3 py-1 font-mono text-xs font-medium">
          Sole Frontend Engineer
        </span>
      </div>

      <TextReveal
        as="h1"
        lines={["Event Travel Booking Platform"]}
        className="font-display text-text-primary text-4xl font-bold tracking-tight sm:text-5xl"
      />

      <p className="text-text-secondary mt-6 max-w-[64ch] text-lg leading-[1.65]">
        Served as the sole frontend developer within a 9–11 member engineering team on an
        invitation-based travel platform, building customer-facing interfaces for booking
        flights, hotels, and trains.
      </p>

      {/* Metrics Banner */}
      <div className="border-accent/30 bg-accent/5 my-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border p-5">
        <div className="flex items-center gap-3">
          <TrendingUp className="size-5 text-accent shrink-0" />
          <div>
            <p className="text-text-primary font-display text-lg font-bold">
              20–25% Search Render Speedup
            </p>
            <p className="text-text-secondary text-xs sm:text-sm">
              Achieved via route-based lazy loading, code splitting, and memoization on a Vite build.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-text-secondary font-mono text-xs">
          <Users className="size-3.5 text-accent" />
          9–11 Member Team
        </div>
      </div>

      <CaseStudySection index="Role & Scope" title="What I owned">
        <div className="space-y-4 text-text-secondary leading-relaxed">
          <p>
            As the sole frontend engineer on the platform, I owned the customer-facing booking experience
            end-to-end across three distinct travel verticals: flights, hotels, and trains.
          </p>
          <ul className="flex flex-col gap-2.5 mt-3">
            {[
              "Complete booking workflows: search, dynamic filtering, multi-passenger detail forms, fare rule validation, and checkout.",
              "End-to-end frontend authentication: login, JWT token handling, protected routes, and session persistence.",
              "Third-party GDS REST API integrations: collaborated with backend engineers to integrate Sabre and Travelport.",
              "Drive Stipend reimbursement workflow: engineered full feature flow translating business logic into guest-facing UI.",
              "Accessibility & Responsive UI: built WCAG-compliant, responsive layouts using Tailwind CSS and Material UI.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="size-4 shrink-0 text-accent mt-0.5" />
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CaseStudySection>

      <CaseStudySection index="Challenge" title="The engineering challenge">
        <p className="text-text-secondary leading-relaxed">
          Managing high volumes of asynchronous flight search results and disparate fare rule
          structures across Sabre and Travelport GDS APIs without degrading UI responsiveness.
          Each vertical required custom filtering models, complex multi-passenger state, and synchronized
          session expiration while keeping checkout reliable and tamper-proof.
        </p>
      </CaseStudySection>

      <CaseStudySection index="Architecture" title="System &amp; Data Flow">
        <ArchitectureDiagram />
      </CaseStudySection>

      <CaseStudySection index="Performance" title="Measured Performance Impact">
        <div className="border-border bg-surface/50 rounded-xl border p-6 text-sm leading-relaxed space-y-3">
          <div className="flex items-center gap-2 text-accent font-semibold">
            <TrendingUp className="size-4" />
            20–25% Faster Search-Results Rendering
          </div>
          <p className="text-text-secondary">
            By analyzing DOM repaint bottlenecks on heavy flight result sets, I introduced fine-grained
            component memoization with React.memo and useMemo, along with dynamic component imports
            and vendor chunk splitting on the Vite build. This eliminated jank during filter manipulation
            and accelerated time-to-interactive for booking guests.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection index="Tech Stack" title="Technologies used">
        <ul className="flex flex-wrap gap-2">
          {STACK.map((tech) => (
            <li
              key={tech}
              className="border-border bg-surface text-text-primary rounded-md border px-3 py-1 font-mono text-xs"
            >
              {tech}
            </li>
          ))}
        </ul>
      </CaseStudySection>
    </main>
  );
}
