import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Zap,
  Shield,
  MessageSquare,
  Users,
  RefreshCw,
  Code2,
  Heart,
  Target,
  Clock,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Hire Me",
  description:
    "Discover why you should hire Arman Soleimany for your next web development project.",
};

const reasons = [
  {
    icon: Zap,
    title: "Fast Learner",
    desc: "I quickly pick up new technologies and adapt to different tech stacks, minimizing onboarding time.",
  },
  {
    icon: Shield,
    title: "Responsible & Reliable",
    desc: "I take ownership of my work. Deadlines are sacred, and quality is non-negotiable.",
  },
  {
    icon: MessageSquare,
    title: "Strong Communication",
    desc: "Clear communication is the foundation of successful projects. I keep stakeholders informed.",
  },
  {
    icon: Users,
    title: "Team-Oriented",
    desc: "I thrive in collaborative environments and contribute positively to team dynamics.",
  },
  {
    icon: RefreshCw,
    title: "Agile & Scrum Ready",
    desc: "Familiar with Scrum ceremonies, sprint planning, and iterative development workflows.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Clean architecture, proper documentation, and thoughtful patterns — code your future self will thank you for.",
  },
  {
    icon: Heart,
    title: "Passion-Driven",
    desc: "I don't just write code — I craft experiences. My passion shows in every project.",
  },
  {
    icon: Target,
    title: "Value-Focused",
    desc: "Every feature I build is aligned with project goals and real user needs.",
  },
  {
    icon: Clock,
    title: "Continuous Improvement",
    desc: "Always learning, always growing. I stay current with industry best practices.",
  },
  {
    icon: Award,
    title: "Quality First",
    desc: "From pixel-perfect designs to performance optimization, I never compromise on quality.",
  },
];

export default function WhyHireMePage() {
  return (
    <>
      <section className="pb-16 pt-32">
        <div className="section-container">
          <AnimatedSection>
            <h1 className="mb-6 font-display text-4xl font-bold sm:text-5xl">
              Why <span className="gradient-text">Hire Me</span>
            </h1>
            <p className="max-w-3xl text-lg text-muted">
              Here&apos;s what sets me apart and why I&apos;d be a valuable
              addition to your team or project.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 0.05}>
                <div className="group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:border-accent/30">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <r.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold">{r.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{r.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-alt py-16">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="mb-4 font-display text-3xl font-bold">Ready to work together?</h2>
            <p className="mx-auto mb-8 max-w-xl text-muted">
              Let&apos;s discuss your project and see how I can help bring your
              vision to life.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Let&apos;s Talk
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
