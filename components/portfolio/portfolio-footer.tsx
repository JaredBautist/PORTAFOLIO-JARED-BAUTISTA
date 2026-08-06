"use client";

import { useLanguage } from "@/components/portfolio/language-provider";

/** Renders localized footer copy and a return-to-top action. */
export function PortfolioFooter() {
  const { copy } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="container-shell site-footer__inner">
        <p>© {new Date().getFullYear()} Jared Bautista</p>
        <p>{copy.footer.crafted}</p>
        <a href="#inicio">{copy.footer.backToTop}</a>
      </div>
    </footer>
  );
}
