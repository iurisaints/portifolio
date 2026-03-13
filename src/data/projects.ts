/**
 * Projetos em Destaque — Cards de Terminal
 *
 * Preencha a array featuredProjects com seus projetos.
 * Exemplo de objeto:
 *   { title: "nome-repo", description: "...", githubUrl: "https://github.com/user/repo", technologies: ["React", "Node"], language: "typescript" }
 * language: "javascript" | "typescript" | "python" | "react" | "node" | "kotlin" | "lua"
 */

export type ProjectLanguage =
  | "javascript"
  | "typescript"
  | "python"
  | "react"
  | "node"
  | "kotlin"
  | "lua";

export interface Project {
  title: string;
  description: string;
  githubUrl: string;
  technologies: string[];
  language: ProjectLanguage;
}

const baseUrl = "https://github.com/iurisaints";

export const featuredProjects: Project[] = [
  {
    title: "labdoiuri",
    description: "AVA de cybersec — ambiente virtual de aprendizagem para estudos em segurança da informação. Build to learn.",
    githubUrl: `${baseUrl}/labdoiuri`,
    technologies: ["Cybersec", "AVA", "Educação"],
    language: "typescript",
  },
  {
    title: "vagasscrapper",
    description: "Buscador de vagas — scraper para agregação de oportunidades. Build to learn.",
    githubUrl: `${baseUrl}/vagasscrapper`,
    technologies: ["Python", "Scraping", "Automação"],
    language: "python",
  },
  {
    title: "simTCP",
    description: "Protocolo TCP gráfico — simulação visual do funcionamento do TCP. Build to learn.",
    githubUrl: `${baseUrl}/simTCP`,
    technologies: ["Redes", "TCP", "Simulação"],
    language: "python",
  },
  {
    title: "pythonStudies",
    description: "Repositório de estudos pessoais em Python. Build to learn.",
    githubUrl: `${baseUrl}/pythonStudies`,
    technologies: ["Python"],
    language: "python",
  },
  {
    title: "kotlinStudies",
    description: "Repositório de estudos pessoais em Kotlin. Build to learn.",
    githubUrl: `${baseUrl}/kotlinStudies`,
    technologies: ["Kotlin"],
    language: "kotlin",
  },
  {
    title: "luaStudies",
    description: "Repositório de estudos pessoais em Lua. Build to learn.",
    githubUrl: `${baseUrl}/luaStudies`,
    technologies: ["Lua"],
    language: "lua",
  },
];
