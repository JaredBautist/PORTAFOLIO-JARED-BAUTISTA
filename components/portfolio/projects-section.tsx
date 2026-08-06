"use client";

import { useLanguage } from "@/components/portfolio/language-provider";
import { getDeployedProjects, getEngineeringProjects } from "@/lib/portfolio-localization";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";

/** Prioritizes live product evidence before deeper engineering case studies. */
export function ProjectsSection() {
  const { copy, language } = useLanguage();
  const deployedProjects = getDeployedProjects(language);
  const engineeringProjects = getEngineeringProjects(language);
  const projects = copy.projects;
  return (
    <section id="proyectos" className="section-block projects-section" aria-labelledby="projects-title">
      <div className="container-shell">
        <Reveal>
          <div>
            <SectionHeading
              id="projects-title"
              eyebrow={projects.deployedEyebrow}
              title={projects.deployedTitle}
              description={projects.deployedDescription}
            />
          </div>
        </Reveal>

        <div className="project-grid project-grid--deployed">
          {deployedProjects.map((project, index) => (
            <Reveal key={project.slug} delay={Math.min(index, 2) * 70}>
              <ProjectCard project={project} priority={index < 2} />
            </Reveal>
          ))}
        </div>

        <Reveal className="engineering-heading">
          <SectionHeading
            id="engineering-title"
            eyebrow={projects.engineeringEyebrow}
            title={projects.engineeringTitle}
            description={projects.engineeringDescription}
          />
        </Reveal>

        <div className="project-grid project-grid--engineering">
          {engineeringProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
