import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillGroups } from "@/data/skills";
import {
  SiPython, SiGit, SiGithub, SiLinux, SiGnubash, SiPostgresql, SiFastapi, SiDocker
} from "react-icons/si";

const techIcons: Record<string, React.ReactNode> = {
  Python: <SiPython size={16} />,
  Git: <SiGit size={16} />,
  GitHub: <SiGithub size={16} />,
  Linux: <SiLinux size={16} />,
  Shell: <SiGnubash size={16} />,
  SQL: <SiPostgresql size={16} />,
  FastAPI: <SiFastapi size={16} />,
  Docker: <SiDocker size={16} />,
};

const groupColors = ["text-accent", "text-foreground", "text-muted-foreground"];
const groupBorderColors = ["border-accent/30", "border-border", "border-border"];

export default function BuilderDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="builder-dashboard" className="py-28 md:py-36 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-4">
            02 — Capabilities
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Builder Dashboard
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-lg max-w-xl">
            Not a skills section. A snapshot of how I spend my time and what I reach for.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + gi * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-card border ${groupBorderColors[gi]} rounded-lg p-6 hover:shadow-md transition-shadow duration-300`}
              data-testid={`skill-group-${gi}`}
            >
              <div className={`text-xs font-sans tracking-widest uppercase mb-1 ${groupColors[gi]}`}>
                {gi === 0 ? "Output" : gi === 1 ? "Toolkit" : "Practice"}
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                {group.title}
              </h3>
              <p className="text-xs text-muted-foreground font-sans mb-6">
                {group.description}
              </p>
              <div className="space-y-2">
                {group.items.map((item, ii) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + gi * 0.1 + ii * 0.05 }}
                    className="flex items-center justify-between py-2 px-3 rounded hover:bg-secondary/70 transition-colors group cursor-default"
                    data-testid={`skill-item-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="flex items-center gap-2.5">
                      {techIcons[item.name] && (
                        <span className="text-muted-foreground group-hover:text-accent transition-colors">
                          {techIcons[item.name]}
                        </span>
                      )}
                      <span className="text-sm font-sans font-medium text-foreground">
                        {item.name}
                      </span>
                    </div>
                    {item.note && (
                      <span className="text-xs text-muted-foreground font-sans hidden group-hover:block">
                        {item.note}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
