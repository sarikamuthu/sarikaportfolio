"use client";

import type { ConfettiRef } from "@/components/magicui/confetti";
import Confetti from "@/components/magicui/confetti";
import { useRef } from "react";

export function ConfettiBasicCannon() {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <div className="relative flex  w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-#000319 p-10 md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Confetti
      </span>

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 h-full w-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
    </div>
  );
}
