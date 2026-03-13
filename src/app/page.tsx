import { CodeBlockCard } from "@/components/CodeBlockCard";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Section } from "@/components/Section";
import { SectionCard } from "@/components/SectionCard";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      <Section id="sobre" title="Sobre">
        <div className="grid gap-6 sm:grid-cols-1">
          <SectionCard title="quem_sou" delay={0.1}>
            <p className="text-[var(--foreground)]/90 leading-relaxed">
              Especialista em Segurança da Informação com foco em proteção de
              ativos, análise de vulnerabilidades e boas práticas de desenvolvimento
              seguro. Atuo na interseção entre infraestrutura, desenvolvimento e
              compliance.
            </p>
          </SectionCard>
          <SectionCard title="objetivo" delay={0.2}>
            <p className="text-[var(--foreground)]/90 leading-relaxed">
              Construir sistemas mais seguros e conscientizar times sobre
              segurança desde o design até a operação. Interesse em DevSecOps,
              pentest e gestão de riscos.
            </p>
          </SectionCard>
        </div>
      </Section>

      <Section id="trajetoria" title="Trajetória">
        <div className="flex flex-col gap-4 sm:gap-6">
          <CodeBlockCard delay={0.05} label="experience[0] — atual">
            <span className="text-[var(--muted)]"># Professor de Desenvolvimento · La Salle (Canoas) · SENAC Unisinos</span>
            <br />
            <br />
            <span className="text-[var(--foreground)]/70">{`{`}</span>
            <br />
            <span className="text-[var(--terminal-green)]">  &quot;role&quot;</span>
            <span className="text-[var(--foreground)]/70">: </span>
            <span className="text-[#ce9178]">&quot;Professor de Desenvolvimento&quot;</span>
            <span className="text-[var(--foreground)]/70">,</span>
            <br />
            <span className="text-[var(--terminal-green)]">  &quot;company&quot;</span>
            <span className="text-[var(--foreground)]/70">: </span>
            <span className="text-[#ce9178]">&quot;Universidade La Salle (Canoas) · SENAC Unisinos&quot;</span>
            <span className="text-[var(--foreground)]/70">,</span>
            <br />
            <span className="text-[var(--terminal-green)]">  &quot;period&quot;</span>
            <span className="text-[var(--foreground)]/70">: </span>
            <span className="text-[#ce9178]">&quot;Atual&quot;</span>
            <span className="text-[var(--foreground)]/70">,</span>
            <br />
            <span className="text-[var(--terminal-green)]">  &quot;tech&quot;</span>
            <span className="text-[var(--foreground)]/70">: [</span>
            <span className="text-[var(--python-blue)]">&quot;Node.js&quot;</span>
            <span className="text-[var(--foreground)]/70">, </span>
            <span className="text-[var(--python-blue)]">&quot;React Native&quot;</span>
            <span className="text-[var(--foreground)]/70">, </span>
            <span className="text-[var(--python-blue)]">&quot;TypeScript&quot;</span>
            <span className="text-[var(--foreground)]/70">, </span>
            <span className="text-[var(--python-blue)]">&quot;MySQL&quot;</span>
            <span className="text-[var(--foreground)]/70">]</span>
            <br />
            <span className="text-[var(--foreground)]/70">{`}`}</span>
          </CodeBlockCard>

          <CodeBlockCard delay={0.15} label="experience[1] — 2022-2023">
            <span className="text-[var(--muted)]"># Professor Substituto · IFRS Campus Sertão</span>
            <br />
            <span className="text-[var(--muted)]"># Período: 2022 - 2023</span>
            <br />
            <br />
            <span className="text-[var(--foreground)]/70">{`{`}</span>
            <br />
            <span className="text-[var(--terminal-green)]">  &quot;role&quot;</span>
            <span className="text-[var(--foreground)]/70">: </span>
            <span className="text-[#ce9178]">&quot;Professor Substituto&quot;</span>
            <span className="text-[var(--foreground)]/70">,</span>
            <br />
            <span className="text-[var(--terminal-green)]">  &quot;company&quot;</span>
            <span className="text-[var(--foreground)]/70">: </span>
            <span className="text-[#ce9178]">&quot;IFRS — Campus Sertão&quot;</span>
            <span className="text-[var(--foreground)]/70">,</span>
            <br />
            <span className="text-[var(--terminal-green)]">  &quot;period&quot;</span>
            <span className="text-[var(--foreground)]/70">: </span>
            <span className="text-[#ce9178]">&quot;2022 - 2023&quot;</span>
            <br />
            <span className="text-[var(--foreground)]/70">{`}`}</span>
          </CodeBlockCard>

          <CodeBlockCard delay={0.25} label="experience[2] — histórico">
            <span className="text-[var(--muted)]"># Analista Programador · B5S Tecnologia</span>
            <br />
            <span className="text-[var(--muted)]"># Clientes: Sicredi, McDonald&apos;s</span>
            <br />
            <br />
            <span className="text-[var(--foreground)]/70">{`{`}</span>
            <br />
            <span className="text-[var(--terminal-green)]">  &quot;role&quot;</span>
            <span className="text-[var(--foreground)]/70">: </span>
            <span className="text-[#ce9178]">&quot;Analista Programador&quot;</span>
            <span className="text-[var(--foreground)]/70">,</span>
            <br />
            <span className="text-[var(--terminal-green)]">  &quot;company&quot;</span>
            <span className="text-[var(--foreground)]/70">: </span>
            <span className="text-[#ce9178]">&quot;B5S Tecnologia&quot;</span>
            <span className="text-[var(--foreground)]/70">,</span>
            <br />
            <span className="text-[var(--terminal-green)]">  &quot;clients&quot;</span>
            <span className="text-[var(--foreground)]/70">: [</span>
            <span className="text-[var(--python-blue)]">&quot;Sicredi&quot;</span>
            <span className="text-[var(--foreground)]/70">, </span>
            <span className="text-[var(--python-blue)]">&quot;McDonald&apos;s&quot;</span>
            <span className="text-[var(--foreground)]/70">]</span>
            <br />
            <span className="text-[var(--foreground)]/70">{`}`}</span>
          </CodeBlockCard>
        </div>
      </Section>

      <Section id="educacao" title="Educação">
        <div className="flex flex-col gap-4 sm:gap-6">
          <CodeBlockCard delay={0.1} label="education[0]">
            <span className="text-[var(--muted)]"># Licenciado em Ciência da Computação</span>
            <br />
            <span className="text-[var(--muted)]"># IFFAR — Instituto Federal Farroupilha</span>
            <br />
            <br />
            <span className="text-[var(--foreground)]/70">{`{`}</span>
            <br />
            <span className="text-[var(--terminal-green)]">  &quot;degree&quot;</span>
            <span className="text-[var(--foreground)]/70">: </span>
            <span className="text-[#ce9178]">&quot;Licenciatura em Ciência da Computação&quot;</span>
            <span className="text-[var(--foreground)]/70">,</span>
            <br />
            <span className="text-[var(--terminal-green)]">  &quot;institution&quot;</span>
            <span className="text-[var(--foreground)]/70">: </span>
            <span className="text-[#ce9178]">&quot;IFFAR&quot;</span>
            <br />
            <span className="text-[var(--foreground)]/70">{`}`}</span>
          </CodeBlockCard>

          <CodeBlockCard delay={0.2} label="education[1]">
            <span className="text-[var(--muted)]"># Especialização em Segurança da Informação</span>
            <br />
            <br />
            <span className="text-[var(--foreground)]/70">{`{`}</span>
            <br />
            <span className="text-[var(--terminal-green)]">  &quot;degree&quot;</span>
            <span className="text-[var(--foreground)]/70">: </span>
            <span className="text-[#ce9178]">&quot;Especialista em Segurança da Informação&quot;</span>
            <span className="text-[var(--foreground)]/70">,</span>
            <br />
            <span className="text-[var(--terminal-green)]">  &quot;institution&quot;</span>
            <span className="text-[var(--foreground)]/70">: </span>
            <span className="text-[#ce9178]">&quot;Pós-graduação&quot;</span>
            <br />
            <span className="text-[var(--foreground)]/70">{`}`}</span>
          </CodeBlockCard>
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid gap-6 sm:grid-cols-2">
          <SectionCard title="development" delay={0.1}>
            <ul className="space-y-2 text-sm text-[var(--foreground)]/90">
              <li className="flex items-center gap-2">
                <span className="text-[var(--terminal-green)]">→</span> fullstack development
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--terminal-green)]">→</span> mysql
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--terminal-green)]">→</span> ui/ux
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--terminal-green)]">→</span> pitch
              </li>
            </ul>
          </SectionCard>
          <SectionCard title="tecnologias" delay={0.2}>
            <ul className="space-y-2 text-sm text-[var(--foreground)]/90">
              <li className="flex items-center gap-2">
                <span className="text-[var(--terminal-green)]">→</span> Node.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--terminal-green)]">→</span> React Native
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--terminal-green)]">→</span> Typescript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--terminal-green)]">→</span> Docência
              </li>
            </ul>
          </SectionCard>
        </div>
      </Section>

      <Section id="projetos" title="Projetos em Destaque">
        <ProjectsGrid />
      </Section>

      <Section id="contato" title="Contato">
        <SectionCard title="links" delay={0.1}>
          <p className="mb-4 text-[var(--foreground)]/90">
            Você pode me encontrar em:
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:contato@iurisantos.dev"
              className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm text-[var(--terminal-green)] transition-colors hover:border-[var(--terminal-green)]/50 hover:bg-[var(--terminal-green)]/5"
            >
              email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm text-[var(--python-blue)] transition-colors hover:border-[var(--python-blue)]/50 hover:bg-[var(--python-blue)]/5"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm text-[var(--foreground)] transition-colors hover:border-[var(--terminal-green)]/50 hover:bg-[var(--terminal-green)]/5"
            >
              GitHub
            </a>
          </div>
        </SectionCard>
      </Section>

      <footer className="border-t border-[var(--border)] px-4 py-8 text-center text-sm text-[var(--muted)]">
        <p>
          <span className="text-[var(--terminal-green)]">Iuri Nascimento Santos</span>
          {" · "}
          São Leopoldo, RS
        </p>
      </footer>
    </div>
  );
}
