export type ProjectItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  repoLink?: string;
  techStack: string[];
  year: string;
  accent: string;
};

export type PublicationItem = {
  id: number;
  title: string;
  venue: string;
  year: string;
  link: string;
  abstract: string;
  tags: string[];
};

export type JourneyPhase = {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  stage: "school" | "JuniorCollege" |"undergrad" | "internship" | "job";
  score?: string;
  achievements: string[];
  summary: string;
  planetColor?: string;
  orbitingBadges?: string[];
};

export type SocialLink = {
  id: number;
  label: string;
  href: string;
  iconSrc: string;
};

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Real-time haze removal and object detection",
    description:
      "A surveillance-focused system that restores clarity in hazy footage while detecting vehicles and obstacles in real time.",
    image: "/dehazing.webp",
    repoLink: "https://github.com/sarikamuthu/Real-time-haze-removal-and-object-detection-for-vehicle-surveillance",
    techStack: ["Python", "Computer Vision", "Deep Learning"],
    year: "2023",
    accent: "from-fuchsia-500/40 to-cyan-500/20",
  },
  {
    id: 2,
    title: "AMS — Attendance management system",
    description:
      "A practical attendance workflow for schools and institutions that simplifies tracking and reporting with a clean dashboard.",
    image: "/ams.png",
    repoLink: "https://github.com/sarikamuthu/Attendance-Management-System",
    techStack: ["React", "Node.js", "MongoDB"],
    year: "2022",
    accent: "from-purple-500/30 to-indigo-500/20",
  },
  {
    id: 3,
    title: "SSN GPA/CGPA calculator",
    description:
      "A campus-first calculator built to make semester planning quick and transparent for SSN students.",
    image: "/cgpa.png",
    demoLink: "https://sarikamuthu.github.io/SSN-GPA-CALCULATOR/index.html",
    techStack: ["JavaScript", "HTML", "CSS"],
    year: "2021",
    accent: "from-cyan-500/30 to-blue-500/20",
  },
  {
    id: 4,
    title: "Depression detection from social media text",
    description:
      "A transformer-based NLP project that classifies social media text into emotion-aware categories for mental health insight.",
    image: "/albert.png",
    repoLink: "https://github.com/sarikamuthu/Detecting-Signs-of-Depression-from-social-Media-Text",
    techStack: ["Transformers", "PyTorch", "NLP"],
    year: "2022",
    accent: "from-emerald-500/30 to-teal-500/20",
  },
];

export const publications: PublicationItem[] = [
  {
    id: 1,
    title: "Hate Speech Detection using Transformer Model",
    venue: "Workshop on Challenges and Applications of Automated Extraction of Socio-political Events from Text",
    year: "2023",
    link: "https://aclanthology.org/2023.case-1.11/",
    abstract:
      "This work explores how transformer-based models can identify hate speech in image-embedded text and connect it to the entities it targets.",
    tags: ["NLP", "Transformers", "Multimodal"],
  },
  {
    id: 2,
    title: "Depression Detection System from Social Media Text using Transformer Models",
    venue: "Language Technology for Equality, Diversity and Inclusion workshop",
    year: "2022",
    link: "https://aclanthology.org/2022.ltedi-1.26/",
    abstract:
      "A multi-class depression classification system that uses transformers to find signals of distress in online text.",
    tags: ["Mental Health", "BERT", "Classification"],
  },
  {
    id: 3,
    title: "Troll Meme Classification in Tamil using Transformer Models",
    venue: "Speech and Language Technologies for Dravidian Languages workshop",
    year: "2022",
    link: "https://aclanthology.org/2022.dravidianlangtech-1.21/",
    abstract:
      "The project compares BERT, ALBERT, and XLNet for detecting troll memes in Tamil and highlights the promise of transformer-based multilingual modeling.",
    tags: ["Multilingual", "Vision+Language", "Transformers"],
  },
];

export const journeyPhases: JourneyPhase[] = [
  {
    id: 1,
    title: "School years",
    subtitle: "SIES High School",
    date: "2006 – 2018",
    location: "Mumbai",
    stage: "school",
    score: "95.80% SSC",
    achievements: ["Topper in Maths, Science, and Sanskrit", "Recognized for standing first in Mumbai South Zone"],
    summary: "A strong foundation in academics and curiosity that set the tone for my technical path.",
    planetColor: "#f59e0b",
    orbitingBadges: ["Math", "Science", "Sanskrit"],
  },
  {
    id: 2,
    title: "Junior college",
    subtitle: "Ramnivas Ruia Junior College",
    date: "2018 – 2020",
    location: "Mumbai",
    stage: "JuniorCollege",
    score: "93.08% HSC",
    achievements: ["Top 1% performer in Maharashtra State Board Examination"],
    summary: "I deepened my problem-solving approach while preparing for engineering and research-oriented work.",
    planetColor: "#fb923c",
    orbitingBadges: ["Physics", "Chemistry", "Leadership"],
  },
  {
    id: 3,
    title: "Engineering journey",
    subtitle: "SSN College of Engineering",
    date: "2020 – 2024",
    location: "Chennai",
    stage: "undergrad",
    score: "CGPA 9.138",
    achievements: ["Vice-chair of ACM student chapter", "Student Placement Coordinator", "Built a strong base in software engineering and research"],
    summary: "My undergraduate years were shaped by leadership, technical depth, and a growing interest in applied AI.",
    planetColor: "#8b5cf6",
    orbitingBadges: ["React", "Python", "AI"],
  },
  {
  id: 4, // adjust to fit your existing id sequence
  stage: "internship",
  date: "Aug 2023 - Dec 2023",
  title: "Global Governance Initiative",
  subtitle: "Analyst - Technology & Management",
  location: "Remote",
  summary:
    "Supported GGI's technology needs as an Analyst, keeping core systems stable while automating manual workflows.",
  achievements: [
    "Engaged in solving tech issues focused on promoting good governance and resolving various organizational issues related to tech",
    "Maintained and improved existing projects, efficiently resolving bugs to ensure smooth operation and stability",
    "Developed new features in the existing GGI application to improve user experience",
    "Implemented automated systems including access deferral and certificate automation to eliminate manual work",
  ],
},
  {
    id: 5,
    title: "Current chapter",
    subtitle: "Associate Software Engineer, Fidelity Investments",
    date: "Aug 2024 – Present",
    location: "Chennai",
    stage: "job",
    achievements: ["Full-stack engineering exposure across Angular, Java, and databases", "Completed LEAP training for modern product delivery"],
    summary: "I’m now turning my academic background into real-world product impact through practical engineering work.",
    planetColor: "#22c55e",
    orbitingBadges: ["Angular", "Java", "Cloud"],
  },
];

export const socialMedia: SocialLink[] = [
  {
    id: 1,
    label: "GitHub",
    href: "https://github.com/sarikamuthu",
    iconSrc: "/git.svg",
  },
  {
    id: 2,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sarika-esackimuthu/",
    iconSrc: "/link.svg",
  },
];

export const resumeUrl = "/sarika-resume.pdf";
