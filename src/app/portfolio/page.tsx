import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore my web development projects and see what I can build for you.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="pb-16 pt-32">
        <div className="section-container">
          <AnimatedSection>
            <h1 className="mb-4 font-display text-4xl font-bold sm:text-5xl">
              My <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="max-w-2xl text-lg text-muted">
              A collection of projects I&apos;ve built. Each one represents a
              unique challenge and an opportunity to grow.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-alt py-16">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="mb-4 font-display text-2xl font-bold">Want to see more?</h2>
            <p className="mb-6 text-muted">Check out my GitHub for more projects and contributions.</p>
            <a
              href="https://github.com/Arman-Soleimany"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-8 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={18} />
              View GitHub Profile
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
