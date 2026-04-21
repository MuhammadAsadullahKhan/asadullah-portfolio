export type Skill = {
  id: string;
  name: string;
  description: string;
  icon?: string; // We'll map these to components
  level: number;
};

export type SkillCategory = {
  id: string;
  label: string;
  skills: Skill[];
};

export const allSkills: Skill[] = [
  {
    id: "nextjs",
    name: "Next.js",
    description: "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    level: 78,
  },
  {
    id: "react",
    name: "React",
    description: "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    level: 80,
  },
  {
    id: "express",
    name: "Express.js",
    description: "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    level: 75,
  },
  {
    id: "nodejs",
    name: "Node.js",
    description: "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    level: 60,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    description: "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    level: 65,
  },
  {
    id: "typescript",
    name: "TypeScript",
    description: "Enhance JavaScript with static types, making code more understandable and reliable.",
    level: 70,
  },
  {
    id: "javascript",
    name: "JavaScript",
    description: "Create interactive and dynamic web experiences with the versatile scripting language.",
    level: 82,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    description: "Design beautiful, modern websites faster with a utility-first CSS framework.",
    level: 85,
  },
  {
    id: "mysql",
    name: "MySQL",
    description: "Design and manage robust relational databases with efficient indexing and performance.",
    level: 75,
  },
  {
    id: "vercel",
    name: "Vercel",
    description: "Optimized platform for frontend frameworks and static sites with seamless deployment.",
    level: 88,
  },
  {
    id: "netlify",
    name: "Netlify",
    description: "Powerful platform for automated builds and serverless functions for modern web apps.",
    level: 82,
  },
  {
    id: "nestjs",
    name: "Nest.js",
    description: "Create scalable and modular applications with a progressive Node.js framework.",
    level: 65,
  },
  {
    id: "html5",
    name: "HTML 5",
    description: "Structure web content beautifully with the latest version of HyperText Markup Language.",
    level: 88,
  },
  {
    id: "css3",
    name: "CSS 3",
    description: "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    level: 84,
  },
  {
    id: "reactnative",
    name: "React Native",
    description: "Build native mobile apps for iOS and Android using React and JavaScript libraries.",
    level: 60,
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    description: "Versatile frontend toolkit for developing responsive and mobile-first websites.",
    level: 80,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: allSkills.filter(s => ["nextjs", "react", "javascript", "tailwind", "html5", "css3"].includes(s.id)),
  },
  {
    id: "backend",
    label: "Backend & Data",
    skills: allSkills.filter(s => ["nodejs", "express", "mongodb"].includes(s.id)),
  },
];

export const featuredSkills = allSkills.slice(0, 6);

