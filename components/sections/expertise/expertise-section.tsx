import { Reveal } from "@/components/motion/reveal";
import { ClusterFilter } from "@/components/sections/expertise/cluster-filter";

/** Technical Skills & Expertise — Categorized overview highlighting frontend depth & backend expansion. */
export function ExpertiseSection() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="border-border mx-auto w-full max-w-6xl scroll-mt-16 border-t px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <Reveal>
        <p className="text-text-secondary mb-4 font-mono text-sm tracking-wide uppercase">
          05 — Technical Skills &amp; Stack
        </p>
        <h2
          id="expertise-heading"
          className="font-display text-text-primary max-w-[50ch] text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Technologies, frameworks &amp; engineering toolkit.
        </h2>
        <p className="text-text-secondary mt-3 max-w-[64ch] text-base leading-relaxed sm:text-lg">
          Primary production expertise centered on React, Next.js, and TypeScript, complemented
          by active expansion into Node.js, Express.js, PostgreSQL, and Prisma ORM.
        </p>
      </Reveal>

      <div className="mt-12">
        <ClusterFilter />
      </div>
    </section>
  );
}
