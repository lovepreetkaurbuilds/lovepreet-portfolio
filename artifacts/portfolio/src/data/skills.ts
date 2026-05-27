export type LabelType = "used-projects" | "used-work" | "learning" | "exploring" | "personal";

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  labelText: string;
  labelType: LabelType;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming & Software Foundations",
    subtitle: "Core tools used in projects",
    labelText: "Used in projects",
    labelType: "used-projects",
    skills: [
      "Python", "Programming fundamentals", "Problem solving with code",
      "Debugging", "CLI applications", "File handling",
      "Basic testing", "pytest", "Git", "GitHub",
      "GitHub Actions", "VS Code", "Documentation", "README writing"
    ]
  },
  {
    id: "systems",
    title: "Systems & Command-Line",
    subtitle: "Linux environment and shell scripting",
    labelText: "Used in Linux project",
    labelType: "used-projects",
    skills: [
      "Linux", "Ubuntu / WSL", "Shell scripting", "Bash commands",
      "File system navigation", "Permissions", "Logs", "Backups",
      "cron jobs", "grep", "awk", "sed",
      "Command-line workflows", "Basic server health checks"
    ]
  },
  {
    id: "backend",
    title: "Backend & Deployment",
    subtitle: "Currently building — active roadmap",
    labelText: "Currently learning / building next",
    labelType: "learning",
    skills: [
      "SQL", "PostgreSQL", "FastAPI", "Docker",
      "APIs", "Databases", "Backend systems", "Deployment basics"
    ]
  },
  {
    id: "ai-automation",
    title: "AI, Automation & Future Tech",
    subtitle: "Exploring through projects and research",
    labelText: "Exploring / building through projects",
    labelType: "exploring",
    skills: [
      "AI tools", "Workflow automation", "Business process automation",
      "Lead capture systems", "Appointment booking systems",
      "AI chatbot concepts", "IoT concepts", "Sensor-based problem solving",
      "AI + BCI interest", "Real-world technology systems"
    ]
  },
  {
    id: "web-product",
    title: "Web & Product Building",
    subtitle: "Building demos and learning interfaces",
    labelText: "Used in demos / improving",
    labelType: "used-projects",
    skills: [
      "Replit", "Mobile-friendly web apps", "Landing page structure",
      "Forms", "Booking flow concepts", "User journey thinking",
      "Basic UI/UX thinking", "Product demo building"
    ]
  },
  {
    id: "workplace",
    title: "Workplace & Operations Tools",
    subtitle: "Real tools used in Canadian work roles",
    labelText: "Used in Canadian work experience",
    labelType: "used-work",
    skills: [
      "POS systems", "Cash handling", "RF scanners", "WMS",
      "Inventory management", "Order processing", "Shipment receiving",
      "Stock organization", "Product labeling", "Data entry",
      "Email", "MS Word", "MS Excel", "MS PowerPoint"
    ]
  },
  {
    id: "customer-ops",
    title: "Customer, Safety & Operations",
    subtitle: "Built through real Canadian jobs",
    labelText: "Built through real jobs",
    labelType: "used-work",
    skills: [
      "Customer service", "Retail sales", "Customer engagement",
      "Active listening", "Clear communication", "Safety procedures",
      "Guest instructions", "Fast-paced operations", "Teamwork",
      "Time management", "Multitasking", "Attention to detail",
      "Adaptability", "Responsibility", "Problem solving"
    ]
  },
  {
    id: "languages",
    title: "Languages & Communication",
    subtitle: "Multilingual communication foundation",
    labelText: "Communication toolkit",
    labelType: "personal",
    skills: [
      "English (CLB 7+)", "Hindi", "Punjabi",
      "French (TEF Canada — in progress)",
      "Presentation confidence", "Cross-cultural communication"
    ]
  },
  {
    id: "builder-traits",
    title: "Builder Traits",
    subtitle: "How I work and learn",
    labelText: "Personal working style",
    labelType: "personal",
    skills: [
      "Self-learning", "Curiosity", "Consistency",
      "Practical execution", "Documentation habit",
      "Learning by building", "Long-term thinking",
      "Real-world problem focus", "Improvement mindset"
    ]
  }
];

export const labelColors: Record<LabelType, string> = {
  "used-projects": "border-accent/40 text-accent bg-accent/5",
  "used-work": "border-blue-500/30 text-blue-600 dark:text-blue-400 bg-blue-500/5",
  "learning": "border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5",
  "exploring": "border-purple-500/30 text-purple-600 dark:text-purple-400 bg-purple-500/5",
  "personal": "border-border text-muted-foreground bg-secondary/50"
};
