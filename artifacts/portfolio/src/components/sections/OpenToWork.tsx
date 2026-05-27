import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowUpRight, MapPin } from "lucide-react";

const opportunities = [
  "Entry-level software roles",
  "Junior developer roles",
  "Technical support / IT roles",
  "Automation projects",
  "Backend learning opportunities",
  "Internship opportunities",
  "Builder-focused teams",
  "Local business automation projects",
  "Remote technical roles",
];

const availability = [
  { label: "Canada", detail: "Open to in-person opportunities", icon: "◈" },
  { label: "India", detail: "Open to in-person opportunities", icon: "◉" },
  { label: "United States", detail: "Depending on role, sponsorship, or work authorization", icon: "◇" },
  { label: "Remote", detail: "Open to remote opportunities from anywhere", icon: "◎" },
];

export default function OpenToWork() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="open-to-work" className="py-28 md:py-36 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-mono text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
              Open to Work
            </span>
          </div>
          <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-4">
            08 — Opportunities
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5">
            Open To Opportunities
          </h2>
          <p className="text-lg text-muted-foreground font-sans leading-relaxed max-w-2xl mb-4">
            I am open to opportunities where I can contribute, learn, build, and grow through real technical work.
          </p>
          <p className="text-sm text-muted-foreground font-sans leading-relaxed max-w-2xl border-l-2 border-accent/40 pl-4">
            I am especially interested in roles where I can combine technical learning, problem solving, documentation, and real project execution. I don't claim to be a senior — I claim to be someone who works hard, builds proof, and improves consistently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-14">
          {/* Roles I am open to */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-5">
              Roles I am open to
            </div>
            <div className="space-y-2">
              {opportunities.map((opp, i) => (
                <motion.div
                  key={opp}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.055 }}
                  className="flex items-center gap-3 py-2.5 px-4 bg-card border border-border rounded hover:border-accent/30 transition-colors"
                  data-testid={`opportunity-${i}`}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-sm font-sans text-foreground">{opp}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-5">
              Availability / Location
            </div>
            <div className="space-y-3">
              {availability.map((loc, i) => (
                <motion.div
                  key={loc.label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.09 }}
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent/20 transition-colors"
                  data-testid={`location-${i}`}
                >
                  <MapPin size={15} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-sans font-semibold text-foreground">{loc.label}</div>
                    <div className="text-xs text-muted-foreground font-sans mt-0.5">{loc.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Connect buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <div className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-5">
            Connect
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Resume */}
            <button
              className="group flex items-center gap-3 p-4 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all duration-200"
              data-testid="open-resume"
              onClick={() => alert("Resume coming soon — will be available as Lovepreet_Kaur_Resume.pdf")}
            >
              <div className="w-8 h-8 rounded border border-background/20 bg-background/10 flex items-center justify-center shrink-0">
                <Download size={14} />
              </div>
              <div className="text-left">
                <div className="text-sm font-sans font-semibold">Download Resume</div>
                <div className="text-xs opacity-60 font-sans">Coming soon</div>
              </div>
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/lovepreetkaurbuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-accent/40 hover:shadow-md transition-all duration-300"
              data-testid="open-github"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border border-border bg-secondary flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/5 transition-all">
                  <Github size={14} className="text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-sans font-semibold text-foreground">GitHub</div>
                  <div className="text-xs text-muted-foreground font-sans">lovepreetkaurbuilds</div>
                </div>
              </div>
              <ArrowUpRight size={13} className="text-muted-foreground group-hover:text-accent transition-colors" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/lovepreetkaur10"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-accent/40 hover:shadow-md transition-all duration-300"
              data-testid="open-linkedin"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border border-border bg-secondary flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/5 transition-all">
                  <Linkedin size={14} className="text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-sans font-semibold text-foreground">LinkedIn</div>
                  <div className="text-xs text-muted-foreground font-sans">lovepreetkaur10</div>
                </div>
              </div>
              <ArrowUpRight size={13} className="text-muted-foreground group-hover:text-accent transition-colors" />
            </a>

            {/* Email */}
            <a
              href="mailto:lovepreetkaur090gsp@gmail.com"
              className="group flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-accent/40 hover:shadow-md transition-all duration-300"
              data-testid="open-email"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border border-border bg-secondary flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/5 transition-all">
                  <Mail size={14} className="text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-sans font-semibold text-foreground">Email Me</div>
                  <div className="text-xs text-muted-foreground font-sans truncate max-w-[120px]">lovepreetkaur090gsp</div>
                </div>
              </div>
              <ArrowUpRight size={13} className="text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
