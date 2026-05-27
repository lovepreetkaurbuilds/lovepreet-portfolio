import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { learningCycle, current2026Focus } from "@/data/timeline";

export default function LearningEngine() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="learning-engine" className="py-28 md:py-36 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-4">
            06 — Process
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            My Learning Engine
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-lg max-w-xl">
            This section shows how I learn — not just what I learn. Click any step to see what it means in practice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Cycle */}
          <div>
            <div className="relative">
              <motion.div
                className="absolute left-5 top-4 w-px bg-border"
                initial={{ height: 0 }}
                animate={inView ? { height: "calc(100% - 32px)" } : {}}
                transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
              />
              <div className="space-y-1">
                {learningCycle.map((item, i) => {
                  const isActive = activeStep === i;
                  return (
                    <motion.div key={item.step} initial={{ opacity: 0, x: -18 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.45, delay: 0.3 + i * 0.09 }}>
                      <button
                        className={`w-full text-left flex items-start gap-5 py-3 px-3 rounded transition-all duration-200 ${
                          isActive ? "bg-card border border-accent/30" : "hover:bg-card/60"
                        }`}
                        onClick={() => setActiveStep(isActive ? null : i)}
                        data-testid={`learning-step-${i}`}
                      >
                        <div className={`w-10 h-10 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${
                          isActive ? "border-accent bg-accent/10" : "border-border bg-background"
                        }`}>
                          <span className={`text-xs font-mono font-bold ${isActive ? "text-accent" : "text-muted-foreground"}`}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div className="pt-2">
                          <span className={`font-serif text-lg font-bold tracking-tight block ${isActive ? "text-foreground" : "text-foreground/80"}`}>
                            {item.step}
                          </span>
                        </div>
                      </button>
                      {i < learningCycle.length - 1 && (
                        <div className="ml-5 pl-[15px] py-0.5 border-l border-border">
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
              {activeStep !== null ? (
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-card border border-border rounded-lg p-8 mb-6"
                >
                  <div className="text-xs font-mono text-accent tracking-widest uppercase mb-2">
                    Step {String(activeStep + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
                    {learningCycle[activeStep].step}
                  </h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    {learningCycle[activeStep].description}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-card/40 border border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center min-h-[160px] mb-6"
                >
                  <p className="text-sm text-muted-foreground font-sans">
                    Select a step to see what it means in practice
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 2026 Focus */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
                  2026 Current Focus
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {current2026Focus.map((item) => (
                  <span key={item} className="text-xs px-2.5 py-1 bg-secondary border border-border rounded font-sans text-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
