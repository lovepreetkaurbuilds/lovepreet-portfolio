export interface SkillGroup {
  title: string;
  description: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  icon?: string;
  note?: string;
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Things I Build",
    description: "The domains where I spend my time creating",
    items: [
      { name: "Software", note: "Web apps, APIs, tools" },
      { name: "Systems", note: "Linux, automation pipelines" },
      { name: "Automation", note: "Workflows, scheduled jobs" },
      { name: "Workflows", note: "Process design, integration" },
      { name: "AI", note: "Applied ML, LLM integration" },
      { name: "Experiments", note: "Ideas worth testing" },
    ]
  },
  {
    title: "Things I Use",
    description: "The tools in my workshop",
    items: [
      { name: "Python", note: "Primary language" },
      { name: "Git", note: "Version control" },
      { name: "GitHub", note: "Collaboration, CI" },
      { name: "Linux", note: "Daily environment" },
      { name: "Shell", note: "Bash, scripting" },
      { name: "SQL", note: "Data querying" },
      { name: "FastAPI", note: "Backend APIs" },
      { name: "Docker", note: "Containerization" },
    ]
  },
  {
    title: "Things I Practice",
    description: "The habits that make the work sustainable",
    items: [
      { name: "Problem Solving", note: "First principles thinking" },
      { name: "Communication", note: "Writing, documentation" },
      { name: "Learning", note: "Deliberate and deep" },
      { name: "Documentation", note: "Systems thinking" },
    ]
  }
];
