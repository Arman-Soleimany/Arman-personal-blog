import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 font-display text-7xl font-bold gradient-text">404</h1>
      <p className="mb-8 text-lg text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="rounded-lg bg-accent px-8 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
      >
        Go Home
      </Link>
    </section>
  );
}
