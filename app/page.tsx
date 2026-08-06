import { ContactSection } from "@/components/portfolio/contact-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { Hero } from "@/components/portfolio/hero";
import { Navigation } from "@/components/portfolio/navigation";
import { PortfolioFooter } from "@/components/portfolio/portfolio-footer";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ToolkitSection } from "@/components/portfolio/toolkit-section";
import { WorkflowSection } from "@/components/portfolio/workflow-section";
import { TeachingTeaser } from "@/components/teaching/teaching-teaser";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
        <ToolkitSection />
        <WorkflowSection />
        <EducationSection />
        <TeachingTeaser />
        <ContactSection />
      </main>
      <PortfolioFooter />
    </>
  );
}
