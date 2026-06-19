"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { Github, Mail, MapPin, Send } from "lucide-react";

export function ContactContent() {
  return (
    <>
      <section className="pb-16 pt-32">
        <div className="section-container">
          <AnimatedSection>
            <h1 className="mb-6 font-display text-4xl font-bold sm:text-5xl">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="max-w-2xl text-lg text-muted">
              Have a project in mind or just want to say hello? I&apos;d love to
              hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <ContactForm />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="mb-6 font-display text-2xl font-bold">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <Mail size={18} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-muted">arman@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <MapPin size={18} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Location</p>
                        <p className="text-sm text-muted">Available for remote work worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 font-display font-semibold">Connect with me</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Arman-Soleimany"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                    <a
                      href="mailto:arman@example.com"
                      className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
                    >
                      <Send size={16} />
                      Email
                    </a>
                  </div>
                </div>

                <div className="rounded-xl border border-line bg-surface p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
                    <span className="text-sm font-medium">Available for freelance work</span>
                  </div>
                  <p className="text-sm text-muted">
                    I&apos;m currently open to freelance projects and full-time
                    opportunities. Let&apos;s discuss how I can help with your
                    next project.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
