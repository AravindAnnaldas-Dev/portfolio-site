import { FloatingChip } from "@/components/sections/hero/floating-chip";

/**
 * Static dot-grid + drifting code fragments. Pure CSS background
 * image for the grid — cursor-reactive warp is handled by CursorSpotlight.
 */
export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={
          {
            backgroundImage:
              "radial-gradient(color-mix(in oklch, var(--text-secondary) 40%, transparent) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 90%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 90%)",
          } as React.CSSProperties
        }
      />

      <FloatingChip
        label="React.js / Next.js / TypeScript"
        className="top-[14%] left-[6%] hidden sm:block"
        delay={0}
      />
      <FloatingChip
        label="useQuery({ queryKey: ['flights'] })"
        className="top-[22%] right-[10%] hidden md:block"
        delay={1.4}
      />
      <FloatingChip
        label="<ProtectedRoute auth={jwt} />"
        className="top-[68%] left-[8%] hidden sm:block"
        delay={2.1}
      />
      <FloatingChip
        label="Node.js · Express · PostgreSQL · Prisma"
        className="top-[72%] right-[8%] hidden lg:block"
        delay={0.8}
      />
      <FloatingChip
        label="20–25% Search Render Optimization"
        className="top-[45%] right-[4%] hidden xl:block"
        delay={1.8}
      />
    </div>
  );
}
