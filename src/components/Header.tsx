"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#sobre", label: "sobre" },
  { href: "#trajetoria", label: "trajetória" },
  { href: "#educacao", label: "educação" },
  { href: "#skills", label: "skills" },
  { href: "#projetos", label: "projetos" },
  { href: "#contato", label: "contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
        <a
          href="#"
          className="font-semibold text-[var(--terminal-green)] text-sm tracking-tight transition-opacity hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          iuri@portfolio
        </a>

        {/* Desktop: links inline */}
        <ul className="hidden md:flex md:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--foreground)]/80 transition-colors hover:text-[var(--terminal-green)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile: botão hambúrguer */}
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[var(--border)] bg-transparent text-[var(--foreground)] transition-colors hover:border-[var(--terminal-green)]/40 hover:bg-[var(--card-bg)] md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <motion.span
            className="h-0.5 w-5 rounded-full bg-current"
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="h-0.5 w-5 rounded-full bg-current"
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="h-0.5 w-5 rounded-full bg-current"
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </nav>

      {/* Mobile: menu dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-0 right-0 top-full border-b border-[var(--border)] bg-[var(--background)]/98 backdrop-blur-md md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ul className="flex flex-col gap-0 px-4 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-lg py-3 text-sm text-[var(--foreground)]/90 transition-colors hover:bg-[var(--card-bg)] hover:text-[var(--terminal-green)]"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
