import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/sections/contact/contact-form";
import { ResumePreview } from "@/components/shared/resume-preview";
import { contact } from "@/lib/content/contact";

const CHANNELS = [
  { label: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: contact.phone, href: `tel:${contact.phone}`, icon: Phone },
  { label: "Hyderabad, Telangana, India", href: "https://maps.google.com/?q=Hyderabad,+Telangana,+India", icon: MapPin },
  { label: "linkedin.com/in/aravindannaldas", href: contact.linkedin, icon: ExternalLink },
  { label: "github.com/AravindAnnaldas-Dev", href: contact.github, icon: ExternalLink },
];

/** Contact Section — Inquiries, direct contact channels, location, and resume preview. */
export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-border mx-auto w-full max-w-6xl scroll-mt-16 border-t px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div>
        <p className="text-text-secondary mb-4 font-mono text-sm tracking-wide uppercase">
          07 — Get In Touch
        </p>
        <h2
          id="contact-heading"
          className="font-display text-text-primary max-w-[40ch] text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Let&apos;s build something exceptional together.
        </h2>
        <p className="text-text-secondary mt-3 max-w-[64ch] text-base leading-relaxed sm:text-lg">
          I am actively exploring frontend and full-stack engineering opportunities.
          Whether you have an opening, a technical query, or want to discuss my projects—reach out!
        </p>

        <div className="relative mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="border-border bg-surface/50 shadow-ambient rounded-xl border p-6 sm:p-8 backdrop-blur-sm">
            <ContactForm />
          </div>

          <div className="border-border bg-surface/50 shadow-ambient flex flex-col justify-between rounded-xl border p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex flex-col gap-6">

              <ul className="flex flex-col gap-3.5">
                {CHANNELS.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-text-secondary hover:text-text-primary focus-visible:outline-ring inline-flex items-center gap-2.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      <Icon className="size-4 text-accent shrink-0" aria-hidden />
                      <span className="break-all">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-border/60 mt-8 border-t pt-6">
              <p className="text-text-secondary mb-3 font-mono text-xs">
                Need a copy of my resume for your records?
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <ResumePreview variant="secondary" />
                <a
                  href={contact.resumeHref}
                  download="Aravind_Annaldas_Frontend_Developer.pdf"
                  className="border-border bg-surface hover:bg-surface-raised hover:text-text-primary text-text-secondary inline-flex items-center gap-1.5 rounded-md border px-4 py-2 font-mono text-xs font-medium transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
