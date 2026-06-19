# Arman Soleimany | Portfolio & Blog

A modern personal portfolio and blog website built with Next.js 15, React 19, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Theme:** next-themes (dark/light mode)

## Features

- Responsive design with mobile-first approach
- Dark/light theme toggle
- Animated page transitions
- Project portfolio with filtering
- Blog with markdown-style articles
- Contact form with validation
- Skills showcase and career timeline
- SEO optimized with OpenGraph metadata

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/Arman-Soleimany/Arman-personal-blog.git
cd Arman-personal-blog
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── about/        # About page
│   ├── blog/         # Blog listing and posts
│   ├── contact/      # Contact form
│   ├── portfolio/    # Projects showcase
│   ├── testimonials/ # Client testimonials
│   └── why-hire-me/  # Why hire me page
├── components/       # Reusable UI components
├── data/             # Static data (projects, skills, posts)
└── lib/              # Utility functions
```

## License

MIT
