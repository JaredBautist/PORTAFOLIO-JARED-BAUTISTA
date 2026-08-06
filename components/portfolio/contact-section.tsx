"use client";

import { ArrowUpRight, Github, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/portfolio/language-provider";
import { contactLinks } from "@/lib/portfolio-data";
import { Reveal } from "@/components/portfolio/reveal";

/** Offers three verified, backend-free contact paths. */
export function ContactSection() {
  const { copy } = useLanguage();
  const contact = copy.contact;
  const contactOptions = [
    { label: contact.email, value: contactLinks.emailLabel, href: contactLinks.email, icon: Mail },
    { label: contact.github, value: "@JaredBautist", href: contactLinks.github, icon: Github },
    { label: contact.whatsapp, value: contactLinks.whatsappLabel, href: contactLinks.whatsapp, icon: MessageCircle },
  ] as const;
  return (
    <section id="contacto" className="contact-section" aria-labelledby="contact-title">
      <div className="container-shell">
        <Reveal className="contact-card">
          <div className="contact-card__copy">
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2 id="contact-title">{contact.title}</h2>
            <p>{contact.description}</p>
          </div>
          <div className="contact-options">
            {contactOptions.map((option) => {
              const Icon = option.icon;
              return (
                <a key={option.label} href={option.href} target={option.href.startsWith("http") ? "_blank" : undefined} rel={option.href.startsWith("http") ? "noreferrer" : undefined}>
                  <span className="contact-option__icon" aria-hidden="true"><Icon /></span>
                  <span>
                    <small>{option.label}</small>
                    <strong>{option.value}</strong>
                  </span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
