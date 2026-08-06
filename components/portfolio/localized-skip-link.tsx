"use client";

import { useLanguage } from "@/components/portfolio/language-provider";

/** Provides a localized keyboard shortcut to the main portfolio content. */
export function LocalizedSkipLink() {
  const { copy } = useLanguage();
  return <a className="skip-link" href="#main">{copy.skipLink}</a>;
}
