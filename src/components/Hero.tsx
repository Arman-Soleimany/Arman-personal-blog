"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, FolderOpen } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse-glow rounded-full bg-accent/8 blur-3xl" />
        <div
          className="absolute bottom-1/4 right-1/4 h-80 w-80 animate-pulse-glow rounded-full bg-purple-500/6 blur-3xl"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <div className="relative">
              <div className="rounded-full bg-gradient-to-br from-accent to-purple-500 p-1">
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-background text-4xl font-display font-bold text-foreground">
                  AS
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full border-4 border-background bg-green-500" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 font-display text-5xl font-bold sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="gradient-text">Arman</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-4 text-xl font-light text-muted sm:text-2xl"
          >
            Front-End Developer &amp; Web Designer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-10 max-w-2xl leading-relaxed text-muted"
          >
            Passionate about clean code &amp; modern web. I build beautiful,
            performant, and accessible web experiences that deliver real value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
            >
              <FolderOpen size={18} />
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={18} />
              Contact Me
            </Link>
            <a
              href="https://github.com/Arman-Soleimany"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={18} />
              GitHub
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
