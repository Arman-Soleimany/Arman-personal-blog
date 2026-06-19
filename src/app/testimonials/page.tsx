import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "See what clients and colleagues say about working with Arman Soleimany.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="pb-16 pt-32">
        <div className="section-container">
          <AnimatedSection>
            <h1 className="mb-6 text-center font-display text-4xl font-bold sm:text-5xl">
              Client <span className="gradient-text">Testimonials</span>
            </h1>
            <p className="mx-auto max-w-2xl text-center text-lg text-muted">
              Here&apos;s what people I&apos;ve worked with have to say about my
              work and collaboration.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <section className="bg-background-alt py-16">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="mb-8 text-center font-display text-2xl font-bold">All Reviews</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-xl border border-line bg-surface p-6">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span
                        key={j}
                        className={j < t.rating ? "text-yellow-400" : "text-line"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">&ldquo;{t.content}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-purple-500 text-sm font-bold text-white">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted">{t.role} at {t.company}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
