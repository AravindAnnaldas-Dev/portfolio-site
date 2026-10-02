"use client";

import { motion } from "framer-motion";
import { Check, Copy, Sparkles, Terminal } from "lucide-react";
import { useState } from "react";

import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

export function HeroInteractiveCard() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"ts" | "cli">("ts");
  const reducedMotion = useReducedMotion();

  const codeSnippet = `const developer = {
  name: "Aravind Annaldas",
  role: "Frontend Developer",
  core: ["React", "Next.js", "TypeScript"],
  expanding: ["Node.js", "PostgreSQL", "Prisma"],
  metrics: "20–25% search render speedup",
  status: "Available for opportunities"
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
      animate={reducedMotion ? false : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full max-w-lg lg:max-w-none"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="bg-accent/15 absolute -inset-1 rounded-2xl blur-xl opacity-60 transition-opacity duration-500 group-hover:opacity-90"
      />

      {/* Terminal Container */}
      <div className="border-border bg-surface/90 shadow-raised relative overflow-hidden rounded-xl border backdrop-blur-xl transition-all duration-300 group-hover:border-accent/40">
        {/* Terminal Header */}
        <div className="border-border/80 bg-surface-raised/80 flex items-center justify-between border-b px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-[#ff5f56]/80 inline-block" />
            <span className="size-3 rounded-full bg-[#ffbd2e]/80 inline-block" />
            <span className="size-3 rounded-full bg-[#27c93f]/80 inline-block" />

            <div className="ml-3 flex items-center gap-1 font-mono text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("ts")}
                className={`rounded px-2 py-0.5 transition-colors ${
                  activeTab === "ts"
                    ? "bg-surface text-accent font-medium shadow-xs"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                profile.ts
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("cli")}
                className={`rounded px-2 py-0.5 transition-colors ${
                  activeTab === "cli"
                    ? "bg-surface text-accent font-medium shadow-xs"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                terminal
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? "Copied" : "Copy code"}
            className="border-border/60 bg-surface/60 hover:bg-surface text-text-secondary hover:text-text-primary inline-flex items-center gap-1.5 rounded-md border px-2 py-1 font-mono text-[11px] transition-colors"
          >
            {copied ? (
              <>
                <Check className="size-3 text-accent" />
                <span className="text-accent">Copied</span>
              </>
            ) : (
              <>
                <Copy className="size-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[260px] flex flex-col justify-between">
          {activeTab === "ts" ? (
            <div className="space-y-1">
              <p className="text-text-secondary">
                <span className="text-[#e5c07b]">const</span>{" "}
                <span className="text-accent font-medium">developer</span>{" "}
                <span className="text-text-primary">=</span> &#123;
              </p>
              <p className="pl-4 text-text-secondary">
                <span className="text-text-primary">name:</span>{" "}
                <span className="text-[#98c379]">&quot;Aravind Annaldas&quot;</span>,
              </p>
              <p className="pl-4 text-text-secondary">
                <span className="text-text-primary">role:</span>{" "}
                <span className="text-[#98c379]">&quot;Frontend Developer&quot;</span>,
              </p>
              <p className="pl-4 text-text-secondary">
                <span className="text-text-primary">tenure:</span>{" "}
                <span className="text-[#98c379]">&quot;3 Years Production Experience&quot;</span>,
              </p>
              <p className="pl-4 text-text-secondary">
                <span className="text-text-primary">coreStack:</span> [
                <span className="text-[#98c379]">&quot;React&quot;</span>,{" "}
                <span className="text-[#98c379]">&quot;Next.js&quot;</span>,{" "}
                <span className="text-[#98c379]">&quot;TypeScript&quot;</span>],
              </p>
              <p className="pl-4 text-text-secondary">
                <span className="text-accent-warm font-medium">backendExpansion:</span> [
                <span className="text-accent-warm">&quot;Node.js&quot;</span>,{" "}
                <span className="text-accent-warm">&quot;Express&quot;</span>,{" "}
                <span className="text-accent-warm">&quot;PostgreSQL&quot;</span>,{" "}
                <span className="text-accent-warm">&quot;Prisma&quot;</span>],
              </p>
              <p className="pl-4 text-text-secondary">
                <span className="text-text-primary">highlight:</span>{" "}
                <span className="text-accent font-medium">&quot;20–25% search render speedup&quot;</span>,
              </p>
              <p className="pl-4 text-text-secondary">
                <span className="text-text-primary">availableForWork:</span>{" "}
                <span className="text-[#e5c07b]">true</span>
              </p>
              <p className="text-text-secondary">&#125;;</p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-text-secondary flex items-center gap-2">
                <Terminal className="size-3.5 text-accent" />
                <span className="text-text-primary">aravind --status</span>
              </p>
              <div className="border-border/60 bg-surface/50 rounded-md border p-3 space-y-1.5 text-[12px]">
                <p className="text-accent font-medium">✔ Ready for Frontend &amp; Full-Stack Roles</p>
                <p className="text-text-secondary">⚡ Hyderabad, Telangana, India</p>
                <p className="text-text-secondary">🚀 Invitation-Based Travel Platform (Sole Frontend)</p>
                <p className="text-text-secondary">📦 Splitzy · Product Explorer · Portfolio Builder</p>
              </div>
              <p className="text-text-secondary flex items-center gap-2 pt-2">
                <span className="text-accent">$</span>
                <span className="animate-pulse">contact --email annaldasaravind897@gmail.com</span>
              </p>
            </div>
          )}

          {/* Footer badge */}
          <div className="border-border/40 mt-4 border-t pt-3 flex items-center justify-between text-[11px] text-text-secondary">
            <span className="flex items-center gap-1.5">
              <Sparkles className="size-3 text-accent" />
              Interactive profile card
            </span>
            <span className="text-accent">TypeScript 5 • Next.js 16</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

