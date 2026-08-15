"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Download, Github, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/components/portfolio/language-provider";
import { contactLinks, cvDocuments } from "@/lib/portfolio-data";

/** Presents Jared's positioning, proof points, and primary conversion actions. */
export function Hero() {
  const { copy, language } = useLanguage();
  const hero = copy.hero;
  const cvDocument = cvDocuments[language];
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <div className="container-shell hero-grid">
        <div className="hero-copy">
          <div className="hero-identity">
            <div className="hero-portrait-frame">
              <Image
                className="hero-portrait"
                src="/profile/jared-bautista.webp"
                alt={hero.portraitAlt}
                width={256}
                height={310}
                sizes="(max-width: 640px) 96px, 116px"
                priority
              />
            </div>
            <div className="hero-identity__copy">
              <div className="availability-pill">
                <span className="availability-pill__dot" aria-hidden="true" />
                {hero.availability}
              </div>
              <p className="eyebrow hero-eyebrow">
                <MapPin aria-hidden="true" /> {hero.location}
              </p>
            </div>
          </div>
          <h1 id="hero-title">
            {hero.title} <span>{hero.titleAccent}</span>
          </h1>
          <p className="hero-lead">
            {hero.lead}
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href="#proyectos">
              {hero.viewProjects} <ArrowDownRight aria-hidden="true" />
            </a>
            <a
              className="button button--secondary"
              href={cvDocument.href}
              download={cvDocument.filename}
            >
              <Download aria-hidden="true" /> {hero.downloadCv}
            </a>
            <a className="button button--secondary" href={contactLinks.email}>
              <Mail aria-hidden="true" /> {hero.email}
            </a>
            <a
              className="button button--ghost"
              href={contactLinks.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github aria-hidden="true" /> GitHub
            </a>
          </div>

          <dl className="hero-proof" aria-label={hero.proofLabel}>
            {hero.proofPoints.map((proof) => (
              <div key={proof.label}>
                <dt>{proof.value}</dt>
                <dd>{proof.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual" role="img" aria-label={hero.visualLabel}>
          <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
          <div className="code-window">
            <div className="code-window__bar">
              <div className="window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span>delivery.workflow.ts</span>
            </div>
            <div className="code-window__body" aria-hidden="true">
              <p><span className="code-purple">const</span> product = <span className="code-blue">define</span>({`{`}</p>
              <p className="code-indent">problem: <span className="code-string">&quot;real operations&quot;</span>,</p>
              <p className="code-indent">method: <span className="code-string">&quot;spec-driven&quot;</span>,</p>
              <p className="code-indent">quality: [<span className="code-string">&quot;clear&quot;</span>, <span className="code-string">&quot;reliable&quot;</span>],</p>
              <p>{`}`});</p>
              <p className="code-muted">{"// design → build → validate → ship"}</p>
              <p><span className="code-purple">await</span> <span className="code-blue">product</span>.deliver();</p>
            </div>
            <div className="code-window__footer">
              <span className="status-dot" aria-hidden="true" />
              {hero.buildVerified}
              <ArrowUpRight aria-hidden="true" />
            </div>
          </div>
          <div className="floating-note floating-note--top">
            <span>SDD</span>
            {hero.sddNote}
          </div>
          <div className="floating-note floating-note--bottom">
            <span>AI + Human</span>
            {hero.aiNote}
          </div>
        </div>
      </div>
    </section>
  );
}
