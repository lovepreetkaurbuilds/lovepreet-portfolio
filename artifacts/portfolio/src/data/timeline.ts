export interface JourneyEvent {
  id: string;
  period: string;
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
  highlight?: boolean;
  status?: "completed" | "current" | "upcoming";
}

export const journeyEvents: JourneyEvent[] = [
  {
    id: "highschool",
    period: "2019 – 2021",
    title: "High School Foundation",
    subtitle: "Punjab, India",
    description: "Completed high school education in Punjab, India. Built academic foundation, discipline, communication habits, and the early drive to pursue technology education abroad.",
    tags: ["Academic foundation", "Discipline", "Early learning"],
    status: "completed"
  },
  {
    id: "ielts",
    period: "2022",
    title: "IELTS / English Preparation",
    subtitle: "CLB 7-level proficiency",
    description: "Cleared IELTS with CLB 7-level English proficiency. Prepared for studying and working in Canada — a major milestone in making the transition to a new country and education system.",
    tags: ["IELTS", "CLB 7+", "English", "Canada preparation"],
    status: "completed"
  },
  {
    id: "college",
    period: "Jan 2023 – Aug 2024",
    title: "Computer Programmer Diploma",
    subtitle: "Lambton College, Mississauga · GPA: 3.6 / 4.0",
    description: "Completed Computer Programmer Diploma at Lambton College. Built a strong foundation in programming, computer systems, and technical problem solving. Maintained a 3.6 GPA throughout the program while working part-time.",
    tags: ["Python", "Programming fundamentals", "Computer systems", "Problem solving", "GPA 3.6/4.0"],
    highlight: true,
    status: "completed"
  },
  {
    id: "work",
    period: "2023 – 2025",
    title: "Canadian Work Experience",
    subtitle: "Multiple roles across retail, warehouse, and hospitality",
    description: "Worked in multiple roles while studying and after graduation. Built real-world discipline through customer service, retail operations, warehouse work, inventory management, safety procedures, POS systems, RF scanners, WMS, and fast-paced team environments.",
    tags: ["Customer service", "Retail", "Warehouse", "Inventory", "Teamwork", "POS / WMS / RF"],
    status: "completed"
  },
  {
    id: "deans",
    period: "Sept 2024",
    title: "Academic Recognition",
    subtitle: "Lambton College",
    description: "Received the Dean's Award for Academic Excellence and was placed on the Dean's Honour List — recognition for maintaining academic performance while working part-time and navigating life in a new country.",
    tags: ["Dean's Award", "Dean's Honour List", "Academic excellence"],
    highlight: true,
    status: "completed"
  },
  {
    id: "workpermit",
    period: "2025 – 2028",
    title: "Canadian Work Permit Phase",
    subtitle: "Valid Canadian work authorization",
    description: "Received valid Canadian work authorization. Using this phase for career growth, technical learning, portfolio building, and professional preparation. Focused on building the proof of work needed for software and technology roles.",
    tags: ["Work permit", "Career growth", "Technical learning", "Portfolio building"],
    status: "current"
  },
  {
    id: "technical",
    period: "2026",
    title: "Technical Builder Roadmaps Begin",
    subtitle: "Active focus — currently in progress",
    description: "Started focused technical roadmaps across multiple domains. These are active learning areas — not all completed, but all in motion. Building the project portfolio that will open technology career doors.",
    tags: ["Python depth", "Git / GitHub", "Linux / Shell", "SQL / PostgreSQL", "FastAPI", "Docker", "AI & automation", "French — TEF Canada"],
    highlight: true,
    status: "current"
  }
];

export const workRoles = [
  { role: "Customer Service Representative", company: "Thiara Supermarket" },
  { role: "Production Associate", company: "Give and Go Bakery" },
  { role: "Product Process Specialist", company: "Best Buy Canada" },
  { role: "Receiving Associate", company: "Best Buy" },
  { role: "Ride Operator", company: "Canada's Wonderland" },
  { role: "Full Case Associate", company: "Best Buy" },
];

export const learningCycle = [
  { step: "Study", description: "Read, watch, and understand concepts before touching code" },
  { step: "Practice", description: "Work through exercises and small experiments in the terminal or editor" },
  { step: "Build", description: "Apply learning to a real mini-project, even a simple CLI tool" },
  { step: "Debug", description: "Break things deliberately and learn by fixing them" },
  { step: "Document", description: "Write a README, notes, or explanation — if I can't explain it, I don't know it yet" },
  { step: "Improve", description: "Look at what I built with fresh eyes and make it better" },
  { step: "Ship", description: "Push to GitHub, share it, move on to the next level" },
];

export const current2026Focus = [
  "Python depth",
  "Git / GitHub portfolio",
  "Linux / Shell scripting",
  "SQL / PostgreSQL",
  "FastAPI",
  "Docker",
  "AI and automation",
  "French for TEF Canada",
  "Real-world project building",
];
