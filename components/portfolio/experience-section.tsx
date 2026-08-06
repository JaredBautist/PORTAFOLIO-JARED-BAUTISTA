"use client";

import { Check, Database, ShieldCheck, Stethoscope, Wrench } from "lucide-react";
import { useLanguage } from "@/components/portfolio/language-provider";
import { getExperience } from "@/lib/portfolio-localization";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";

const focusIcons = [Wrench, Database, Stethoscope] as const;

/** Communicates clinical-domain experience while preserving confidentiality boundaries. */
export function ExperienceSection() {
  const { copy, language } = useLanguage();
  const [entry] = getExperience(language);
  const experienceCopy = copy.experience;

  return (
    <section id="experiencia" className="section-block section-block--tinted" aria-labelledby="experience-title">
      <div className="container-shell">
        <Reveal>
          <div>
            <SectionHeading
              id="experience-title"
              eyebrow={experienceCopy.eyebrow}
              title={experienceCopy.title}
              description={experienceCopy.description}
            />
          </div>
        </Reveal>

        <div className="experience-layout">
          <Reveal className="experience-card">
            <div className="experience-card__header">
              <div className="experience-logo" aria-hidden="true">CSJ</div>
              <div>
                <p className="experience-card__organization">{entry.organization}</p>
                <h3>{entry.role}</h3>
                <p>{entry.location}</p>
              </div>
            </div>
            <p className="experience-card__summary">{entry.summary}</p>
            <ul className="responsibility-list">
              {entry.responsibilities.map((responsibility) => (
                <li key={responsibility}>
                  <span aria-hidden="true"><Check /></span>
                  {responsibility}
                </li>
              ))}
            </ul>
            {entry.confidentialityNote && (
              <div className="confidentiality-note">
                <ShieldCheck aria-hidden="true" />
                <p><strong>{experienceCopy.confidentiality}</strong> {entry.confidentialityNote}</p>
              </div>
            )}
          </Reveal>

          <div className="focus-grid">
            {experienceCopy.focusAreas.map((area, index) => {
              const Icon = focusIcons[index];
              return (
                <Reveal key={area.title} delay={index * 70} className="focus-card">
                  <span className="focus-card__icon" aria-hidden="true"><Icon /></span>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
