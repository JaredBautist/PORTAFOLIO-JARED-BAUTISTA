import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  readonly id?: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly align?: "left" | "center";
}

/** Renders the shared heading contract used by top-level portfolio sections. */
export function SectionHeading({ id, eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("section-heading", align === "center" && "section-heading--center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      <p className="section-heading__description">{description}</p>
    </div>
  );
}
