"use client";

import { motion } from "framer-motion";

const keyClass = "text-[var(--terminal-green)]";
const valueClass = "text-[#ce9178]"; // string orange
const bracketClass = "text-[var(--foreground)]/70";
const commentClass = "text-[var(--muted)]";

interface CodeBlockCardProps {
  delay?: number;
  children: React.ReactNode;
  label?: string;
}

export function CodeBlockCard({ delay = 0, children, label }: CodeBlockCardProps) {
  return (
    <motion.div
      className="overflow-hidden rounded-xl border border-[var(--border)] bg-[#0d1117]/80 font-mono text-xs transition-colors hover:border-[var(--terminal-green)]/20 sm:text-sm md:text-base"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      whileHover={{ y: -2 }}
    >
      {label && (
        <div className="border-b border-[var(--border)] bg-[var(--card-bg)]/80 px-3 py-2 sm:px-4 text-[10px] sm:text-xs text-[var(--muted)] truncate">
          {label}
        </div>
      )}
      <pre className="overflow-x-auto p-3 leading-relaxed sm:p-4 md:p-6 whitespace-pre-wrap break-words">
        <code className="block">{children}</code>
      </pre>
    </motion.div>
  );
}

export function JsonKey({ children }: { children: React.ReactNode }) {
  return <span className={keyClass}>{children}</span>;
}
export function JsonString({ children }: { children: React.ReactNode }) {
  return <span className={valueClass}>{children}</span>;
}
export function JsonBracket({ children }: { children: React.ReactNode }) {
  return <span className={bracketClass}>{children}</span>;
}
export function PyComment({ children }: { children: React.ReactNode }) {
  return <span className={commentClass}>{children}</span>;
}
