"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data/portfolio";
import MagicButton from "./MagicButton";

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="relative w-full pb-10 pt-20" id="contact">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <img src="/footer-grid.svg" alt="grid" className="h-full w-full opacity-50" />
      </div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 flex flex-col items-center"
      >
        <h2 className="heading lg:max-w-[45vw]">
          Ready to build something <span className="text-purple">meaningful</span> together?
        </h2>
        <p className="my-5 max-w-2xl text-center text-white/70 md:mt-10">
          I’m always interested in thoughtful collaborations, product ideas, and opportunities to turn research into real experiences.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:sarikamuthu222@gmail.com">
            <MagicButton
              title="Get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="relative z-10 mt-16 flex flex-col items-center justify-between gap-6 md:flex-row"
      >
        <p className="text-sm font-light text-white/60 md:text-base">
          © 2026 Sarika Esackimuthu. All rights reserved.
        </p>

        <div className="flex items-center gap-4 md:gap-3">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={info.label}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-black-300 bg-black/20 backdrop-blur-lg saturate-180 transition hover:bg-white/10"
            >
              <img src={info.iconSrc} alt={info.label} width={20} height={20} />
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;