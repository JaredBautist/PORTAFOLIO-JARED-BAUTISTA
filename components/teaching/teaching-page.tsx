"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Calculator,
  Check,
  Languages,
  MessageCircle,
  Route,
  Target,
} from "lucide-react";
import { useLanguage } from "@/components/portfolio/language-provider";
import { LanguageSelector, ThemeToggle } from "@/components/portfolio/navigation";
import { Reveal } from "@/components/portfolio/reveal";
import { getTeachingWhatsAppUrl, teachingContent } from "@/lib/teaching-content";
import styles from "./teaching-page.module.css";

const methodologyIcons = [Target, BookOpenCheck, BrainCircuit] as const;

/** Presents Jared's private teaching methodology and converts interest to WhatsApp. */
export function TeachingPage() {
  const { language } = useLanguage();
  const copy = teachingContent[language];
  const whatsappUrl = getTeachingWhatsAppUrl(language);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.navigation} aria-label={copy.navigation.label}>
          <Link className={styles.backLink} href="/">
            <ArrowLeft aria-hidden="true" />
            <span>{copy.navigation.back}</span>
          </Link>
          <div className={styles.controls}>
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main id="main">
        <section className={styles.hero} aria-labelledby="teaching-title">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{copy.hero.eyebrow}</p>
              <h1 id="teaching-title">
                {copy.hero.title} <span>{copy.hero.titleAccent}</span>
              </h1>
              <p className={styles.heroLead}>{copy.hero.description}</p>
              <div className={styles.experienceBadge}>
                <span className={styles.experienceIcon} aria-hidden="true">
                  <BriefcaseBusiness />
                </span>
                <div>
                  <strong>{copy.hero.experience.value}</strong>
                  <span>{copy.hero.experience.detail}</span>
                </div>
              </div>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" /> {copy.hero.whatsapp}
                </a>
                <a className={styles.secondaryButton} href="#metodologia">
                  {copy.hero.methodology} <ArrowRight aria-hidden="true" />
                </a>
              </div>
              <ul className={styles.tagList} aria-label={copy.hero.eyebrow}>
                {copy.hero.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.portraitCard}>
                <div className={styles.portraitBackdrop} aria-hidden="true" />
                <Image
                  className={styles.portrait}
                  src="/profile/jared-bautista.webp"
                  alt={copy.hero.portraitAlt}
                  width={256}
                  height={310}
                  sizes="(max-width: 900px) 180px, 210px"
                  priority
                />
                <div className={styles.portraitCaption}>
                  <strong>Jared Bautista</strong>
                  <span>{copy.hero.eyebrow}</span>
                </div>
              </div>
              <div className={`${styles.subjectNote} ${styles.mathNote}`} aria-hidden="true">
                <Calculator />
                <span>f(x) = ax + b</span>
              </div>
              <div className={`${styles.subjectNote} ${styles.englishNote}`} aria-hidden="true">
                <Languages />
                <span>Understand · Practice · Speak</span>
              </div>
              <div className={`${styles.subjectNote} ${styles.aiNote}`} aria-hidden="true">
                <BrainCircuit />
                <span>AI → Autonomy</span>
              </div>
            </div>
          </div>
        </section>

        <section id="metodologia" className={styles.section} aria-labelledby="methodology-title">
          <div className={styles.container}>
            <Reveal>
              <div className={styles.sectionHeading}>
                <p className={styles.eyebrow}>{copy.methodology.eyebrow}</p>
                <h2 id="methodology-title">{copy.methodology.title}</h2>
                <p>{copy.methodology.description}</p>
              </div>
            </Reveal>
            <div className={styles.methodologyGrid}>
              {copy.methodology.cards.map((card, index) => {
                const Icon = methodologyIcons[index];
                return (
                  <Reveal key={card.label} delay={index * 70} className={styles.methodCard}>
                    <span className={styles.cardIcon} aria-hidden="true"><Icon /></span>
                    <p className={styles.cardLabel}>{card.label}</p>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </Reveal>
                );
              })}
            </div>

            <Reveal className={styles.aiPrinciple}>
              <span className={styles.aiPrincipleIcon} aria-hidden="true"><BrainCircuit /></span>
              <div>
                <p className={styles.cardLabel}>{copy.ai.label}</p>
                <h3>{copy.ai.title}</h3>
                <p>{copy.ai.description}</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className={`${styles.section} ${styles.tintedSection}`} aria-labelledby="services-title">
          <div className={styles.container}>
            <Reveal>
              <div className={styles.sectionHeading}>
                <p className={styles.eyebrow}>{copy.services.eyebrow}</p>
                <h2 id="services-title">{copy.services.title}</h2>
                <p>{copy.services.description}</p>
              </div>
            </Reveal>
            <div className={styles.servicesGrid}>
              {[{ content: copy.services.math, icon: Calculator, kind: "math" }, { content: copy.services.english, icon: Languages, kind: "english" }].map((service, index) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.kind} delay={index * 80} className={`${styles.serviceCard} ${service.kind === "math" ? styles.mathCard : styles.englishCard}`}>
                    <span className={styles.serviceIcon} aria-hidden="true"><Icon /></span>
                    <h3>{service.content.title}</h3>
                    <p>{service.content.description}</p>
                    <ul>
                      {service.content.items.map((item) => (
                        <li key={item}><Check aria-hidden="true" /> {item}</li>
                      ))}
                    </ul>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="process-title">
          <div className={styles.container}>
            <Reveal>
              <div className={`${styles.sectionHeading} ${styles.centerHeading}`}>
                <p className={styles.eyebrow}>{copy.process.eyebrow}</p>
                <h2 id="process-title">{copy.process.title}</h2>
                <p>{copy.process.description}</p>
              </div>
            </Reveal>
            <ol className={styles.processGrid}>
              {copy.process.steps.map((step, index) => (
                <li key={step.title}>
                  <Reveal delay={index * 60} className={styles.processCard}>
                    <span className={styles.processNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <Route aria-hidden="true" />
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.contactSection} aria-labelledby="teaching-contact-title">
          <div className={styles.container}>
            <Reveal className={styles.contactCard}>
              <div>
                <p className={styles.eyebrow}>{copy.contact.eyebrow}</p>
                <h2 id="teaching-contact-title">{copy.contact.title}</h2>
                <p>{copy.contact.description}</p>
              </div>
              <a className={styles.whatsappButton} href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" /> {copy.contact.button}
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <Link href="/"><ArrowLeft aria-hidden="true" /> {copy.footer}</Link>
          <p>© {new Date().getFullYear()} Jared Bautista</p>
        </div>
      </footer>
    </div>
  );
}
