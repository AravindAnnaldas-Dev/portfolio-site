"use client";

import { CheckCircle2, TrendingUp, Users } from "lucide-react";
import { useRef } from "react";

import { Reveal } from "@/components/motion/reveal";
import { type ExperienceEntry } from "@/lib/content/experience";
import { useScrollProgressLine } from "@/lib/hooks/use-scroll-progress-line";

export function ExperienceTimeline({ entry }: { entry: ExperienceEntry }) {
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollProgressLine(containerRef);

  return (
    <div
      ref={containerRef}
      className="relative grid gap-8 sm:grid-cols-[auto_1fr] sm:gap-10"
      style={{ "--progress": 0 } as React.CSSProperties}
    >
      {/* Scroll-tied progress line */}
      <div
        aria-hidden
        className="bg-border relative hidden w-px self-stretch sm:block"
      >
        <div
          className="bg-accent absolute top-0 left-0 w-full origin-top"
          style={{
            height: "100%",
            transform: "scaleY(var(--progress, 0))",
          }}
        />
        <div className="border-border bg-surface absolute top-2 -left-1.5 size-3.5 rounded-full border-2" />
      </div>

      <div className="border-border bg-surface/40 hover:border-border/80 rounded-xl border p-6 transition-colors sm:p-8">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
          <div>
            <h3 className="font-display text-text-primary text-2xl font-bold tracking-tight">
              {entry.role}
            </h3>
            <p className="text-text-primary mt-1 font-mono text-base font-medium">
              {entry.company}
            </p>
          </div>

          <div className="flex flex-col sm:items-end">
            <span className="text-accent font-mono text-sm font-medium">
              {entry.formattedPeriod}
            </span>
            <span className="text-text-secondary font-mono text-xs">
              {entry.location}
            </span>
          </div>
        </div>

        {/* Badges strip: team context & metrics */}
        <div className="mt-4 flex flex-wrap gap-2.5">
          {entry.teamContext && (
            <span className="border-border bg-surface text-text-secondary inline-flex items-center gap-1.5 rounded-md border px-3 py-1 font-mono text-xs">
              <Users className="size-3 text-accent" />
              {entry.teamContext}
            </span>
          )}
          {entry.metrics && (
            <span className="border-accent/40 bg-accent/10 text-accent inline-flex items-center gap-1.5 rounded-md border px-3 py-1 font-mono text-xs font-medium">
              <TrendingUp className="size-3" />
              {entry.metrics}
            </span>
          )}
        </div>

        {/* Story beats / responsibilities */}
        <ul className="mt-6 flex flex-col gap-3.5">
          {entry.storyBeats.map((beat, i) => (
            <Reveal key={beat} index={i} as="li" className="flex items-start gap-3">
              <CheckCircle2 className="size-4 shrink-0 text-accent/80 mt-1" />
              <p className="text-text-secondary hover:text-text-primary leading-[1.65] text-sm sm:text-base transition-colors">
                {beat}
              </p>
            </Reveal>
          ))}
        </ul>

        {/* Tech stack pills */}
        <div className="border-border/60 mt-8 border-t pt-5">
          <p className="text-text-secondary mb-3 font-mono text-xs uppercase tracking-wider">
            Technologies &amp; Frameworks
          </p>
          <div className="flex flex-wrap gap-2">
            {entry.techStack.map((tech) => (
              <span
                key={tech}
                className="border-border bg-surface text-text-secondary rounded-sm border px-2.5 py-1 font-mono text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
