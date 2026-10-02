"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState } from "react";

import { type SkillCluster, skillClusters, skills } from "@/lib/content/skills";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function ClusterFilter() {
  const [active, setActive] = useState<SkillCluster | "all">("all");
  const reducedMotion = useReducedMotion();

  const visible = skills.filter(
    (skill) => active === "all" || skill.cluster === active,
  );

  return (
    <div>
      {/* Category Filter Pills */}
      <div
        role="group"
        aria-label="Filter skills by category"
        className="flex flex-wrap gap-2"
      >
        {skillClusters.map(({ key, label }) => {
          const count =
            key === "all"
              ? skills.length
              : skills.filter((s) => s.cluster === key).length;
          const isSelected = active === key;

          return (
            <button
              key={key}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setActive(key)}
              className={cn(
                "group border-border relative flex items-center gap-1.5 rounded-full border px-4 py-1.5 font-mono text-xs transition-all duration-200",
                "focus-visible:outline-ring focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                isSelected
                  ? "bg-text-primary text-bg font-semibold shadow-ambient border-transparent"
                  : "bg-surface/60 text-text-secondary hover:border-border/80 hover:text-text-primary",
              )}
            >
              <span>{label}</span>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.2 font-mono text-[10px]",
                  isSelected
                    ? "bg-bg/20 text-bg"
                    : "bg-surface-raised text-text-secondary group-hover:text-text-primary",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Legend / Context Note */}
      <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-text-secondary">
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-accent" />
          Frontend &amp; Production Core
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-accent-warm" />
          Backend &amp; Database Expansion
        </span>
      </div>

      {/* Skills Grid */}
      <motion.ul
        layout={!reducedMotion}
        className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      >
        {visible.map((skill) => {
          const isExpansion = skill.isBackendExpansion;

          return (
            <motion.li
              key={skill.name}
              layout={!reducedMotion}
              initial={reducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
              animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
              exit={reducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "group relative flex flex-col justify-between rounded-lg border p-3.5 transition-all duration-200 hover:-translate-y-0.5",
                isExpansion
                  ? "border-accent-warm/40 bg-accent-warm/5 hover:border-accent-warm hover:shadow-[0_0_12px_rgba(245,199,126,0.15)]"
                  : "border-border bg-surface/60 hover:border-accent/50 hover:bg-surface hover:shadow-ambient",
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-mono text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                  {skill.name}
                </span>
                {isExpansion && (
                  <Sparkles className="size-3 text-accent-warm shrink-0 mt-0.5" />
                )}
              </div>

              {skill.status ? (
                <p className="mt-2 text-[11px] text-text-secondary leading-snug line-clamp-2">
                  {skill.status}
                </p>
              ) : (
                <span className="mt-2 font-mono text-[10px] text-text-secondary uppercase tracking-wider">
                  {skill.cluster}
                </span>
              )}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}
