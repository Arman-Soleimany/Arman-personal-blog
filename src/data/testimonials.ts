export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content:
      "Arman delivered exceptional work on our project. His attention to detail and clean code made the handoff seamless. Highly recommend!",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Startup Founder",
    company: "InnovateLab",
    content:
      "Working with Arman was a great experience. He understood our requirements perfectly and delivered ahead of schedule. The code quality was outstanding.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Design Lead",
    company: "CreativeStudio",
    content:
      "Arman has an excellent eye for translating designs into pixel-perfect implementations. His communication skills and responsiveness made collaboration effortless.",
    rating: 5,
  },
  {
    id: "4",
    name: "David Kim",
    role: "CTO",
    company: "DataFlow",
    content:
      "Exceptional developer with strong problem-solving skills. Arman quickly adapted to our tech stack and became a valuable team member from day one.",
    rating: 5,
  },
  {
    id: "5",
    name: "Lisa Thompson",
    role: "Marketing Director",
    company: "BrandWave",
    content:
      "The website Arman built for us increased our conversion rate significantly. His understanding of both design and development is impressive.",
    rating: 4,
  },
];
