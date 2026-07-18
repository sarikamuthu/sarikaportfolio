"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaLink } from "react-icons/fa";
import { publications } from "@/data/portfolio";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Publications = () => {
  const [selectedPublication, setSelectedPublication] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="publications" className="py-24">
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-purple-200">
            Research
          </p>
          <h2 className="heading mt-3">
            My <span className="text-purple">publications</span>
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
          My academic work sits at the intersection of NLP, AI, and socially relevant problem solving.
        </p>
      </div>

      <div className="space-y-5">
        {publications.map((publication, index) => {
          const isActive = selectedPublication === publication.id;

          return (
            <motion.article
              key={publication.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-2 shadow-lg shadow-black/20"
            >
              <Card className="border-0 bg-transparent shadow-none">
                <CardHeader className="gap-3">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-purple-200">
                        {publication.year}
                      </p>
                      <CardTitle className="mt-2 text-xl text-white">
                        {publication.title}
                      </CardTitle>
                      <CardDescription className="mt-2 max-w-3xl text-sm leading-7 text-white/70">
                        {publication.venue}
                      </CardDescription>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-200 transition hover:bg-purple-500/20"
                      >
                        <FaLink /> Open paper
                      </a>
                      <button
                        type="button"
                        onClick={() => setSelectedPublication(isActive ? null : publication.id)}
                        aria-expanded={isActive}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                      >
                        {isActive ? "Hide abstract" : "View abstract"}
                      </button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {publication.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive ? (
                      <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                        animate={shouldReduceMotion ? { opacity: 1, height: "auto" } : { opacity: 1, height: "auto" }}
                        exit={shouldReduceMotion ? { opacity: 0, height: 0 } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 rounded-[1rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/70">
                          {publication.abstract}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Publications;
