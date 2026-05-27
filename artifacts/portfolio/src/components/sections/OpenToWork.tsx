import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowUpRight } from "lucide-react";

const opportunities = [
  "Entry-level software roles",
  "Junior developer roles",
  "Technical support / IT roles",
  "Automation projects",
  "Backend learning opportunities",
  "Internship opportunities",
  "Builder-focused teams",
  "Local business automation projects",
];

export default function OpenToWork() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="open-to-work" className="py-28 md:py-36 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
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
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Open To Opportunities
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-lg max-w-2xl">
            I am hardworking, practical, adaptable, and building proof through real projects. I'm looking for teams where I can contribute, learn fast, and grow. I don't claim to be a senior — I claim to be someone who works hard and improves.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Opportunities list */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-5">
                I am open to
              </div>
              <div className="space-y-2">
                {opportunities.map((opp, i) => (
                  <motion.div
                    key={opp}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                    className="flex items-center gap-3 py-2.5 px-4 bg-card border border-border rounded hover:border-accent/30 transition-colors"
                    data-testid={`opportunity-${i}`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-sm font-sans text-foreground">{opp}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Action buttons */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-5"
            >
              Connect
            </motion.div>
            <div className="space-y-3">
              {[
                { label: "GitHub", handle: "@lovepreetkaurbuilds", href: "https://github.com/lovepreetkaurbuilds", icon: Github, external: true },
                { label: "LinkedIn", handle: "lovepreetkaur10", href: "https://www.linkedin.com/in/lovepreetkaur10", icon: Linkedin, external: true },
                { label: "Email Me", handle: "lovepreetkaur090gsp@gmail.com", href: "mailto:lovepreetkaur090gsp@gmail.com", icon: Mail, external: false },
              ].map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="group flex items-center justify-between p-5 bg-card border border-border rounded-lg hover:border-accent/40 hover:shadow-md transition-all duration-300"
                  data-testid={`open-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded border border-border bg-secondary flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/5 transition-all">
                      <link.icon size={16} className="text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm font-sans font-semibold text-foreground">{link.label}</div>
                      <div className="text-xs text-muted-foreground font-sans">{link.handle}</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-accent transition-colors" />
                </motion.a>
              ))}

              {/* Resume */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <button
                  className="w-full flex items-center justify-between p-5 border border-dashed border-border rounded-lg text-muted-foreground hover:border-accent hover:text-accent transition-all duration-200 group"
                  data-testid="open-resume"
                  onClick={() => alert("Resume coming soon — will be available as a PDF download.")}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded border border-dashed border-border bg-secondary flex items-center justify-center">
                      <Download size={16} />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-sans font-semibold">Download Resume</div>
                      <div className="text-xs font-sans opacity-70">Coming soon · Lovepreet_Kaur_Resume.pdf</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
