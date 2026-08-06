"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/components/portfolio/language-provider";

/** Provides the class-based color theme used by the portfolio. */
export function PortfolioProviders({ children }: { readonly children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
