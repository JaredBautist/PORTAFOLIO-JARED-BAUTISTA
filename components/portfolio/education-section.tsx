"use client";

import { BookOpen, GraduationCap } from "lucide-react";
import { useLanguage } from "@/components/portfolio/language-provider";
import { getEducation } from "@/lib/portfolio-localization";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";

/** Presents completed and in-progress education without inventing unsupported dates. */
export function EducationSection() {
  const { copy, language } = useLanguage();
  const education = getEducation(language);
  const educationCopy = copy.education;
  return (
    <section id="estudios" className="section-block section-block--tinted" aria-labelledby="education-title">
      <div className="container-shell education-layout">
        <Reveal className="education-intro">
          <div>
            <SectionHeading
              id="education-title"
              eyebrow={educationCopy.eyebrow}
              title={educationCopy.title}
              description={educationCopy.description}
            />
          </div>
          <div className="education-quote">
            <BookOpen aria-hidden="true" />
            <p>{educationCopy.quote}</p>
          </div>
        </Reveal>

        <div className="education-list">
          {education.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <article className="education-card">
                <div className="education-card__icon" aria-hidden="true"><GraduationCap /></div>
                <div className="education-card__content">
                  <div className="education-card__meta">
                    <span>{item.status}</span>
                    {"period" in item && item.period && <time>{item.period}</time>}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
