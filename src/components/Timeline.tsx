"use client";

import { motion } from "framer-motion";

const items = [
  {
    date: "2022",
    title: "Started Learning Web Development",
    description:
      "Began my journey with HTML, CSS, and JavaScript fundamentals.",
  },
  {
    date: "2023",
    title: "Mastered React & Modern Frameworks",
    description:
      "Dove deep into React, Next.js, and TypeScript. Built multiple projects to solidify my skills.",
  },
  {
    date: "2023",
    title: "Learned Agile & Scrum",
    description:
      "Familiarized myself with Scrum and Agile methodologies for effective team collaboration.",
  },
  {
    date: "2024",
    title: "Freelance & Team Projects",
    description:
      "Started working on freelance projects and collaborating with development teams.",
  },
  {
    date: "2024 – Present",
    title: "Expanding Skill Set",
    description:
      "Continuously learning new technologies and best practices to deliver better solutions.",
  },
];

export function Timeline() {
  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="absolute bottom-0 left-4 top-0 w-px bg-line" />

      <div className="space-y-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-12"
          >
            <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-4 border-background bg-accent" />
            <span className="font-mono text-sm text-accent">{item.date}</span>
            <h4 className="mt-1 font-display font-semibold">{item.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
