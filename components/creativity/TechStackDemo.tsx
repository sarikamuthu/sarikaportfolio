import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex min-h-[320px] w-full items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 px-6 py-8 shadow-xl shadow-black/20 sm:min-h-[360px] lg:min-h-[420px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_45%)]" />
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
