"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/data/skills";

const categoryLabels: Record<Skill["category"], string> = {
  frontend: "Frontend & Languages",
  tools: "Tools & Technologies",
  soft: "Professional Skills",
};

export function SkillsGrid({ skills }: { skills: Skill[] }) {
  const groups = (Object.keys(categoryLabels) as Skill["category"][]).map((key) => ({
    key,
    label: categoryLabels[key],
    items: skills.filter((s) => s.category === key),
  }));

  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <div key={group.key}>
          <h3 className="mb-4 font-display text-lg font-semibold">{group.label}</h3>
          <div className="flex flex-wrap gap-3">
            {group.items.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex cursor-default items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 transition-all hover:border-accent/50 hover:bg-surface-hover"
              >
                <span className="text-lg">{skill.icon}</span>
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
