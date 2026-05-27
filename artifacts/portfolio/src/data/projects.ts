export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  timeInvested: string;
  tools: string[];
  challenge: string;
  description: string;
  sections: ProjectSection[];
  githubUrl?: string;
  color: string;
}

export interface ProjectSection {
  label: string;
  content: string;
}

export const projects: Project[] = [
  {
    id: "village-civic",
    title: "Village Civic Issue Tracker",
    tagline: "Giving rural communities a voice through structured reporting",
    category: "Software",
    timeInvested: "~60 hours",
    tools: ["Python", "FastAPI", "SQLite", "Git"],
    challenge: "Designing a system simple enough for low-tech users but structured enough to be actionable",
    description: "A web-based platform for villages and small communities to log, track, and escalate civic issues — potholes, water outages, safety concerns — with full status tracking.",
    sections: [
      {
        label: "Problem",
        content: "Rural communities have no structured channel to report civic issues. Problems get verbally reported, forgotten, and repeated. There's no paper trail, no accountability, no visibility."
      },
      {
        label: "Thinking",
        content: "Mapped the full lifecycle of a civic complaint: who reports it, who receives it, how it gets escalated. The data model needed to be simple but capture enough context to be useful for local officials."
      },
      {
        label: "Architecture",
        content: "FastAPI backend with SQLite for lightweight deployment on low-resource servers. REST endpoints for issue creation, status updates, and admin review. No frontend framework — pure HTML/Jinja2 for maximum accessibility."
      },
      {
        label: "Features",
        content: "Issue creation with location tagging, status workflow (Reported → In Review → Resolved), admin dashboard, public-facing tracker page, basic search and filtering."
      },
      {
        label: "Lessons",
        content: "Real-world constraints shape better software. Designing for low-bandwidth, low-tech users forced me to strip every unnecessary abstraction. The simplest solution was also the most robust."
      }
    ],
    githubUrl: "https://github.com/lovepreetkaur",
    color: "44 56% 54%"
  },
  {
    id: "civicaid-linux",
    title: "CivicAid Linux Command Center",
    tagline: "A battle-tested shell toolkit for civic infrastructure management",
    category: "Systems",
    timeInvested: "~45 hours",
    tools: ["Linux", "Bash", "Shell Scripting", "Cron", "Git"],
    challenge: "Building scripts that are reliable enough to run unattended on production servers",
    description: "A collection of shell scripts and automation tools for managing the server infrastructure behind the CivicAid platform — backups, monitoring, log rotation, and deployment workflows.",
    sections: [
      {
        label: "Commands",
        content: "Custom shell commands for common admin tasks: health checks, database backups, log analysis, process monitoring. Each command is idempotent and logs its own execution."
      },
      {
        label: "Automation",
        content: "Cron-based scheduling for nightly backups, weekly log rotation, and hourly health pings. Scripts send alerts on failure and maintain audit trails."
      },
      {
        label: "Monitoring",
        content: "Disk usage alerts, process watchdog for FastAPI server, uptime logging. Simple but effective — no external monitoring services required."
      },
      {
        label: "Linux Workflow",
        content: "Learned systemd service management, file permissions, user management, and production deployment patterns directly through building this system. Every concept tested in practice."
      }
    ],
    githubUrl: "https://github.com/lovepreetkaur",
    color: "220 10% 40%"
  },
  {
    id: "dental-automation",
    title: "Dental Clinic Automation Demo",
    tagline: "Automating patient journeys from first contact to follow-up",
    category: "Automation",
    timeInvested: "~40 hours",
    tools: ["Python", "FastAPI", "SQL", "Automation"],
    challenge: "Mapping a complex, human-centered process into reliable automated workflows",
    description: "A demonstration system showing how a dental clinic could automate its entire patient pipeline — from initial inquiry to post-appointment follow-up — without manual intervention.",
    sections: [
      {
        label: "Lead",
        content: "Incoming inquiry captured via web form or phone-to-form. Automatically categorized by procedure type, urgency, and patient history. Lead score computed from intake data."
      },
      {
        label: "Contact",
        content: "Automated first-contact message triggered within minutes of inquiry. Personalized based on procedure type. Human review before send for complex cases."
      },
      {
        label: "Booking",
        content: "Calendar availability checked against practitioner schedules. Appointment slot suggested automatically. Confirmation and reminder messages sent at 24h and 1h before appointment."
      },
      {
        label: "Follow Up",
        content: "Post-appointment check-in automated at 48h. Recovery feedback collected. Referral request triggered for satisfied patients. Long-term recall scheduling set based on procedure type."
      }
    ],
    githubUrl: "https://github.com/lovepreetkaur",
    color: "226 60% 10%"
  },
  {
    id: "farm-fire",
    title: "Farm Fire Protection Concept",
    tagline: "Early-warning fire detection systems for agricultural land",
    category: "Systems",
    timeInvested: "~30 hours",
    tools: ["Research", "Python", "IoT Concepts", "Documentation"],
    challenge: "Existing systems are expensive, urban-focused, and assume reliable connectivity",
    description: "A research and concept project exploring how low-cost sensor networks and edge computing could provide early fire warnings for farms — a high-risk environment with almost no existing smart infrastructure.",
    sections: [
      {
        label: "Problem",
        content: "Farm fires spread faster than urban fires due to open land, dry vegetation, and delayed emergency response. Existing detection systems cost tens of thousands of dollars and require stable internet."
      },
      {
        label: "Current Systems",
        content: "Manual patrol, expensive commercial smoke detectors, satellite fire detection (30-minute lag), phone-based reporting. None optimized for real-time edge environments with intermittent connectivity."
      },
      {
        label: "Concept",
        content: "A mesh network of low-cost temperature + smoke sensors with edge-processing capabilities. Anomaly detection runs on-device. Alerts transmitted via LoRa (long-range, low-power) when cellular is unavailable."
      },
      {
        label: "Future Roadmap",
        content: "Prototype sensor node with Raspberry Pi + DHT22 + MQ-2. Local ML model for false positive reduction. Integration with existing emergency dispatch systems. Cost target: under $200 per node."
      }
    ],
    color: "44 56% 54%"
  }
];

export const categories = ["All", "Software", "Systems", "Automation"];
