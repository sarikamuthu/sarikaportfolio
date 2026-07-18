import { IconCloudDemo } from "./creativity/TechStackDemo";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-20">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:justify-between">
        <div className="max-w-2xl rounded-[1.5rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20">
  <p className="text-sm uppercase tracking-[0.35em] text-purple-200">
    About
  </p>

  <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
  </h2>

  <div className="mt-5 space-y-6 text-lg leading-8 text-white/70">
    <p>
      I'm a software engineer by profession, a curious explorer by nature,
      and a professional overthinker by talent.
    </p>

    <p>
      By day, I build backend systems and solve engineering problems. Beyond
      work, I'm usually exploring AI, product management, business strategy,
      startups, or whatever fascinating rabbit hole curiosity leads me to
      next.
    </p>

    <p>
      I love connecting technology with business, turning complex problems
      into simple solutions, and understanding not just how things work, but
      why they matter.
    </p>

    <p>
      My goal is simple: build products that make an impact, keep learning
      every day, and eventually grow into a leader who inspires others. Currently, I'm focused on 
      growing into a technology leader who can bridge engineering excellence with business strategy and product vision.
    </p>
  </div>
</div>

        <div className="flex-1">
          <IconCloudDemo />
        </div>
      </div>
    </section>
  );
}



