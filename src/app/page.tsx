import Link from "next/link";
import { Hero } from "@/components/Hero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogCard } from "@/components/BlogCard";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog-posts";
import { ArrowRight, Zap, Users, Code2, MessageCircle } from "lucide-react";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const latest = blogPosts.slice(0, 3);

  const highlights = [
    {
      icon: Zap,
      title: "Fast Learner",
      desc: "Quickly adapting to new technologies and methodologies.",
    },
    {
      icon: Users,
      title: "Team Player",
      desc: "Experienced with Agile/Scrum and collaborative workflows.",
    },
    {
      icon: Code2,
      title: "Clean Code",
      desc: "Writing maintainable, scalable, and well-documented code.",
    },
    {
      icon: MessageCircle,
      title: "Great Communicator",
      desc: "Clear communication and strong client relationships.",
    },
  ];

  return (
    <>
      <Hero />

      <section className="py-24">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="mb-4 text-center font-display text-3xl font-bold sm:text-4xl">
              Why Work With Me?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted">
              I combine technical expertise with professional skills to deliver
              exceptional results.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <AnimatedSection key={h.title} delay={i * 0.1}>
                <div className="rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/30">
                  <h.icon className="mb-4 h-10 w-10 text-accent" />
                  <h3 className="mb-2 font-display font-semibold">{h.title}</h3>
                  <p className="text-sm text-muted">{h.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-alt py-24">
        <div className="section-container">
          <AnimatedSection>
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="mb-2 font-display text-3xl font-bold sm:text-4xl">Featured Projects</h2>
                <p className="text-muted">Some of my recent work.</p>
              </div>
              <Link
                href="/portfolio"
                className="hidden items-center gap-1 text-sm font-medium text-accent transition-all hover:gap-2 sm:flex"
              >
                View all <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/portfolio" className="inline-flex items-center gap-1 font-medium text-accent">
              View all projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-container">
          <AnimatedSection>
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="mb-2 font-display text-3xl font-bold sm:text-4xl">Latest Articles</h2>
                <p className="text-muted">Thoughts on web development and design.</p>
              </div>
              <Link
                href="/blog"
                className="hidden items-center gap-1 text-sm font-medium text-accent transition-all hover:gap-2 sm:flex"
              >
                Read all <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latest.map((p, i) => (
              <BlogCard key={p.id} post={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-alt py-24">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">Let&apos;s Work Together</h2>
            <p className="mx-auto mb-8 max-w-xl text-muted">
              Have a project in mind? I&apos;d love to hear about it.
              Let&apos;s create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
              >
                Get in Touch
              </Link>
              <Link
                href="/why-hire-me"
                className="inline-flex items-center gap-2 rounded-lg border border-line px-8 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
              >
                Why Hire Me <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
