import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { timelineStages, learningItems } from "@/data/timeline";

export default function LearningEngine() {
  const [activeStage, setActiveStage] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stageData = timelineStages.find((s) => s.id === activeStage);

  return (
    <section id="learning-engine" className="py-28 md:py-36 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-4">
            04 — Process
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Learning Engine
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-lg max-w-xl">
            The cycle that drives everything. Click any stage to see what it meant in practice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div ref={lineRef}>
            <div className="relative">
              {/* Vertical line */}
              <motion.div
                className="absolute left-[19px] top-4 w-px bg-border"
                initial={{ height: 0 }}
                animate={inView ? { height: "calc(100% - 32px)" } : {}}
                transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
              />

              <div className="space-y-2">
                {timelineStages.map((stage, i) => {
                  const isActive = activeStage === stage.id;
                  const stageItems = learningItems.filter((l) => l.stage === stage.id);

                  return (
                    <motion.div
                      key={stage.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <button
                        className={`w-full text-left flex items-start gap-5 py-4 px-3 rounded transition-all duration-200 ${
                          isActive ? "bg-card border border-accent/30" : "hover:bg-card/60"
                        }`}
                        onClick={() => setActiveStage(isActive ? null : stage.id)}
                        data-testid={`timeline-stage-${stage.id}`}
                      >
                        <div className="relative shrink-0 mt-1">
                          <motion.div
                            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                              isActive
                                ? "border-accent bg-accent/10"
                                : "border-border bg-background"
                            }`}
                          >
                            <span className={`text-xs font-mono font-bold transition-colors ${
                              isActive ? "text-accent" : "text-muted-foreground"
                            }`}>
                              {String(i + 1).padStart(2, "0")}
                            </span>
                          </motion.div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <span className={`font-serif text-lg font-bold tracking-tight transition-colors ${
                              isActive ? "text-foreground" : "text-foreground/80"
                            }`}>
                              {stage.stage}
                            </span>
                            {stage.year && (
                              <span className="text-xs font-mono text-accent">
                                {stage.year}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground font-sans">
                            {stage.description}
                          </p>
                          {stageItems.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {stageItems.map((item) => (
                                <span
                                  key={item.name}
                                  className={`text-xs px-2 py-0.5 rounded font-sans border transition-colors ${
                                    isActive
                                      ? "border-accent/30 text-accent bg-accent/5"
                                      : "border-border text-muted-foreground"
                                  }`}
                                >
                                  {item.name}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </button>

                      {/* Connector arrow */}
                      {i < timelineStages.length - 1 && (
                        <div className="ml-4 pl-[15px] py-1 border-l border-border">
                          <span className="text-xs text-muted-foreground font-mono">↓</span>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Detail panel */}
          <div className="sticky top-24">
            <AnimatePresence mode="wait">
              {stageData ? (
                <motion.div
                  key={stageData.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-card border border-border rounded-lg p-8"
                >
                  <div className="text-xs font-mono text-accent tracking-widest uppercase mb-2">
                    {stageData.year}
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
                    {stageData.stage}
                  </h3>
                  <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                    {stageData.detail}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stageData.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 border border-accent/30 text-accent rounded font-sans"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-card/40 border border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center min-h-[240px]"
                >
                  <p className="text-sm text-muted-foreground font-sans">
                    Select a stage to see the detail
                  </p>
                  <div className="mt-3 text-2xl text-muted-foreground/30 font-serif">↑</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
