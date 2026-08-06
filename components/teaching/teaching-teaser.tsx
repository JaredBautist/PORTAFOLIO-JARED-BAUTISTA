"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { useLanguage } from "@/components/portfolio/language-provider";
import { teachingContent } from "@/lib/teaching-content";
import styles from "./teaching-teaser.module.css";

/** Introduces teaching as a deliberately secondary professional facet. */
export function TeachingTeaser() {
  const { language } = useLanguage();
  const copy = teachingContent[language].teaser;

  return (
    <aside className={styles.section} aria-labelledby="teaching-teaser-title">
      <div className={`container-shell ${styles.card}`}>
        <span className={styles.icon} aria-hidden="true"><BookOpen /></span>
        <div className={styles.copy}>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="teaching-teaser-title">{copy.title}</h2>
          <p>{copy.description}</p>
        </div>
        <Link className={styles.link} href="/docencia">
          {copy.link} <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}
