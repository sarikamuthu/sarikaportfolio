import Globe from "@/components/magicui/globe";
import { AnimatedListDemo } from "./creativity/ListDemo";
import { IconCloudDemo } from "./creativity/TechStackDemo";

export default function GlobeDemo() {
  return (
    <main className="relative flex-auto p-4">
      <div className="flex flex-col md:flex-row items-start justify-center gap-4">
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-#000319 px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Globe
          </span>
          <Globe className="top-28" />
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
        <IconCloudDemo />
        {/* <ClientTweetCard id="1825054260238696664" className="shadow-2xl max-h-[23rem]" /> */}
        {/* <DockThingDemo /> */}
      </div>

      <div className="flex flex-col md:flex-row items-start auto-rows-min justify-center gap-4 mt-4">
        {/* <div className="flex flex-col gap-4 ">
          <AnimatedBeamMultipleInputDemo />
          <ConfettiBasicCannon />
        </div> */}
        {/* <AnimatedBeamMultipleInputDemo /> */}
        {/* <AnimatedListDemo /> */}
       
      </div>
    </main>
  );
}



