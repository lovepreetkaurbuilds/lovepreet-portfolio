import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects, categories } from "@/data/projects";
import { ExternalLink, ChevronRight, Clock, Wrench, Zap } from "lucide-react";

export default function ProjectLab() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="project-lab" className="py-28 md:py-36 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-4">
            03 — Work
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Project Lab
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-lg max-w-xl">
            Real problems. Real code. Real lessons. Every project is a system, not a demo.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs font-sans tracking-wide rounded transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-foreground text-background"
                  : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
              data-testid={`filter-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects */}
        <div className="space-y-4">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="border border-border rounded-lg overflow-hidden bg-card hover:border-accent/40 transition-colors duration-300"
                data-testid={`project-${project.id}`}
              >
                {/* Project header — always visible */}
                <button
                  className="w-full text-left px-6 py-5 flex items-start md:items-center justify-between gap-4"
                  onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                  data-testid={`project-toggle-${project.id}`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs font-sans text-accent tracking-wider uppercase">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-sans">
                      {project.tagline}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: expanded === project.id ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-muted-foreground mt-1"
                  >
                    <ChevronRight size={18} />
                  </motion.div>
                </button>

                {/* Meta bar */}
                <div className="px-6 pb-4 flex flex-wrap gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock size={12} />
                    <span>{project.timeInvested}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Wrench size={12} />
                    <span>{project.tools.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Zap size={12} />
                    <span className="truncate max-w-xs">{project.challenge}</span>
                  </div>
                </div>

                {/* Expanded detail */}
                <AnimatePresence>
                  {expanded === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border mx-6 mb-4" />
                      <div className="px-6 pb-6">
                        <p className="text-sm text-muted-foreground font-sans mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {project.sections.map((section) => (
                            <div
                              key={section.label}
                              className="bg-secondary/50 rounded p-4"
                            >
                              <div className="text-xs font-sans font-semibold text-accent tracking-wider uppercase mb-2">
                                {section.label}
                              </div>
                              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                                {section.content}
                              </p>
                            </div>
                          ))}
                        </div>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-6 text-sm font-sans text-muted-foreground border border-border px-4 py-2 rounded hover:border-accent hover:text-accent transition-all duration-200"
                            data-testid={`project-github-${project.id}`}
                          >
                            <ExternalLink size={13} />
                            View on GitHub
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
