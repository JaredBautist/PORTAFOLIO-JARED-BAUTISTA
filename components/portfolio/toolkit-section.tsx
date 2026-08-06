"use client";

import Image from "next/image";
import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithubactions,
  SiGoogle,
  SiGooglesearchconsole,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLighthouse,
  SiLinux,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNotion,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVercel,
  SiVite,
  SiWappalyzer,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { useLanguage } from "@/components/portfolio/language-provider";
import { aiTools, architecturePractices } from "@/lib/portfolio-data";
import { getTechnologyGroups } from "@/lib/portfolio-localization";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";

const iconMap: Record<string, IconType> = {
  bootstrap: SiBootstrap,
  css: SiCss,
  docker: SiDocker,
  express: SiExpress,
  git: SiGit,
  githubactions: SiGithubactions,
  google: SiGoogle,
  html: SiHtml5,
  javascript: SiJavascript,
  jira: SiJira,
  lighthouse: SiLighthouse,
  linux: SiLinux,
  mui: SiMui,
  mysql: SiMysql,
  nestjs: SiNestjs,
  nextjs: SiNextdotjs,
  nginx: SiNginx,
  node: SiNodedotjs,
  notion: SiNotion,
  postgresql: SiPostgresql,
  python: SiPython,
  react: SiReact,
  searchconsole: SiGooglesearchconsole,
  sqlserver: TbSql,
  tailwind: SiTailwindcss,
  trello: SiTrello,
  typescript: SiTypescript,
  vercel: SiVercel,
  vite: SiVite,
  wappalyzer: SiWappalyzer,
};

/** Groups the verified stack by engineering concern and renders accessible brand marks. */
export function ToolkitSection() {
  const { copy, language } = useLanguage();
  const technologyGroups = getTechnologyGroups(language);
  const toolkit = copy.toolkit;
  return (
    <section id="tecnologias" className="section-block" aria-labelledby="toolkit-title">
      <div className="container-shell">
        <Reveal>
          <div>
            <SectionHeading
              id="toolkit-title"
              eyebrow={toolkit.eyebrow}
              title={toolkit.title}
              description={toolkit.description}
            />
          </div>
        </Reveal>

        <div className="toolkit-grid">
          {technologyGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 70} className="toolkit-card">
              <div className="toolkit-card__header">
                <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>
              <ul className="technology-logo-grid">
                {group.items.map((technology) => {
                  const Icon = iconMap[technology.icon];
                  return (
                    <li key={technology.name} title={technology.name}>
                      <span className="technology-logo" style={{ color: technology.color }} aria-hidden="true">
                        <Icon />
                      </span>
                      <span>{technology.name}</span>
                    </li>
                  );
                })}
              </ul>
              {group.practices && group.practices.length > 0 && (
                <ul className="practice-chips" aria-label={`${toolkit.practices} ${group.title}`}>
                  {group.practices.map((practice) => <li key={practice}>{practice}</li>)}
                </ul>
              )}
            </Reveal>
          ))}
        </div>

        <div className="engineering-practices">
          <Reveal className="practice-panel">
            <p className="eyebrow">{toolkit.architectureEyebrow}</p>
            <h3>{toolkit.architectureTitle}</h3>
            <ul className="architecture-list">
              {architecturePractices.map((practice) => <li key={practice}>{practice}</li>)}
            </ul>
          </Reveal>

          <Reveal className="ai-panel" delay={80}>
            <p className="eyebrow">{toolkit.aiEyebrow}</p>
            <h3>{toolkit.aiTitle}</h3>
            <p>{toolkit.aiDescription}</p>
            <ul className="ai-tool-list">
              {aiTools.map((tool) => (
                <li key={tool.name}>
                  <Image src={tool.image} alt="" width={48} height={48} />
                  <span>{tool.name}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
