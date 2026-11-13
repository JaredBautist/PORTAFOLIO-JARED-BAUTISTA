"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/portfolio/language-provider";
import { contactLinks } from "@/lib/portfolio-data";

/** Offers three verified, backend-free contact paths. */
export function ContactSection() {
  const { copy } = useLanguage();
  const contact = copy.contact;
  const contactOptions = [
    { label: contact.email, value: contactLinks.emailLabel, href: contactLinks.email },
    { label: contact.whatsapp, value: contactLinks.whatsappLabel, href: contactLinks.whatsapp },
    { label: contact.github, value: "@JaredBautist", href: contactLinks.github },
  ] as const;
  return (
    <section id="contacto" className="contact-section" aria-labelledby="contact-title">
      <div className="container-shell">
        <div className="contact-layout">
          <div className="contact-intro">
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2 id="contact-title">{contact.title}</h2>
            <p>{contact.description}</p>
          </div>
          <ul className="contact-options">
            {contactOptions.map((option) => (
              <li key={option.label}>
                <a href={option.href} target={option.href.startsWith("http") ? "_blank" : undefined} rel={option.href.startsWith("http") ? "noreferrer" : undefined}>
                  <span>
                    <small>{option.label}</small>
                    <strong>{option.value}</strong>
                  </span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
