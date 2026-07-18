"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { journeyPhases } from "@/data/portfolio";
import Timeline from "./Timeline";

type PlanetKind = "moon" | "venus" | "saturn" | "neptune" | "mars";

// NOTE: stage keys must match the `stage` field on each entry in journeyPhases.
// "internship" is kept as the key for the SSN College entry to avoid renaming
// existing data — it just displays a different label/planet now. The new
// "ggi" stage is for the Global Governance Initiative internship (see bottom
// of this file for the data object to add to data/portfolio.ts).
const planetVisuals: Record<string, { kind: PlanetKind; size: number; label: string }> = {
  school: { kind: "moon", size: 72, label: "SIES High School" },
  JuniorCollege: { kind: "venus", size: 96, label: "Ramnivas Ruia Junior College" },
  undergrad: { kind: "saturn", size: 152, label: "SSN College of Engineering" },
  internship: { kind: "neptune", size: 108, label: "Global Governance Initiative" },
  job: { kind: "mars", size: 88, label: "Fidelity Investments - SDE" },
};

// Arc layout across the stage — five stops now. Tweak freely.
const planetPositions = [
  { left: 8, top: 66 },
  { left: 26, top: 26 },
  { left: 50, top: 60 },
  { left: 72, top: 24 },
  { left: 90, top: 58 },
];

const TRAVEL_SECONDS = 2.2; // time to fly between planets
const DWELL_MS = 1400; // pause once arrived, before moving on

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* ---------------- Planets ---------------- */

function Moon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-[0_0_18px_rgba(200,200,210,0.35)]">
      <defs>
        <radialGradient id="moonBody" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#f6f6f8" />
          <stop offset="55%" stopColor="#c7c9d1" />
          <stop offset="100%" stopColor="#84869a" />
        </radialGradient>
        <radialGradient id="moonShade" cx="72%" cy="78%" r="85%">
          <stop offset="35%" stopColor="transparent" />
          <stop offset="100%" stopColor="#12131c" stopOpacity="0.55" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#moonBody)" />
      <circle cx="34" cy="38" r="7" fill="#9a9ba6" opacity="0.5" />
      <circle cx="63" cy="30" r="4" fill="#9a9ba6" opacity="0.45" />
      <circle cx="67" cy="58" r="9" fill="#9a9ba6" opacity="0.45" />
      <circle cx="40" cy="67" r="5" fill="#9a9ba6" opacity="0.4" />
      <circle cx="55" cy="52" r="3" fill="#9a9ba6" opacity="0.4" />
      <circle cx="50" cy="50" r="46" fill="url(#moonShade)" />
    </svg>
  );
}

function Venus({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-[0_0_18px_rgba(250,204,150,0.4)]">
      <defs>
        <radialGradient id="venusBody" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#fff3d0" />
          <stop offset="50%" stopColor="#f0c47a" />
          <stop offset="100%" stopColor="#c98a3d" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#venusBody)" />
      <path d="M12 46 Q30 38 50 44 Q70 50 88 42" stroke="#e8b565" strokeWidth="5" fill="none" opacity="0.5" strokeLinecap="round" />
      <path d="M16 60 Q34 66 52 60 Q70 54 84 62" stroke="#d99f4d" strokeWidth="4" fill="none" opacity="0.45" strokeLinecap="round" />
      <ellipse cx="38" cy="30" rx="16" ry="5" fill="#ffffff" opacity="0.35" />
    </svg>
  );
}

function Saturn({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 140 140" className="drop-shadow-[0_0_22px_rgba(250,204,140,0.35)]">
      <defs>
        <radialGradient id="saturnBody" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#fff3d6" />
          <stop offset="55%" stopColor="#e8c384" />
          <stop offset="100%" stopColor="#b8873f" />
        </radialGradient>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f4dca6" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#f4dca6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f4dca6" stopOpacity="0.15" />
        </linearGradient>
        <clipPath id="frontRing">
          <rect x="0" y="70" width="140" height="70" />
        </clipPath>
      </defs>

      {/* ring passing behind the sphere */}
      <ellipse cx="70" cy="70" rx="66" ry="20" fill="none" stroke="url(#ringGrad)" strokeWidth="7" transform="rotate(-12 70 70)" />

      <circle cx="70" cy="66" r="40" fill="url(#saturnBody)" />

      {/* ring passing in front of the sphere */}
      <g clipPath="url(#frontRing)">
        <ellipse cx="70" cy="70" rx="66" ry="20" fill="none" stroke="url(#ringGrad)" strokeWidth="9" transform="rotate(-12 70 70)" />
      </g>
    </svg>
  );
}

function Neptune({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-[0_0_20px_rgba(59,130,246,0.45)]">
      <defs>
        <radialGradient id="neptuneBody" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#8fc3ff" />
          <stop offset="50%" stopColor="#3b7dd8" />
          <stop offset="100%" stopColor="#1b3f8f" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#neptuneBody)" />
      <ellipse cx="42" cy="46" rx="34" ry="7" fill="#ffffff" opacity="0.12" transform="rotate(-8 42 46)" />
      <ellipse cx="58" cy="60" rx="28" ry="6" fill="#0c2050" opacity="0.35" transform="rotate(6 58 60)" />
      <circle cx="63" cy="42" r="6" fill="#0c2050" opacity="0.4" />
    </svg>
  );
}

function Mars({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-[0_0_18px_rgba(248,113,113,0.4)]">
      <defs>
        <radialGradient id="marsBody" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#ffb08a" />
          <stop offset="50%" stopColor="#d9603c" />
          <stop offset="100%" stopColor="#8f3018" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#marsBody)" />
      <circle cx="36" cy="42" r="8" fill="#7a260f" opacity="0.4" />
      <circle cx="60" cy="58" r="6" fill="#7a260f" opacity="0.35" />
      <ellipse cx="55" cy="34" rx="10" ry="4" fill="#ffe4d6" opacity="0.5" />
    </svg>
  );
}

function PlanetVisual({ kind, size }: { kind: PlanetKind; size: number }) {
  if (kind === "moon") return <Moon size={size} />;
  if (kind === "venus") return <Venus size={size} />;
  if (kind === "saturn") return <Saturn size={size} />;
  if (kind === "neptune") return <Neptune size={size} />;
  return <Mars size={size} />;
}

/* ---------------- Background ---------------- */

function Starfield({ dense = false }: { dense?: boolean }) {
  const count = dense ? 70 : 50;
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        id: index,
        size: 1 + (index % 3),
        left: `${(index * 13) % 100}%`,
        top: `${(index * 19) % 100}%`,
        delay: `${(index % 10) * 0.3}s`,
        duration: `${2.4 + (index % 5) * 0.5}s`,
      })),
    [count]
  );

  const shootingStars = useMemo(
    () =>
      Array.from({ length: 4 }, (_, index) => ({
        id: index,
        top: `${10 + index * 18}%`,
        delay: `${index * 3.5}s`,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),transparent_45%)]" />
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white/90"
          style={{
            width: star.size,
            height: star.size,
            left: star.left,
            top: star.top,
            animation: `sj-twinkle ${star.duration} ease-in-out ${star.delay} infinite`,
          }}
        />
      ))}
      {shootingStars.map((star) => (
        <span
          key={star.id}
          className="absolute h-px w-24 bg-gradient-to-r from-white via-white/70 to-transparent"
          style={{ top: star.top, left: "-6rem", animation: `sj-shoot 6s linear ${star.delay} infinite` }}
        />
      ))}
      <div className="absolute left-[10%] top-[12%] h-36 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-[8%] right-[8%] h-44 w-56 rounded-full bg-cyan-500/20 blur-3xl" />

      <style jsx>{`
        @keyframes sj-twinkle {
          0%, 100% { opacity: 0.25; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes sj-shoot {
          0% { transform: translate(0, 0); opacity: 0; }
          5% { opacity: 1; }
          20% { transform: translate(70vw, 24vh); opacity: 0; }
          100% { transform: translate(70vw, 24vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ---------------- Rocket ---------------- */

function Rocket({ leftPercent, topPercent }: { leftPercent: number | import("framer-motion").MotionValue<number>; topPercent: number | import("framer-motion").MotionValue<number> }) {
  const left = typeof leftPercent === "number" ? `${leftPercent}%` : useMotionTemplate`${leftPercent}%`;
  const top = typeof topPercent === "number" ? `${topPercent}%` : useMotionTemplate`${topPercent}%`;

  return (
    <motion.div
      className="pointer-events-none absolute z-30"
      style={{ left, top, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transform: "rotate(-32deg)" }}
      >
        <svg width={42} height={70} viewBox="0 0 46 78" className="drop-shadow-[0_0_14px_rgba(34,211,238,0.6)]">
          <defs>
            <linearGradient id="rocketBody" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e8edf5" />
              <stop offset="55%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#c7d0de" />
            </linearGradient>
            <radialGradient id="rocketWindow" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#bdf3ff" />
              <stop offset="60%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0ea5c7" />
            </radialGradient>
            <linearGradient id="flameOuter" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffd166" />
              <stop offset="100%" stopColor="#ff6b35" />
            </linearGradient>
          </defs>

          {/* fins */}
          <path d="M12 52 L2 72 L15 64 Z" fill="#fb7185" />
          <path d="M34 52 L44 72 L31 64 Z" fill="#fb7185" />

          {/* body */}
          <path
            d="M23 2 C34 12 36 30 34 48 C34 54 30 58 23 58 C16 58 12 54 12 48 C10 30 12 12 23 2 Z"
            fill="url(#rocketBody)"
            stroke="#c7d0de"
            strokeWidth="1"
          />

          {/* nose cone accent */}
          <path d="M23 2 C27 8 30 16 31 24 C26 22 20 22 15 24 C16 16 19 8 23 2 Z" fill="#fb7185" opacity="0.9" />

          {/* window */}
          <circle cx="23" cy="32" r="8" fill="url(#rocketWindow)" stroke="#ffffff" strokeWidth="2" />
          <circle cx="20" cy="29" r="2.2" fill="#ffffff" opacity="0.85" />

          {/* base ring */}
          <rect x="14" y="55" width="18" height="5" rx="2.5" fill="#c7d0de" />

          {/* flickering flame */}
          <motion.g
            animate={{ scaleY: [1, 1.25, 0.9, 1.15, 1], opacity: [0.85, 1, 0.8, 1, 0.85] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "23px 58px" }}
          >
            <path d="M17 60 C17 68 20 76 23 80 C26 76 29 68 29 60 Z" fill="url(#flameOuter)" />
            <path d="M20 60 C20 66 21.5 71 23 74 C24.5 71 26 66 26 60 Z" fill="#ffe066" />
          </motion.g>
        </svg>
      </motion.div>
      <div className="absolute left-1/2 top-1/2 h-2 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/70 blur-lg" />
    </motion.div>
  );
}

/* ---------------- Main ---------------- */

export default function SpaceJourney() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { amount: 0.35, once: false });
  const [selectedPhaseId, setSelectedPhaseId] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const leftMV = useMotionValue(planetPositions[0].left);
  const topMV = useMotionValue(planetPositions[0].top);

  const selectedPhase = useMemo(
    () => journeyPhases.find((phase) => phase.id === selectedPhaseId) ?? null,
    [selectedPhaseId]
  );

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (!isInView || selectedPhaseId !== null) return;

    let cancelled = false;

    const runLoop = async () => {
      let index = activeIndex;
      while (!cancelled) {
        const target = planetPositions[index % planetPositions.length];
        const leftControl = animate(leftMV, target.left, { duration: TRAVEL_SECONDS, ease: "easeInOut" });
        const topControl = animate(topMV, target.top, { duration: TRAVEL_SECONDS, ease: "easeInOut" });
        await Promise.all([leftControl, topControl]);
        if (cancelled) return;
        setActiveIndex(index % planetPositions.length);
        await sleep(DWELL_MS);
        index += 1;
      }
    };

    runLoop();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, selectedPhaseId, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <Timeline />;
  }

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#040816] py-24 sm:py-28"
    >
      <Starfield />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl pt-10">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Life Journey</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">From school to current milestone</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
            A rocket touring each milestone, one stop at a time.
          </p>
        </div>

        <div className="relative mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-8">
          <div className="relative h-[520px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(11,18,30,0.85),rgba(2,6,23,1))] sm:h-[600px]">
            <Starfield dense />

            {journeyPhases.map((phase, index) => {
              const visual = planetVisuals[phase.stage] ?? planetVisuals.job;
              const position = planetPositions[index] ?? planetPositions[planetPositions.length - 1];
              const isActive = activeIndex === index && selectedPhaseId === null;
              const isSelected = selectedPhaseId === phase.id;

              return (
                <motion.button
                  key={phase.id}
                  type="button"
                  onClick={() => setSelectedPhaseId(phase.id)}
                  className="absolute z-20 flex flex-col items-center gap-2"
                  style={{ left: `${position.left}%`, top: `${position.top}%`, translateX: "-50%", translateY: "-50%" }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  animate={{ scale: isActive || isSelected ? 1.08 : 1 }}
                  aria-label={`View ${visual.label}`}
                >
                  <motion.div
                    animate={{ opacity: isActive || isSelected ? 0.9 : 0.45, scale: isActive ? 1.15 : 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 -z-10 rounded-full blur-2xl"
                    style={{ background: "radial-gradient(circle, rgba(255,255,255,0.35), transparent 70%)" }}
                  />
                  <PlanetVisual kind={visual.kind} size={visual.size} />
                  <span className="max-w-[9rem] rounded-full border border-white/10 bg-black/40 px-3 py-1 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                    {visual.label}
                  </span>
                </motion.button>
              );
            })}

            <Rocket leftPercent={leftMV} topPercent={topMV} />

            <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              Tap any planet to explore the story
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedPhase ? (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhaseId(null)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              aria-label="Close details"
            />
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.24 }}
              className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-[1.6rem] border border-white/10 bg-[#06111f]/90 p-6 shadow-2xl shadow-black/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">{selectedPhase.location}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{selectedPhase.subtitle}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/70">{selectedPhase.summary}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPhaseId(null)}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80"
                >
                  Close
                </button>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-[1rem] border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-cyan-200">
                    <FaCalendarAlt />
                    <span>Dates</span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-white/70">{selectedPhase.date}</p>
                </div>
                <div className="rounded-[1rem] border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-cyan-200">
                    <FaMapMarkerAlt />
                    <span>Location</span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-white/70">{selectedPhase.location}</p>
                </div>
              </div>

              <div className={`mt-6 grid gap-4 ${selectedPhase.score ? "md:grid-cols-2" : "md:grid-cols-1"}`}>
                {selectedPhase.score ? (
                  <div className="rounded-[1rem] border border-white/10 bg-black/20 p-4">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Score / grade</h4>
                    <p className="mt-2 text-sm leading-7 text-white/70">{selectedPhase.score}</p>
                  </div>
                ) : null}
                <div className="rounded-[1rem] border border-white/10 bg-black/20 p-4">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Key achievements</h4>
                  <ul className="mt-2 space-y-2 text-sm leading-7 text-white/70">
                    {selectedPhase.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
