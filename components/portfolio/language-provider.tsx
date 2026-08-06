"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { translations, type Language, type PortfolioCopy } from "@/lib/i18n";

interface LanguageContextValue {
  readonly language: Language;
  readonly copy: PortfolioCopy;
  readonly setLanguage: (language: Language) => void;
}

const STORAGE_KEY = "jared-portfolio-language";
const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Provides typed portfolio translations and persists the visitor's locale preference. */
export function LanguageProvider({ children }: { readonly children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    if (storedLanguage === "en") {
      queueMicrotask(() => setLanguageState("en"));
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ language, copy: translations[language], setLanguage }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/** Returns the current locale, copy dictionary, and locale setter. */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
