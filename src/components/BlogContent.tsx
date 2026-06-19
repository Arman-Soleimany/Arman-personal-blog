"use client";

import { useState, useMemo } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/blog-posts";
import { Search } from "lucide-react";

export function BlogContent() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))],
    [],
  );

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const q = search.toLowerCase();
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      const matchesCat =
        selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [search, selectedCategory]);

  return (
    <>
      <section className="pb-8 pt-32">
        <div className="section-container">
          <AnimatedSection>
            <h1 className="mb-4 font-display text-4xl font-bold sm:text-5xl">
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="max-w-2xl text-lg text-muted">
              Thoughts on web development, design, and the tech industry.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-8">
        <div className="section-container">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-line bg-surface py-3 pl-11 pr-4 text-foreground placeholder:text-muted transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-accent text-white"
                      : "border border-line text-muted hover:border-accent hover:text-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg text-muted">
                No articles found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
