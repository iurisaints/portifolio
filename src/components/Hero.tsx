"use client";

import Typewriter from "typewriter-effect";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pt-24 pb-16 flex flex-col items-center justify-center md:pt-28">
      {/* Grid sutil de fundo */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--terminal-green) 1px, transparent 1px),
                            linear-gradient(90deg, var(--terminal-green) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Mobile-first: foto acima no mobile, depois colunas no desktop */}
      <div className="relative w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Foto: primeiro no mobile (acima), à direita no desktop */}
        <motion.div
          className="order-1 md:order-2 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="relative rounded-full p-1 shadow-2xl transition-shadow duration-300 hover:shadow-[0_0_30px_-2px_rgba(0,255,65,0.25)]">
            {/* Borda neon sutil */}
            <div
              className="absolute inset-0 rounded-full opacity-80"
              style={{
                boxShadow: "0 0 20px 2px rgba(0, 255, 65, 0.15), inset 0 0 20px -4px rgba(0, 255, 65, 0.08)",
                background: "linear-gradient(135deg, rgba(0,255,65,0.2) 0%, transparent 50%, rgba(55,118,171,0.15) 100%)",
              }}
            />
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden bg-[var(--card-bg)] ring-2 ring-[var(--terminal-green)]/30">
              <Image
                src="/profile.png"
                alt="Iuri Nascimento Santos"
                fill
                sizes="(max-width: 768px) 176px, 208px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Terminal: segundo no mobile (abaixo), à esquerda no desktop */}
        <motion.div
          className="order-2 md:order-1 relative w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {/* Barra do terminal */}
          <div className="flex items-center gap-2 rounded-t-xl border border-[var(--border)] border-b-0 bg-[var(--card-bg)] px-3 py-2 sm:px-4 sm:py-3">
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ff5f56]" />
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ffbd2e]" />
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-2 sm:ml-3 text-[10px] sm:text-xs text-[var(--muted)] truncate">
              python — iuri_portfolio.py
            </span>
          </div>

          {/* Área do terminal — fonte e padding responsivos */}
          <div className="rounded-b-xl border border-[var(--border)] bg-[#0d1117]/90 p-4 shadow-2xl shadow-black/50 backdrop-blur sm:p-6 md:p-8">
            <div className="min-h-[160px] sm:min-h-[200px] font-mono leading-relaxed text-xs sm:text-sm md:text-base">
              <span className="text-[var(--python-blue)]">$ </span>
              <span className="text-[var(--muted)]">python3</span>
              <span className="text-[var(--foreground)]"> iuri_portfolio.py</span>
              <br />
              <br />
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      '<span style="color: var(--python-blue)">>>> </span><span style="color: var(--terminal-green)">name</span><span style="color: var(--foreground)"> = </span><span style="color: #ce9178">"Iuri Nascimento Santos"</span>'
                    )
                    .pauseFor(800)
                    .typeString(
                      '<br/><span style="color: var(--python-blue)">>>> </span><span style="color: var(--terminal-green)">role</span><span style="color: var(--foreground)"> = </span><span style="color: #ce9178">"Especialista em Segurança da Informação"</span>'
                    )
                    .pauseFor(800)
                    .typeString(
                      '<br/><span style="color: var(--python-blue)">>>> </span><span style="color: var(--terminal-green)">location</span><span style="color: var(--foreground)"> = </span><span style="color: #ce9178">"São Leopoldo, RS"</span>'
                    )
                    .pauseFor(400)
                    .typeString(
                      '<br/><br/><span style="color: var(--muted)"># Ready to build secure systems.</span>'
                    )
                    .start();
                }}
                options={{
                  cursor: "_",
                  cursorClassName: "text-[var(--terminal-green)] animate-pulse",
                  delay: 40,
                  skipAddStyles: true,
                }}
              />
            </div>
          </div>

          <motion.p
            className="mt-6 md:mt-8 text-center md:text-left text-[var(--muted)] text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 0.8 }}
          >
            Scroll para explorar
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
