"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { journeyPhases } from "@/data/portfolio";

const stageColors: Record<string, string> = {
  school: "from-amber-400/90 to-orange-500/90",
  undergrad: "from-sky-500/90 to-cyan-500/90",
  internship: "from-violet-500/90 to-fuchsia-500/90",
  job: "from-emerald-500/90 to-lime-500/90",
};

const StageIllustration = ({
  stage,
  active,
}: {
  stage: string;
  active: boolean;
}) => {
  const accent = stageColors[stage] ?? stageColors.job;

  return (
    <svg viewBox="0 0 120 120" className={`h-16 w-16 transition-transform duration-300 ${active ? "scale-110" : ""}`}>
      <circle cx="60" cy="60" r="50" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
      <path d={`M28 95c8-24 20-28 32-28 12 0 24 4 32 28`} fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="6" strokeLinecap="round" />
      <circle cx="60" cy="42" r="16" fill="url(#grad)" />
      <rect x="42" y="58" width="36" height="24" rx="8" fill="rgba(255,255,255,0.12)" />
      {stage === "internship" ? (
        <rect x="46" y="64" width="28" height="12" rx="3" fill="rgba(255,255,255,0.3)" />
      ) : null}
      {stage === "job" ? (
        <rect x="44" y="56" width="32" height="20" rx="4" fill="rgba(255,255,255,0.3)" />
      ) : null}
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={stage === "school" ? "#fbbf24" : stage === "undergrad" ? "#38bdf8" : stage === "internship" ? "#a855f7" : "#10b981"} />
          <stop offset="100%" stopColor={stage === "school" ? "#fb923c" : stage === "undergrad" ? "#06b6d4" : stage === "internship" ? "#ec4899" : "#84cc16"} />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Timeline = () => {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const activePhase = journeyPhases.find((phase) => phase.id === selectedPhase) ?? null;

  return (
    <section id="timeline" className="py-24">
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-purple-200">
            Journey
          </p>
          <h2 className="heading mt-3">
            From <span className="text-purple">school to current role</span>
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
          Each milestone shaped my way of thinking, from academic rigor to applying software engineering in the real world.
        </p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20 sm:p-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0.8 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative mb-8 hidden md:block"
        >
          <div className="absolute left-0 right-0 top-10 h-0.5 rounded-full bg-gradient-to-r from-purple-500/70 via-cyan-400/70 to-emerald-500/70" />
        </motion.div>

        <div className="grid gap-4 md:grid-cols-4">
          {journeyPhases.map((phase, index) => {
            const isActive = activePhase?.id === phase.id;

            return (
              <motion.button
                key={phase.id}
                type="button"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                onClick={() => setSelectedPhase(isActive ? null : phase.id)}
                className={`group rounded-[1.25rem] border p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  isActive
                    ? "border-purple-400/50 bg-purple-500/10 shadow-lg shadow-purple-500/10"
                    : "border-white/10 bg-black/20 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                    {phase.date}
                  </span>
                  <div className="rounded-full border border-white/10 bg-white/5 p-2">
                    <StageIllustration stage={phase.stage} active={isActive} />
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{phase.subtitle}</p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activePhase ? (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0, y: 24 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.25 }}
            className="mt-8 rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-xl shadow-black/20"
          >
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-purple-200">
                  {activePhase.location}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{activePhase.subtitle}</h3>
                <p className="mt-2 text-sm leading-7 text-white/70">{activePhase.summary}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhase(null)}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1rem] border border-white/10 bg-black/20 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-purple-200">
                  <FaCalendarAlt />
                  <span>Dates</span>
                </div>
                <p className="mt-2 text-sm leading-7 text-white/70">{activePhase.date}</p>
              </div>
              <div className="rounded-[1rem] border border-white/10 bg-black/20 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-purple-200">
                  <FaMapMarkerAlt />
                  <span>Location</span>
                </div>
                <p className="mt-2 text-sm leading-7 text-white/70">{activePhase.location}</p>
              </div>
            </div>

            <div className={`mt-6 grid gap-4 ${activePhase.score ? "md:grid-cols-2" : "md:grid-cols-1"}`}>
              {activePhase.score ? (
                <div className="rounded-[1rem] border border-white/10 bg-black/20 p-4">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-200">
                    Score / grade
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-white/70">{activePhase.score}</p>
                </div>
              ) : null}
              <div className="rounded-[1rem] border border-white/10 bg-black/20 p-4">
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-200">
                  Key achievements
                </h4>
                <ul className="mt-2 space-y-2 text-sm leading-7 text-white/70">
                  {activePhase.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-300" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default Timeline;