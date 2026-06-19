import Link from "next/link";
import { Github, Mail, Heart } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/why-hire-me", label: "Why Hire Me" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-background-alt">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="font-display text-xl font-bold">
              Arman<span className="text-accent">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Front-End Developer passionate about building beautiful,
              performant web experiences with modern technologies.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display font-semibold">Connect</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/Arman-Soleimany"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-line p-2 text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:arman@example.com"
                className="rounded-lg border border-line p-2 text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Arman Soleimany. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted">
            Built with <Heart size={14} className="text-red-500" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
