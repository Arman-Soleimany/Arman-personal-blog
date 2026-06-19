export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  readingTime: number;
  publishedAt: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "getting-started-with-nextjs-15",
    title: "Getting Started with Next.js 15",
    excerpt:
      "Explore the latest features in Next.js 15 and learn how to build modern web applications with the App Router.",
    content: `## Introduction

Next.js 15 represents a significant leap forward in the React ecosystem. With the App Router now stable, developers have access to powerful features like Server Components, Streaming, and improved caching strategies.

## Key Features

### Server Components

Server Components allow you to render components on the server, reducing the JavaScript bundle sent to the client. This results in **faster page loads** and better performance.

### App Router

The App Router introduces a new file-system based routing convention with support for layouts, loading states, and error boundaries out of the box.

### Turbopack

Turbopack, the Rust-based successor to Webpack, offers significantly faster build times and hot module replacement.

## Getting Started

To create a new Next.js 15 project:

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind
\`\`\`

## Conclusion

Next.js 15 is a powerful framework for building modern web applications. Its focus on performance, developer experience, and flexibility makes it an excellent choice for projects of any scale.`,
    category: "Web Development",
    tags: ["Next.js", "React", "TypeScript", "Tutorial"],
    readingTime: 5,
    publishedAt: "2024-12-01",
    author: "Arman Soleimany",
  },
  {
    id: "2",
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS: Tips & Tricks",
    excerpt:
      "Learn advanced Tailwind CSS techniques to create stunning UI designs efficiently.",
    content: `## Why Tailwind CSS?

Tailwind CSS has revolutionized how we write CSS by providing a **utility-first** approach that speeds up development while maintaining design consistency.

## Advanced Techniques

### Custom Components

While Tailwind provides utility classes, creating reusable component classes with \`@apply\` can improve maintainability for repeated patterns.

### Responsive Design

Tailwind's responsive prefixes make it easy to create designs that work on **all screen sizes** without writing media queries manually.

### Dark Mode

With the \`dark:\` variant, implementing dark mode becomes straightforward — just add the variant prefix and your styles adapt automatically.

## Performance Tips

- Use JIT mode for smaller CSS bundles
- Purge unused styles in production
- Use arbitrary values sparingly
- Leverage the built-in design system

## Conclusion

Mastering Tailwind CSS can significantly improve your development workflow and help you build beautiful interfaces faster.`,
    category: "CSS",
    tags: ["Tailwind CSS", "CSS", "Design", "Tips"],
    readingTime: 4,
    publishedAt: "2024-11-15",
    author: "Arman Soleimany",
  },
  {
    id: "3",
    slug: "clean-code-principles",
    title: "Clean Code Principles for Web Developers",
    excerpt:
      "Essential clean code practices that every web developer should follow for maintainable code.",
    content: `## Introduction

Writing clean code is not just about aesthetics — it's about creating software that is **easy to understand**, maintain, and extend.

## Key Principles

### Meaningful Names

Choose names that reveal intent. A variable name should tell you why it exists and what it does.

### Functions Should Do One Thing

Each function should have a single responsibility. If you can extract another function with a meaningful name, it does more than one thing.

### DRY — Don't Repeat Yourself

Duplication is the primary enemy of a well-designed system. Every piece of knowledge should have a **single, authoritative representation**.

### Comments

Good code is self-documenting. Comments should explain *why*, not *what*.

## Conclusion

Clean code is a skill that develops over time with practice and discipline. The investment pays off in reduced bugs and faster development.`,
    category: "Best Practices",
    tags: ["Clean Code", "Best Practices", "Software Engineering"],
    readingTime: 6,
    publishedAt: "2024-10-20",
    author: "Arman Soleimany",
  },
  {
    id: "4",
    slug: "typescript-for-beginners",
    title: "TypeScript for Beginners: A Complete Guide",
    excerpt:
      "Start your TypeScript journey with this comprehensive guide covering all the fundamentals.",
    content: `## Why TypeScript?

TypeScript adds **static typing** to JavaScript, catching errors at compile time rather than runtime.

## Basic Types

TypeScript provides several built-in types: \`string\`, \`number\`, \`boolean\`, \`array\`, \`tuple\`, \`enum\`, and more.

## Interfaces vs Types

Both interfaces and types can define object shapes, but they have subtle differences in usage and extensibility. Interfaces are better for object contracts, while types are more flexible for unions and intersections.

## Generics

Generics allow you to create reusable components that work with **any type** while maintaining type safety:

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`

## Conclusion

TypeScript is an essential tool for modern web development, providing better developer experience and fewer runtime errors.`,
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Tutorial", "Beginners"],
    readingTime: 8,
    publishedAt: "2024-09-10",
    author: "Arman Soleimany",
  },
  {
    id: "5",
    slug: "responsive-design-best-practices",
    title: "Responsive Design Best Practices in 2024",
    excerpt:
      "Modern approaches to responsive design that go beyond basic media queries.",
    content: `## Beyond Media Queries

Responsive design in 2024 goes far beyond simple media queries. Modern CSS features like **Container Queries**, CSS Grid, and \`clamp()\` provide powerful tools for truly adaptive layouts.

## Container Queries

Container queries allow components to respond to their *container's size* rather than the viewport, enabling truly modular responsive components.

## Fluid Typography

Using \`clamp()\` for font sizes creates smooth scaling across all screen sizes without breakpoints:

\`\`\`css
h1 { font-size: clamp(1.5rem, 4vw, 3rem); }
\`\`\`

## Modern Layout Techniques

CSS Grid and Flexbox together handle virtually any layout challenge. Use Grid for overall page structure and Flexbox for component-level alignment.

## Conclusion

Modern responsive design is about creating flexible, adaptive layouts that work beautifully on any device.`,
    category: "Design",
    tags: ["Responsive Design", "CSS", "UI/UX"],
    readingTime: 5,
    publishedAt: "2024-08-25",
    author: "Arman Soleimany",
  },
];
