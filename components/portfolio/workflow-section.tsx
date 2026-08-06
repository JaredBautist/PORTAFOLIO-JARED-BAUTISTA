"use client";

import { useLanguage } from "@/components/portfolio/language-provider";
import { getWorkflowSteps } from "@/lib/portfolio-localization";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";

/** Explains the specification-driven delivery sequence as a scannable four-step flow. */
export function WorkflowSection() {
  const { copy, language } = useLanguage();
  const workflowSteps = getWorkflowSteps(language);
  const workflow = copy.workflow;
  return (
    <section id="proceso" className="section-block workflow-section" aria-labelledby="workflow-title">
      <div className="container-shell">
        <Reveal>
          <div>
            <SectionHeading
              id="workflow-title"
              eyebrow={workflow.eyebrow}
              title={workflow.title}
              description={workflow.description}
              align="center"
            />
          </div>
        </Reveal>

        <ol className="workflow-grid">
          {workflowSteps.map((step, index) => (
            <li key={step.number}>
              <Reveal delay={index * 80} className="workflow-card">
                <div className="workflow-card__number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <span>{step.output}</span>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
