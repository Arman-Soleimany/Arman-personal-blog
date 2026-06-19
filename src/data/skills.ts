export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "tools" | "soft";
}

export const skills: Skill[] = [
  { name: "HTML5", icon: "🟧", category: "frontend" },
  { name: "CSS3", icon: "🟦", category: "frontend" },
  { name: "JavaScript", icon: "🟨", category: "frontend" },
  { name: "TypeScript", icon: "🔷", category: "frontend" },
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "Next.js", icon: "▲", category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "frontend" },
  { name: "Git", icon: "🔀", category: "tools" },
  { name: "GitHub", icon: "🐙", category: "tools" },
  { name: "VS Code", icon: "💻", category: "tools" },
  { name: "Figma", icon: "🎯", category: "tools" },
  { name: "npm / yarn", icon: "📦", category: "tools" },
  { name: "Agile / Scrum", icon: "🔄", category: "soft" },
  { name: "Team Collaboration", icon: "🤝", category: "soft" },
  { name: "Problem Solving", icon: "🧩", category: "soft" },
  { name: "Communication", icon: "💬", category: "soft" },
  { name: "Fast Learning", icon: "🚀", category: "soft" },
  { name: "Time Management", icon: "⏰", category: "soft" },
];
