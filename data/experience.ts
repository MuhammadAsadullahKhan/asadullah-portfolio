export type Experience = {
  id: string;
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  type: "Internship" | "Role";
  summary: string;
  technologies: string[];
  highlights: string[];
};

export const experience: Experience[] = [
  {
    id: "arch-ml",
    role: "Machine Learning Intern",
    company: "Arch Technologies",
    location: "Islamabad, Pakistan",
    start: "June 2025",
    end: "August 2025",
    type: "Internship",
    summary:
      "Applied core ML concepts to build and ship small production-ready models.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    highlights: [
      "Built an email spam classifier using NLP techniques to filter spam from real messages.",
      "Implemented an MNIST digit recognizer using a deep learning model for handwritten digits.",
      "Created a housing price prediction model with regression techniques for real estate data.",
      "Developed an Iris flower classification model as a clean, well-documented ML baseline.",
    ],
  },
  {
    id: "learning-lab",
    role: "Video Editor",
    company: "Learning Lab",
    location: "Haripur, KPK, Pakistan",
    start: "July 2024",
    end: "September 2024",
    type: "Internship",
    summary:
      "Blended storytelling and motion design for educational and commercial video content.",
    technologies: ["Adobe Premiere Pro", "Motion Graphics"],
    highlights: [
      "Edited coffee ads, animal documentary clips, and storytelling sequences with strong narrative flow.",
      "Designed engaging character introductions with freeze-frame animations.",
      "Created dynamic text animations and motion graphics for social and educational content.",
      "Contributed to WordPress-based content publishing and layout adjustments.",
    ],
  },
  {
    id: "brainex-world",
    role: "Frontend Intern",
    company: "Brainex World",
    location: "Abbottabad, KPK, Pakistan",
    start: "August 2023",
    end: "October 2023",
    type: "Internship",
    summary:
      "Built responsive, user-focused interfaces with modern frontend tooling.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    highlights: [
      "Implemented responsive layouts that worked reliably across devices and breakpoints.",
      "Collaborated with senior engineers to ship new features with a focus on usability.",
      "Debugged and refined UI components to meet performance and accessibility expectations.",
    ],
  },
];

