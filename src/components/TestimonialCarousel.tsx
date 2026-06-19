"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[current];

  return (
    <div className="relative mx-auto max-w-3xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <Quote size={40} className="mx-auto mb-6 text-accent/30" />

          <div className="mb-6 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={20}
                className={
                  i < t.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-line"
                }
              />
            ))}
          </div>

          <blockquote className="mb-8 text-lg leading-relaxed text-foreground/90 sm:text-xl">
            &ldquo;{t.content}&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-purple-500 font-bold text-white">
              {t.name.charAt(0)}
            </div>
            <div className="text-left">
              <p className="font-display font-semibold">{t.name}</p>
              <p className="text-sm text-muted">
                {t.role} at {t.company}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="rounded-full border border-line p-2 transition-colors hover:border-accent hover:text-accent"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-accent" : "w-2 bg-line"
              }`}
              aria-label={`Go to ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="rounded-full border border-line p-2 transition-colors hover:border-accent hover:text-accent"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
