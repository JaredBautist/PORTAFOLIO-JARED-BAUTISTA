"use client";

import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/portfolio/language-provider";
import { contactLinks } from "@/lib/portfolio-data";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { copy } = useLanguage();
  const isDark = resolvedTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      className="nav-icon-button"
      onClick={() => setTheme(nextTheme)}
      aria-label={isDark ? copy.navigation.lightTheme : copy.navigation.darkTheme}
      title={isDark ? copy.navigation.lightThemeTitle : copy.navigation.darkThemeTitle}
    >
      {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </button>
  );
}

export function LanguageSelector() {
  const { copy, language, setLanguage } = useLanguage();
  return (
    <div className="language-selector" role="group" aria-label={copy.navigation.languageLabel}>
      <button
        type="button"
        lang="es"
        aria-label={copy.navigation.spanishLabel}
        aria-pressed={language === "es"}
        onClick={() => setLanguage("es")}
      >
        ES
      </button>
      <button
        type="button"
        lang="en"
        aria-label={copy.navigation.englishLabel}
        aria-pressed={language === "en"}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
    </div>
  );
}

/** Provides responsive section navigation and explicit theme controls. */
export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { copy } = useLanguage();
  const navigationItems = copy.navigation.items;

  return (
    <header className="site-header">
      <nav className="site-nav container-shell" aria-label={copy.navigation.label}>
        <a className="brand-mark" href="#inicio" aria-label={copy.navigation.homeLabel}>
          <span aria-hidden="true">JB</span>
          <span className="brand-mark__text">Jared Bautista</span>
        </a>

        <div className="desktop-nav">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <LanguageSelector />
          <ThemeToggle />
          <a className="button button--small button--primary desktop-contact" href={contactLinks.email}>
            {copy.navigation.talk}
          </a>
          <button
            type="button"
            className="nav-icon-button mobile-menu-button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? copy.navigation.closeMenu : copy.navigation.openMenu}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? "is-open" : ""}`}>
        <div className="container-shell mobile-nav__inner">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="button button--primary" href={contactLinks.email} onClick={() => setMenuOpen(false)}>
            {copy.navigation.talk}
          </a>
        </div>
      </div>
    </header>
  );
}
