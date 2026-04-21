export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  category: "Frontend" | "Full Stack" | "ML";
  gradient?: string;
};

// ⚠️ NEWEST FIRST — always add new projects at the TOP of this array.
export const projects: Project[] = [
  {
    id: "ai-pdf",
    name: "AI.PDF",
    tagline: "Upload PDFs and chat with them using AI — in real time.",
    description:
      "AI.PDF is a full-stack web application that lets users upload PDF documents and chat with them using AI. It combines secure authentication, PDF parsing, an interactive viewer, and real-time question answering in one clean interface.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Clerk", "Gemini API", "REST API"],
    role: "Full Stack Developer",
    image: "/projects/AIPDF.png",
    category: "Full Stack",
    gradient: "from-cyan-900 via-teal-900 to-slate-950",
  },

  {
    id: "kpk-traffic-police",
    name: "KPK Traffic Police Management System",
    tagline: "Digitizing challan and traffic violation management.",
    description:
      "A web app to digitalize and automate traffic challan workflows. Traffic officers can issue and search challans, citizens can view and pay fines online, and admins can manage users and generate reports.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    role: "Full Stack Developer",
    githubUrl:
      "https://github.com/MuhammadAsadullahKhan/KPK-Police-Traffic-Management-system",
    image: "/projects/kpktraffic.jpg",
    category: "Full Stack",
    gradient: "from-green-900 via-emerald-900 to-slate-950",
  },
  {
    id: "future-flux",
    name: "Future Flux",
    tagline: "Full-stack blogging platform with modern DX.",
    description:
      "A full-stack blogging platform built with Next.js, React, and MongoDB. Supports secure auth via Clerk, CRUD for posts, and rich categorization across topics like Technology, Culture, Food, People, Nature, and Lifestyle.",
    tech: ["Next.js", "React", "TypeScript", "MongoDB", "Clerk Auth"],
    role: "Full Stack Developer",
    liveUrl: "https://futureflux1.vercel.app/",
    githubUrl: "https://github.com/MuhammadAsadullahKhan/futureflux",
    image: "/projects/future-flux-preview.png",
    category: "Full Stack",
    gradient: "from-indigo-900 via-blue-900 to-slate-950",
  },
  {
    id: "agile-capacity-tracker",
    name: "Agile Capacity Tracker",
    tagline: "Visualize workloads and balance sprint tasks efficiently.",
    description:
      "Designed an Agile Capacity Tracker using React.js, Spring Boot, and PostgreSQL. The application features real-time updates and role-based access control, allowing teams to visualize workloads and balance tasks efficiently.",
    tech: ["React.js", "Spring Boot", "PostgreSQL", "Java"],
    role: "Full Stack Developer",
    image: "/projects/AgileCapacityTracking.jpg",
    category: "Full Stack",
    gradient: "from-purple-900 via-violet-900 to-slate-950",
  },

  {
    id: "portfolio",
    name: "Portfolio Website",
    tagline: "Personal developer portfolio with modern aesthetics.",
    description:
      "A sleek and modern developer portfolio built with Next.js , React, and Tailwind CSS. It features fully responsive layouts, multi-theme support, and smooth interactive animations managed by Framer Motion.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    role: "Frontend Developer",
    image: "/projects/Portfolioweb.png",
    category: "Frontend",
    gradient: "from-rose-900 via-pink-900 to-slate-950",
  },
];
