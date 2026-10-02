import "./globals.css";

import type { Metadata } from "next";
import { Geist, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Nav } from "@/components/layout/nav";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SITE_URL } from "@/lib/seo";
import { themeInitScript } from "@/lib/theme/theme-script";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aravind Annaldas | Frontend Developer & Software Engineer",
    template: "%s | Aravind Annaldas",
  },
  description:
    "Frontend Developer with 3 years of experience building production web applications using React, Next.js, TypeScript, and JavaScript. Sole frontend engineer on an enterprise travel platform, expanding into backend engineering with Node.js, Express, PostgreSQL, and Prisma.",
  keywords: [
    "Aravind Annaldas",
    "Frontend Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma ORM",
    "Hyderabad",
  ],
  authors: [{ name: "Aravind Annaldas" }],
  creator: "Aravind Annaldas",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Aravind Annaldas | Frontend Developer & Software Engineer",
    description:
      "Frontend Developer with 3 years of experience building production web applications using React, Next.js, TypeScript, and JavaScript. Expanding into backend engineering with Node.js, Express.js, PostgreSQL, and Prisma.",
    siteName: "Aravind Annaldas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aravind Annaldas | Frontend Developer & Software Engineer",
    description:
      "Frontend Developer with 3 years of experience building production web applications using React, Next.js, TypeScript, and JavaScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aravind Annaldas",
  jobTitle: "Frontend Developer",
  url: SITE_URL,
  email: "mailto:annaldasaravind897@gmail.com",
  telephone: "+91-9963213997",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "India",
  },
  sameAs: [
    "https://www.linkedin.com/in/aravindannaldas/",
    "https://github.com/AravindAnnaldas-Dev",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Vidya Jyothi Institute of Technology",
  },
  worksFor: {
    "@type": "Organization",
    name: "Enspirit Technology Services Pvt. Ltd.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hankenGrotesk.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Blocking, pre-hydration: prevents a flash of the wrong theme (§8) */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript() }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <SmoothScrollProvider>
            <Nav />
            {children}
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
