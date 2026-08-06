import type { Metadata } from "next";
import { TeachingPage } from "@/components/teaching/teaching-page";

export const metadata: Metadata = {
  title: "Docencia privada de Matemáticas e Inglés",
  description: "Propuesta docente de Jared Bautista: clases privadas de matemáticas e inglés, metodología alineada con los DBA y aprendizaje autónomo apoyado por IA.",
};

export default function TeachingPortfolioPage() {
  return <TeachingPage />;
}
