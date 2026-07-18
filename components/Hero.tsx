"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";

const heroWords = [
  "Hi,",
  "I'm",
  "Sarika",
  "-",
  "navigating",
  "the",
  "universe",
  "of",
  "code,",
  "AI,",
  "products,",
  "and",
  "endless",
  "curiosity.",
];

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="hero" className="relative overflow-hidden pb-24 pt-20 sm:pt-24 lg:pt-28">
      <div>
        <Spotlight
          className="-top-40 -left-10 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black-100/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-2 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
          animate={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto w-full max-w-md lg:mx-0"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-purple-500/10 backdrop-blur-xl">
            <Image
              src="/mypic.png"
              alt="Portrait of Sarika Esackimuthu"
              width={720}
              height={900}
              priority
              className="h-[420px] w-full rounded-[1.6rem] object-cover object-top sm:h-[520px]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
          animate={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          className="flex-1 text-left"
        >
          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-purple-200">
            Software engineer • AI • product-minded
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {heroWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.06 * index }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
I build software with curiosity, solve problems with purpose, and enjoy exploring where engineering, AI, products, and business come together.          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects">
              <MagicButton
                title="Explore my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;