"use client";

import { motion } from "framer-motion";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.06 } },
        hidden: {},
      }}
    >
      {featuredProjects.map((project, index) => (
        <ProjectCard key={project.githubUrl} project={project} index={index} />
      ))}
    </motion.div>
  );
}
