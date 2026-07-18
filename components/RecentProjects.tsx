"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { projects } from "@/data/portfolio";
import { Card, CardContent } from "./ui/card";

const RecentProjects = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="py-24">
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-purple-200">
            Selected work
          </p>
          <h2 className="heading mt-3">
            A small selection of <span className="text-purple">recent projects</span>
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
        </p>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.01 }}
            className="group min-w-[85vw] snap-start rounded-[1.75rem] border border-white/10 bg-white/5 p-3 shadow-xl shadow-black/20 sm:min-w-[320px] lg:min-w-[360px]"
          >
            <Card className="h-full border-0 bg-transparent shadow-none">
              <CardContent className="p-0">
                <div className={`relative overflow-hidden rounded-[1.25rem] bg-gradient-to-br ${project.accent} p-3`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={900}
                    height={600}
                    className="h-56 w-full rounded-[1rem] object-cover"
                  />
                </div>

                <div className="mt-5 space-y-4 px-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-purple-200">
                      {project.year}
                    </p>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
                      {project.techStack[0]}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/70">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.demoLink ? (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-200 transition hover:bg-purple-500/20"
                      >
                        <FaLink /> Live demo
                      </a>
                    ) : null}
                    {project.repoLink ? (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10"
                      >
                        <FaGithub /> GitHub
                      </a>
                    ) : null}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
