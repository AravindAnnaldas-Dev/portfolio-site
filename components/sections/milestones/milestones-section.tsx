import { Briefcase, GraduationCap, Sparkles } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { milestones } from "@/lib/content/milestones";

const ICONS = {
  education: GraduationCap,
  experience: Briefcase,
  learning: Sparkles,
};

export function MilestonesSection() {
  return (
    <section
      id="milestones"
      aria-labelledby="milestones-heading"
      className="border-border mx-auto w-full max-w-6xl scroll-mt-16 border-t px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <Reveal>
        <p className="text-text-secondary mb-4 font-mono text-sm tracking-wide uppercase">
          06 — Career Milestones &amp; Education
        </p>
        <h2
          id="milestones-heading"
          className="font-display text-text-primary max-w-[50ch] text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Education &amp; engineering journey.
        </h2>
        <p className="text-text-secondary mt-3 max-w-[64ch] text-base leading-relaxed sm:text-lg">
          Key milestones spanning academic foundations in engineering to production software development.
        </p>
      </Reveal>

      <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {milestones.map((item, i) => {
          const Icon = ICONS[item.category] || Briefcase;

          return (
            <Reveal key={item.title} index={i} as="div" className="h-full">
              <div className="border-border bg-surface/50 hover:border-accent/40 hover:bg-surface/80 flex h-full flex-col justify-between rounded-xl border p-6 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-accent font-mono text-xs font-semibold">
                      {item.period}
                    </span>
                    <div className="border-border bg-surface rounded-md border p-1.5 text-text-secondary">
                      <Icon className="size-3.5" />
                    </div>
                  </div>

                  <h3 className="font-display text-text-primary mt-3 text-base font-bold">
                    {item.title}
                  </h3>

                  <p className="text-text-secondary mt-2 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
