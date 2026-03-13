"use client";

import { motion } from "framer-motion";

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function SectionCard({ title, children, delay = 0, className = "" }: SectionCardProps) {
  return (
    <motion.article
      className={`group rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-6 transition-colors hover:border-[var(--terminal-green)]/30 sm:p-8 ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -2 }}
    >
      <h2 className="mb-4 font-semibold text-[var(--terminal-green)] text-lg tracking-tight sm:text-xl">
        <span className="text-[var(--python-blue)]">#</span> {title}
      </h2>
      {children}
    </motion.article>
  );
}
