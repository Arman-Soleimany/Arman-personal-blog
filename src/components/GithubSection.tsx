"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Github } from "lucide-react";

export function GithubSection() {
  return (
    <section className="py-16">
      <div className="section-container">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <Github className="mx-auto mb-6 h-12 w-12 text-foreground" />
            <h2 className="mb-4 font-display text-3xl font-bold">Check out my GitHub</h2>
            <p className="mb-8 text-muted">
              Explore my repositories, contributions, and open-source work on GitHub.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-surface p-4">
                <h3 className="mb-3 text-left text-sm font-display font-semibold text-muted">Profile Stats</h3>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://github-readme-stats.vercel.app/api?username=Arman-Soleimany&show_icons=true&theme=tokyonight&hide_border=true&bg_color=09090b&title_color=06b6d4&text_color=a1a1aa&icon_color=06b6d4"
                  alt="GitHub Stats"
                  className="w-full"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl border border-line bg-surface p-4">
                <h3 className="mb-3 text-left text-sm font-display font-semibold text-muted">Top Languages</h3>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=Arman-Soleimany&layout=compact&theme=tokyonight&hide_border=true&bg_color=09090b&title_color=06b6d4&text_color=a1a1aa"
                  alt="Top Languages"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>

            <a
              href="https://github.com/Arman-Soleimany"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-8 py-3 font-medium text-background transition-opacity hover:opacity-90"
            >
              <Github size={18} />
              Visit GitHub Profile
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
