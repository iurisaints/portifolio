"use client";

import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="mb-6 font-semibold text-xl tracking-tight text-[var(--foreground)] sm:mb-10 sm:text-2xl md:text-3xl"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-[var(--python-blue)]">&gt;</span> {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
}
