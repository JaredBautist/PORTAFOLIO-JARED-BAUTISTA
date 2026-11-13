"use client";

import Image from "next/image";
import { ArrowUpRight, Github, PackageOpen } from "lucide-react";
import { useLanguage } from "@/components/portfolio/language-provider";
import type { PortfolioProject } from "@/lib/portfolio-data";

interface ProjectCardProps {
  readonly project: PortfolioProject;
  readonly priority?: boolean;
  readonly variant?: "default" | "horizontal";
}

/** Displays one evidence-backed project with optimized media and explicit destinations. */
export function ProjectCard({ project, priority = false, variant = "default" }: ProjectCardProps) {
  const { copy } = useLanguage();
  const labels = copy.projects;
  const isInDevelopment = project.status === "in-development";
  const isLive = Boolean(project.liveUrl) && !isInDevelopment;
  const statusLabel = isInDevelopment
    ? labels.inDevelopment
    : isLive ? labels.online : project.kind === "product" ? labels.published : labels.protected;

  return (
    <article className={`project-card project-card--${project.accent}${variant === "horizontal" ? " project-card--horizontal" : ""}`}>
      <a
        className="project-card__media"
        href={project.liveUrl ?? project.repositoryUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`${labels.open} ${project.title}`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority={priority}
          sizes={variant === "horizontal"
            ? "(max-width: 767px) 100vw, (max-width: 1280px) 40vw, 488px"
            : "(max-width: 767px) 100vw, (max-width: 1280px) 50vw, 608px"}
          className="project-card__image"
        />
        <span className="project-card__open" aria-hidden="true">
          <ArrowUpRight />
        </span>
      </a>

      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{project.category}</span>
          <span className={isLive ? "live-status" : "case-status"}>
            {isLive && <span aria-hidden="true" />}
            {statusLabel}
          </span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>
        <p className="project-card__contribution">
          <strong>{labels.myWork}</strong> {project.contribution}
        </p>

        <ul className="technology-chips" aria-label={`${labels.technologies} ${project.title}`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-card__links">
          {project.liveUrl && (
            <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
              {labels.viewSite} <ArrowUpRight aria-hidden="true" />
            </a>
          )}
          {project.repositoryUrl && (
            <a className="text-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">
              <Github aria-hidden="true" /> {labels.code}
            </a>
          )}
          {project.secondaryUrl && (
            <a className="text-link" href={project.secondaryUrl} target="_blank" rel="noreferrer">
              <PackageOpen aria-hidden="true" /> {project.secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
