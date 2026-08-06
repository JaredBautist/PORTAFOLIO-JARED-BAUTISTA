import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LocalizedSkipLink } from "@/components/portfolio/localized-skip-link";
import { PortfolioProviders } from "@/components/portfolio/providers";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sans = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const deploymentUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(deploymentUrl),
  title: {
    default: "Jared Bautista | Full-Stack Software Engineer",
    template: "%s | Jared Bautista",
  },
  description:
    "Portafolio de Jared Bautista: software full-stack, productos web desplegados, automatización operativa, arquitectura limpia e ingeniería asistida por IA.",
  keywords: [
    "Jared Bautista",
    "Full-Stack Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "NestJS",
    "Colombia",
    "Specification-Driven Development",
  ],
  authors: [{ name: "Jared Bautista", url: "https://github.com/JaredBautist" }],
  creator: "Jared Bautista",
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: "Jared Bautista | Full-Stack Software Engineer",
    description: "Productos desplegados, arquitectura de software y automatización aplicada a problemas reales.",
    siteName: "Jared Bautista Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jared Bautista | Full-Stack Software Engineer",
    description: "Productos desplegados, arquitectura de software y automatización aplicada a problemas reales.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${display.variable} ${sans.variable} font-sans`}>
        <PortfolioProviders>
          <LocalizedSkipLink />
          {children}
        </PortfolioProviders>
      </body>
    </html>
  );
}
