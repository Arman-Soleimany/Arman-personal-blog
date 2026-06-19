"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";

export function BlogCard({
  post,
  index,
}: {
  post: BlogPost;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:border-accent/50">
          <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-accent/10 to-purple-500/10">
            <span className="text-lg font-display font-semibold text-accent/25">
              {post.category}
            </span>
          </div>

          <div className="p-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted">
                <Clock size={12} />
                {post.readingTime} min read
              </span>
            </div>

            <h3 className="mb-2 line-clamp-2 font-display text-lg font-semibold transition-colors group-hover:text-accent">
              {post.title}
            </h3>

            <p className="mb-4 line-clamp-2 text-sm text-muted">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <time className="text-xs text-muted">
                {formatDate(post.publishedAt)}
              </time>
              <span className="flex items-center gap-1 text-sm text-accent opacity-0 transition-opacity group-hover:opacity-100">
                Read more <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
