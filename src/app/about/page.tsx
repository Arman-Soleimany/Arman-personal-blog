import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SkillsGrid } from "@/components/SkillsGrid";
import { Timeline } from "@/components/Timeline";
import { GithubSection } from "@/components/GithubSection";
import { skills } from "@/data/skills";
import { Target, Heart, Rocket, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Arman Soleimany — a passionate web developer focused on clean code and modern technologies.",
};

export default function AboutPage() {
  const strengths = [
    {
      icon: Target,
      title: "Goal-Oriented",
      desc: "I focus on delivering results that matter to clients and users.",
    },
    {
      icon: Heart,
      title: "Passionate",
      desc: "I genuinely love what I do and bring enthusiasm to every project.",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      desc: "I quickly adapt to new technologies and methodologies.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learner",
      desc: "Always expanding my knowledge and staying current with trends.",
    },
  ];

  return (
    <>
      <section className="pb-16 pt-32">
        <div className="section-container">
          <AnimatedSection>
            <h1 className="mb-6 font-display text-4xl font-bold sm:text-5xl">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-muted">
              I am active in web design and development. I strive to add real value to teams and projects through fast learning, responsibility, and effective collaboration.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div className="space-y-6">
                <p className="leading-relaxed text-muted">I am familiar with Scrum and Agile methodologies and enjoy working in software development teams. Continuous learning, teamwork, and problem-solving are important parts of my professional mindset.</p>
                <p className="leading-relaxed text-muted">My journey in web development started with a curiosity about how websites work and has evolved into a deep passion for creating beautiful, functional, and accessible web experiences.</p>
                <p className="leading-relaxed text-muted">I believe that great software is built by great teams, and I&apos;m committed to being a collaborative, reliable, and innovative team member who delivers real value.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {strengths.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent/30"
                  >
                    <s.icon className="mb-3 h-8 w-8 text-accent" />
                    <h3 className="mb-1 font-display text-sm font-semibold">{s.title}</h3>
                    <p className="text-xs leading-relaxed text-muted">{s.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-background-alt py-16">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="mb-8 font-display text-3xl font-bold">Skills &amp; Technologies</h2>
          </AnimatedSection>
          <SkillsGrid skills={skills} />
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="mb-12 text-center font-display text-3xl font-bold">My Journey</h2>
          </AnimatedSection>
          <Timeline />
        </div>
      </section>

      <section className="bg-background-alt py-16">
        <div className="section-container">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 font-display text-3xl font-bold">Career Goals</h2>
              <p className="mb-6 leading-relaxed text-muted">My goal is to become a senior full-stack developer who can lead projects and mentor junior developers. I want to work on products that make a real difference in people&apos;s lives while continuously growing my technical and leadership skills.</p>
              <p className="leading-relaxed text-muted">I&apos;m particularly interested in joining forward-thinking teams that value code quality, innovation, and user experience. I believe in building software that is not only functional but also delightful to use.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GithubSection />
    </>
  );
}
