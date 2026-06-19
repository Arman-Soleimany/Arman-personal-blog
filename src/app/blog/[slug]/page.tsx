import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { AnimatedSection } from "@/components/AnimatedSection";
import { formatDate, markdownToHtml } from "@/lib/utils";
import { Clock, ArrowLeft, Tag } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="pb-24 pt-32">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted">
                  <Clock size={14} />
                  {post.readingTime} min read
                </span>
              </div>
              <h1 className="mb-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-3 text-muted">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-purple-500 text-sm font-bold text-white">
                  A
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{post.author}</p>
                  <time className="text-xs">{formatDate(post.publishedAt)}</time>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mb-10 flex h-64 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-purple-500/15 sm:h-80">
              <span className="font-display text-4xl font-bold text-accent/20">{post.category}</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-display prose-a:text-accent prose-code:rounded prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-pre:border prose-pre:border-line"
              dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-line pt-8">
              <Tag size={16} className="text-muted" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="cursor-default rounded-full border border-line px-3 py-1 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </article>
  );
}
