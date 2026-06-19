import type { Metadata } from "next";
import { BlogContent } from "@/components/BlogContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on web development, design, and the tech industry by Arman Soleimany.",
};

export default function BlogPage() {
  return <BlogContent />;
}
