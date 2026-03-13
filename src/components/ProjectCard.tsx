"use client";

import { motion } from "framer-motion";
import type { Project, ProjectLanguage } from "@/data/projects";

const languageIcons: Record<ProjectLanguage, { label: string; color: string }> = {
  javascript: { label: "JS", color: "text-[#f7df1e]" },
  typescript: { label: "TS", color: "text-[#3178c6]" },
  python: { label: "Py", color: "text-[#3776ab]" },
  react: { label: "⚛", color: "text-[#61dafb]" },
  node: { label: "Node", color: "text-[#339933]" },
  kotlin: { label: "Kt", color: "text-[#7f52ff]" },
  lua: { label: "Lua", color: "text-[#2C2D72]" },
};

function LanguageIcon({ language }: { language: ProjectLanguage }) {
  const { label, color } = languageIcons[language] ?? languageIcons.typescript;
  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center rounded border border-[var(--border)] bg-[var(--card-bg)] font-mono text-xs font-semibold ${color}`}
      title={language}
    >
      {label}
    </span>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4 transition-all duration-300 hover:border-[var(--terminal-green)]/50 hover:shadow-[0_0_24px_-4px_rgba(0,255,65,0.2)] sm:p-5 md:p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -2 }}
    >
      {/* Scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.4) 2px,
            rgba(0,0,0,0.4) 4px
          )`,
        }}
        aria-hidden
      />
      {/* Leve ruído estático (textura sutil) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative z-0">
        <div className="mb-3 flex items-start justify-between gap-3">
          <LanguageIcon language={project.language} />
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--muted)] transition-colors hover:text-[var(--terminal-green)]"
          >
            github →
          </a>
        </div>

        <h3 className="mb-2 font-semibold text-[var(--foreground)] text-base tracking-tight">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-[var(--foreground)]/80 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded border border-[var(--border)] bg-[var(--background)]/60 px-2 py-0.5 font-mono text-xs text-[var(--muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
