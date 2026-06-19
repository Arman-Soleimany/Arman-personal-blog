export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with cart functionality, product filtering, and secure checkout. Built with performance and accessibility in mind.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    githubUrl: "https://github.com/Arman-Soleimany",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop interface, and team workspaces.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/Arman-Soleimany",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts, interactive maps, and historical data visualization.",
    technologies: ["React", "TypeScript", "Chart.js", "REST API"],
    githubUrl: "https://github.com/Arman-Soleimany",
    featured: true,
  },
  {
    id: "4",
    title: "Blog Platform",
    description:
      "A full-featured blog platform with markdown support, categories, tags, and SEO optimization.",
    technologies: ["Next.js", "MDX", "Tailwind CSS"],
    githubUrl: "https://github.com/Arman-Soleimany",
    liveUrl: "#",
  },
  {
    id: "5",
    title: "Portfolio Template",
    description:
      "A customizable portfolio template for developers with dark mode, animations, and responsive design.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/Arman-Soleimany",
  },
  {
    id: "6",
    title: "Chat Application",
    description:
      "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/Arman-Soleimany",
    liveUrl: "#",
  },
];
