export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string[];
  status: "completed" | "prototype" | "concept" | "in-progress";
  statusLabel: string;
  tools: string[];
  challenge: string;
  description: string;
  sections: ProjectSection[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ProjectSection {
  label: string;
  content: string;
}

export const projects: Project[] = [
  {
    id: "village-civic",
    title: "Village Civic Issue Tracker",
    tagline: "A Python CLI project for tracking local civic issues",
    category: ["software", "completed"],
    status: "completed",
    statusLabel: "Completed · Portfolio Project",
    tools: ["Python", "Git", "GitHub", "pytest", "GitHub Actions"],
    challenge: "Building a usable system that anyone could run from a terminal with no technical background",
    description: "A Python CLI project for tracking local civic issues such as roads, water, electricity, sanitation, and public problems. Built to practice Python fundamentals, testing, version control, and CI workflows in a real project context.",
    sections: [
      {
        label: "Problem",
        content: "Rural and small communities have no simple, structured way to log and track civic problems. Issues get reported verbally, forgotten, and repeated with no accountability or paper trail."
      },
      {
        label: "What I Built",
        content: "A command-line application that allows users to add civic issues, list all issues, update status, search by category, view open items, and generate priority reports. Includes full test coverage with pytest and a CI workflow via GitHub Actions."
      },
      {
        label: "Tools Used",
        content: "Python, Git, GitHub, pytest, GitHub Actions, JSON file storage, CLI argument parsing."
      },
      {
        label: "Features",
        content: "Add, list, search, update, and prioritize civic issues. Filter by status. View summary reports. Automated testing on every push via GitHub Actions."
      },
      {
        label: "What I Learned",
        content: "How to structure a Python project cleanly, write tests with pytest, set up CI workflows, and think about real user needs when designing a CLI. Also practiced Git branching and commit discipline."
      },
      {
        label: "Current Status",
        content: "Completed as a portfolio project. Fully working, tested, and documented on GitHub."
      },
      {
        label: "Next Improvement",
        content: "Add a simple web frontend using FastAPI and a PostgreSQL backend to replace the JSON file storage."
      }
    ],
    githubUrl: "https://github.com/lovepreetkaurbuilds"
  },
  {
    id: "civicaid-linux",
    title: "CivicAid Linux Command Center",
    tagline: "Shell scripting and Linux automation for real system operations",
    category: ["systems", "completed"],
    status: "completed",
    statusLabel: "Completed · Portfolio Project",
    tools: ["Linux", "Shell Scripting", "WSL", "cron", "grep", "awk", "sed", "GitHub"],
    challenge: "Writing automation scripts reliable enough to simulate real server operations and run unattended",
    description: "A Linux and shell scripting project that simulates real system operations including logs, backups, reports, automation, command-line workflows, and server health checks. Built to practice Linux as a daily environment.",
    sections: [
      {
        label: "What I Built",
        content: "A collection of shell scripts covering: automated log rotation, server health checks, file backup scripts with timestamps, text processing workflows using grep, awk, and sed, and scheduled tasks using cron."
      },
      {
        label: "Command-Line Practice",
        content: "File system navigation, permissions management, process monitoring, service simulation, and building reusable shell functions."
      },
      {
        label: "Automation Scripts",
        content: "Scheduled backup jobs, health check scripts that write to logs, automated report generation, and notification placeholders for alert systems."
      },
      {
        label: "Tools Used",
        content: "Ubuntu (WSL), Bash, shell scripting, cron, grep, awk, sed, GitHub for version control."
      },
      {
        label: "What I Learned",
        content: "How to navigate and operate a Linux environment confidently, write idempotent shell scripts, think about automation design, and manage logs and backups the way a real sysadmin would."
      },
      {
        label: "Current Status",
        content: "Completed as a portfolio project. Scripts documented and stored on GitHub."
      },
      {
        label: "Next Improvement",
        content: "Add a Python monitoring layer and experiment with Docker containers for isolated testing environments."
      }
    ],
    githubUrl: "https://github.com/lovepreetkaurbuilds"
  },
  {
    id: "dental-automation",
    title: "Dubai Smile Dental Clinic Automation Demo",
    tagline: "Lead-to-booking automation demo for a real local business problem",
    category: ["automation", "in-progress"],
    status: "prototype",
    statusLabel: "Prototype · Demo",
    tools: ["Replit", "Web app", "Forms", "Booking flow", "Automation concept"],
    challenge: "Designing a realistic automation flow that a local business owner could actually understand and use",
    description: "A lead-to-booking automation demo for a dental clinic, showing how local businesses can capture leads, respond faster, and manage appointment interest. Built as a practical demonstration of automation thinking applied to a real business problem.",
    sections: [
      {
        label: "Problem",
        content: "Small dental clinics often miss inquiries, respond too slowly, and have no structured way to manage lead-to-booking flow. Patients contact them and don't hear back quickly."
      },
      {
        label: "Demo Purpose",
        content: "Show how a simple web-based lead capture form connected to a booking flow can help clinics respond faster, organize interest, and manage follow-ups — without expensive software."
      },
      {
        label: "User Journey",
        content: "Visitor → Lead form (name, interest, preferred time) → Service selection → Booking request confirmation → Follow-up message concept."
      },
      {
        label: "What I Learned",
        content: "How to think about user journeys, design form flows that reduce friction, and explain technical automation in a way non-technical business owners understand. Also learned about local business pain points."
      },
      {
        label: "Current Status",
        content: "Prototype / Demo — shows the concept and flow. Not production-deployed. Built for learning automation thinking and demo building."
      },
      {
        label: "Future Improvements",
        content: "Connect to a real backend with FastAPI, store leads in PostgreSQL, add email notifications, and integrate with a calendar API for real appointment scheduling."
      }
    ],
    githubUrl: "https://github.com/lovepreetkaurbuilds"
  },
  {
    id: "farm-fire",
    title: "Farm Fire Protection System Concept",
    tagline: "Technology concept for protecting farms from crop fires",
    category: ["ai-iot", "in-progress"],
    status: "concept",
    statusLabel: "Research · Concept · Future Build",
    tools: ["IoT sensors", "Alert systems", "Automation", "AI-assisted monitoring", "Power cutoff concept"],
    challenge: "Existing fire detection systems are too expensive for small farms and assume stable internet connectivity",
    description: "A technology concept focused on protecting farms from crop fires caused by electric wire sparks and fire spreading from nearby fields. This is an early-stage concept and future build — not yet implemented.",
    sections: [
      {
        label: "Problem",
        content: "Farm fires spread faster than urban fires due to open land, dry vegetation, and delayed emergency response. In many regions, crop fires caused by electrical faults or neighboring field burns destroy an entire season's work in hours."
      },
      {
        label: "Why It Matters",
        content: "Thousands of small farms have no early warning system. Existing commercial fire detection solutions cost tens of thousands of dollars and require stable internet — neither of which many rural farms have."
      },
      {
        label: "Current Concept",
        content: "A mesh network of low-cost temperature and smoke sensors that process data locally (edge computing) and trigger alerts via LoRa (long-range, low-power radio) when fire conditions are detected — no stable internet required."
      },
      {
        label: "Possible Technologies",
        content: "IoT sensors (temperature, smoke, humidity), Raspberry Pi or Arduino edge nodes, LoRa for offline alert transmission, automated power cutoff relay, mobile SMS alerts, and AI-assisted anomaly detection (future phase)."
      },
      {
        label: "Future Roadmap",
        content: "Phase 1 — Research and component selection. Phase 2 — Prototype a single sensor node. Phase 3 — Test alert transmission. Phase 4 — Build multi-node mesh. Cost target: under $200 per node."
      }
    ]
  }
];

export const filterCategories = [
  { id: "all", label: "All" },
  { id: "software", label: "Software" },
  { id: "systems", label: "Systems" },
  { id: "automation", label: "Automation" },
  { id: "ai-iot", label: "AI / IoT Concept" },
  { id: "completed", label: "Completed" },
  { id: "in-progress", label: "In Progress" },
];
