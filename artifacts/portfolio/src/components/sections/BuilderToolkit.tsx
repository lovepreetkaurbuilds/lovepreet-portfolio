import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories, labelColors } from "@/data/skills";

export default function BuilderToolkit() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const activeCategory = activeId ? skillCategories.find((c) => c.id === activeId) : null;

  return (
    <section id="builder-toolkit" className="py-28 md:py-36 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-4">
            03 — Capabilities
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            My Builder Toolkit
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-lg max-w-2xl">
            A practical toolkit built from education, real work experience, self-learning, and project-based execution. Organized honestly — what I've used, what I'm learning, what I'm exploring.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {[
            { label: "Used in projects", type: "used-projects" as const },
            { label: "Used in work experience", type: "used-work" as const },
            { label: "Currently learning", type: "learning" as const },
            { label: "Exploring", type: "exploring" as const },
            { label: "Personal traits", type: "personal" as const },
          ].map((item) => (
            <span key={item.type} className={`text-xs px-2.5 py-1 rounded border font-sans ${labelColors[item.type]}`}>
              {item.label}
            </span>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* Category cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
            {skillCategories.map((cat, i) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                onClick={() => setActiveId(activeId === cat.id ? null : cat.id)}
                className={`text-left p-5 rounded-lg border transition-all duration-200 ${
                  activeId === cat.id
                    ? "border-accent/50 bg-card shadow-md"
                    : "border-border bg-card hover:border-accent/30 hover:shadow-sm"
                }`}
                data-testid={`toolkit-cat-${cat.id}`}
              >
                <div className={`text-xs px-2 py-0.5 rounded border inline-block mb-3 font-sans ${labelColors[cat.labelType]}`}>
                  {cat.labelText}
                </div>
                <h3 className="font-serif text-base font-semibold text-foreground leading-tight mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs text-muted-foreground font-sans">{cat.subtitle}</p>
                <div className="mt-3 text-xs text-muted-foreground font-sans">
                  {cat.skills.length} skills — click to expand
                </div>
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {activeCategory ? (
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <div className={`text-xs px-2 py-0.5 rounded border inline-block mb-4 font-sans ${labelColors[activeCategory.labelType]}`}>
                    {activeCategory.labelText}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                    {activeCategory.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-sans mb-5">
                    {activeCategory.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 bg-secondary border border-border rounded font-sans text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <div className="bg-card/40 border border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center min-h-[200px]">
                  <p className="text-sm text-muted-foreground font-sans">
                    Select a category to see all skills
                  </p>
                  <div className="mt-3 text-2xl text-muted-foreground/30 font-serif">←</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
