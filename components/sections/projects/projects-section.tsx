import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/sections/projects/project-card";
import { projects } from "@/lib/content/projects";

/** Featured Projects — Production platforms and full-stack applications directly from the resume. */
export function ProjectsSection() {
  return (
    <section
      id="featured-projects"
      aria-labelledby="projects-heading"
      className="border-border mx-auto w-full max-w-6xl scroll-mt-16 border-t px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <Reveal>
        <p className="text-text-secondary mb-4 font-mono text-sm tracking-wide uppercase">
          04 — Featured Projects
        </p>
        <h2
          id="projects-heading"
          className="font-display text-text-primary max-w-[50ch] text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Selected projects &amp; engineering work.
        </h2>
        <p className="text-text-secondary mt-3 max-w-[64ch] text-base leading-relaxed sm:text-lg">
          A showcase of full-stack web applications and production platforms demonstrating
          algorithmic problem solving, performance tuning, and end-to-end component architectures.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-8 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} index={i} as="li" className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
