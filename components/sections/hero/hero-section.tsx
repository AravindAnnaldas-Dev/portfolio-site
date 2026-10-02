"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { CursorSpotlight } from "@/components/motion/cursor-spotlight";
import { Magnetic } from "@/components/motion/magnetic";
import { TextReveal } from "@/components/motion/text-reveal";
import { HeroBackground } from "@/components/sections/hero/hero-background";
import { HeroInteractiveCard } from "@/components/sections/hero/hero-interactive-card";
import { ScrollCue } from "@/components/sections/hero/scroll-cue";
import { ResumePreview } from "@/components/shared/resume-preview";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/content/contact";
import { useHashLinkClick } from "@/lib/hooks/use-hash-link-click";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

const TECH_PILLS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
];

/**
 * Hero — Modern, visually captivating entrance with bold typography,
 * interactive code terminal widget, and minimal text clutter.
 */
export function HeroSection() {
  const onHashClick = useHashLinkClick();
  const reducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.08,
        delayChildren: reducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <CursorSpotlight
      className="relative flex min-h-dvh flex-col justify-center py-20"
      color="var(--accent)"
    >
      <HeroBackground />

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column: Bold Typography & Primary Actions */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col"
          >
            {/* Minimalist Status Badge */}
            <motion.div
              variants={itemVariants}
              className="mb-6 flex items-center gap-3"
            >
              <div className="border-border bg-surface/80 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 backdrop-blur-md">
                <span className="relative flex size-2">
                  <span className="bg-accent absolute inline-flex size-full animate-ping rounded-full opacity-75" />
                  <span className="bg-accent relative inline-flex size-2 rounded-full" />
                </span>
                <span className="text-text-secondary font-mono text-xs tracking-wide">
                  Frontend Developer • Hyderabad, India
                </span>
              </div>
            </motion.div>

            {/* Confident Name */}
            <TextReveal
              as="h1"
              lines={["Aravind Annaldas"]}
              className="font-display text-text-primary text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl lg:text-6xl"
            />

            {/* Single punchy tagline */}
            <motion.p
              variants={itemVariants}
              className="text-text-secondary mt-5 max-w-xl text-base leading-[1.65] sm:text-lg font-normal"
            >
              I build fast, accessible interfaces with{" "}
              <span className="text-text-primary font-medium">
                React, Next.js, and TypeScript
              </span>
              , from complex booking flows to full-stack side projects.
            </motion.p>

            {/* Tech Badges Row */}
            {/* <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap gap-2"
            >
              {TECH_PILLS.map((tech) => (
                <span
                  key={tech}
                  className="border-border/80 bg-surface/60 text-text-secondary rounded-md border px-2.5 py-1 font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </motion.div> */}

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <Button
                  render={
                    <Link
                      href="#featured-projects"
                      onClick={onHashClick("#featured-projects")}
                    />
                  }
                  nativeButton={false}
                  size="lg"
                  className="gap-2 text-sm font-medium"
                >
                  View Work
                  <ArrowDown className="size-4" />
                </Button>
              </Magnetic>

              <ResumePreview variant="outline" />

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary inline-flex items-center gap-1 font-mono text-xs transition-colors p-2"
                >
                  GitHub
                  <ArrowUpRight className="size-3.5" />
                </a>

                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary inline-flex items-center gap-1 font-mono text-xs transition-colors p-2"
                >
                  LinkedIn
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="flex justify-center lg:justify-end">
            <HeroInteractiveCard />
          </div>
        </div>
      </div>

      <ScrollCue />
    </CursorSpotlight>
  );
}
