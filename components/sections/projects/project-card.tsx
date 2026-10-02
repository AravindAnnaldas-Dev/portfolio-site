import { ArrowUpRight, CheckCircle2, Code2, ExternalLink, TrendingUp } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { type Project } from "@/lib/content/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={cn(
        "group border-border bg-surface/50 hover:border-accent/50 hover:bg-surface/90 hover:shadow-raised relative flex h-full flex-col justify-between rounded-xl border p-6 transition-all duration-300 sm:p-8",
      )}
    >
      <div>
        {/* Header: Title, Category & Metrics */}
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-text-primary group-hover:text-accent text-2xl font-bold tracking-tight transition-colors">
                {project.title}
              </h3>
            </div>
            <p className="text-text-secondary mt-1 font-mono text-xs">
              {project.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {project.metrics && (
              <span className="border-accent/40 bg-accent/10 text-accent inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-mono text-xs font-medium">
                <TrendingUp className="size-3" />
                {project.metrics}
              </span>
            )}
            <Badge variant="outline" className="border-border/80 font-mono text-xs">
              {project.statusLabel}
            </Badge>
          </div>
        </div>

        {/* Summary */}
        <p className="text-text-secondary mt-4 text-sm leading-relaxed sm:text-base">
          {project.summary}
        </p>

        {/* Key Engineering Details & Contributions */}
        <div className="mt-5 space-y-2">
          <p className="text-text-primary font-mono text-xs uppercase tracking-wider">
            Technical Details &amp; Contributions
          </p>
          <ul className="flex flex-col gap-2">
            {project.highlights.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="size-3.5 shrink-0 text-accent mt-0.5" />
                <span className="text-text-secondary leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-border/60">
        {/* Stack pills */}
        <ul className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="border-border bg-surface text-text-secondary rounded-sm border px-2.5 py-0.5 font-mono text-xs"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border bg-surface hover:bg-surface-raised hover:text-text-primary text-text-secondary inline-flex items-center gap-1.5 rounded-md border px-3.5 py-1.5 font-mono text-xs font-medium transition-colors"
            >
              <ExternalLink className="size-3.5" />
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border bg-surface hover:bg-surface-raised hover:text-text-primary text-text-secondary inline-flex items-center gap-1.5 rounded-md border px-3.5 py-1.5 font-mono text-xs font-medium transition-colors"
            >
              <Code2 className="size-3.5" />
              GitHub
            </a>
          )}

          {project.caseStudyHref && (
            <Link
              href={project.caseStudyHref}
              className="text-accent hover:text-accent-warm inline-flex items-center gap-1 font-mono text-xs font-semibold transition-colors"
            >
              Read Architecture Case Study
              <ArrowUpRight className="size-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
