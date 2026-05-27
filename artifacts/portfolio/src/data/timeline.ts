export interface TimelineNode {
  id: string;
  stage: string;
  skills: string[];
  description: string;
  detail: string;
  year?: string;
}

export const timelineStages: TimelineNode[] = [
  {
    id: "learn",
    stage: "LEARN",
    skills: ["Python", "Git", "Linux"],
    description: "First contact. Building foundations.",
    detail: "Started with Python fundamentals — syntax, loops, functions, files. Moved to Git for version control, then Linux as a daily environment. Learning by reading, then immediately applying.",
    year: "2023"
  },
  {
    id: "build",
    stage: "BUILD",
    skills: ["Projects", "FastAPI", "SQL"],
    description: "From knowledge to working systems.",
    detail: "Built the first real projects: Civic Issue Tracker, Linux Command Center. Learned FastAPI for backend APIs. Started using SQL to query and understand data. Projects are how learning becomes permanent.",
    year: "2024"
  },
  {
    id: "fail",
    stage: "FAIL",
    skills: ["Debugging", "Architecture", "Constraints"],
    description: "Where the real learning happens.",
    detail: "Scripts that broke on edge cases. APIs that couldn't handle real load. Database queries that worked in dev but not in prod. Each failure taught something a tutorial never would.",
    year: "2024"
  },
  {
    id: "improve",
    stage: "IMPROVE",
    skills: ["Refactoring", "Docker", "Documentation"],
    description: "Turning broken into better.",
    detail: "Refactored projects after failure. Added Docker for reproducible environments. Started documenting not just what, but why. Learned that good code reads like clear thinking.",
    year: "2025"
  },
  {
    id: "ship",
    stage: "SHIP",
    skills: ["French", "AI", "Deployment"],
    description: "Finishing things. Sharing them.",
    detail: "Completed projects with real documentation. Started French (TEF Canada preparation). Exploring AI integration in practical systems. Learning that shipping is a skill, not just a milestone.",
    year: "2025–2026"
  }
];

export const learningItems = [
  { name: "Python", stage: "learn", description: "Core language for all projects" },
  { name: "Git", stage: "learn", description: "Version control from day one" },
  { name: "Linux", stage: "learn", description: "Daily operating environment" },
  { name: "Projects", stage: "build", description: "Learning through creation" },
  { name: "French", stage: "ship", description: "TEF Canada preparation" },
  { name: "SQL", stage: "build", description: "Data modeling and querying" },
  { name: "FastAPI", stage: "build", description: "Backend API development" },
  { name: "Docker", stage: "improve", description: "Reproducible environments" },
  { name: "AI", stage: "ship", description: "Applied AI in real systems" },
];
