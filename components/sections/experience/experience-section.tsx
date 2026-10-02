import { Reveal } from "@/components/motion/reveal";
import { ExperienceTimeline } from "@/components/sections/experience/experience-timeline";
import { experience } from "@/lib/content/experience";

/** Experience Section — Engineering roles, owned responsibilities, and measurable impact. */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-border mx-auto w-full max-w-6xl scroll-mt-16 border-t px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <Reveal>
        <p className="text-text-secondary mb-4 font-mono text-sm tracking-wide uppercase">
          02 — Professional Experience
        </p>
        <h2
          id="experience-heading"
          className="font-display text-text-primary max-w-[50ch] text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Production engineering experience &amp; ownership.
        </h2>
        <p className="text-text-secondary mt-3 max-w-[64ch] text-base leading-relaxed sm:text-lg">
          Proven history building production web applications, from owning multi-vertical
          booking workflows as sole frontend developer to integrating complex third-party GDS APIs.
        </p>
      </Reveal>

      <div className="mt-12 flex flex-col gap-16">
        {experience.map((entry) => (
          <ExperienceTimeline key={entry.company} entry={entry} />
        ))}
      </div>
    </section>
  );
}
