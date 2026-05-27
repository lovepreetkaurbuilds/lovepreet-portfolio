import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const missions = [
  {
    id: "portfolio",
    label: "Build Portfolio Projects",
    description: "Shipping real, documented projects that demonstrate systems thinking — not tutorials, not clones.",
    status: "Active",
    progress: 65,
    icon: "◈"
  },
  {
    id: "technical",
    label: "Deep Technical Learning",
    description: "Going deeper on FastAPI, Docker, SQL optimization, and backend architecture. Reading source code, not just docs.",
    status: "Active",
    progress: 55,
    icon: "◉"
  },
  {
    id: "french",
    label: "French — TEF Canada",
    description: "Dedicated daily practice for TEF Canada certification. Language as both a practical goal and a discipline exercise.",
    status: "Active",
    progress: 40,
    icon: "◎"
  },
  {
    id: "systems",
    label: "Practical Systems",
    description: "Automating my own workflows first. If a task happens twice, build a script. If a script runs manually, schedule it.",
    status: "Active",
    progress: 70,
    icon: "◇"
  },
  {
    id: "real-problems",
    label: "Technology for Real Problems",
    description: "Agriculture, civic infrastructure, healthcare access — finding one meaningful domain project to go deep on in 2026.",
    status: "Exploring",
    progress: 25,
    icon: "◈"
  }
];

export default function CurrentMission() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="current-mission" className="py-28 md:py-36 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-4">
            06 — Now
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Current Mission
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-mono text-accent tracking-wider">2026 FOCUS</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {missions.map((mission, i) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/30 transition-all duration-300 group"
              data-testid={`mission-${mission.id}`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl text-accent/70 group-hover:text-accent transition-colors">
                  {mission.icon}
                </span>
                <span className={`text-xs font-sans px-2 py-0.5 rounded border ${
                  mission.status === "Active"
                    ? "border-accent/30 text-accent bg-accent/5"
                    : "border-border text-muted-foreground"
                }`}>
                  {mission.status}
                </span>
              </div>

              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 leading-tight">
                {mission.label}
              </h3>

              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-5">
                {mission.description}
              </p>

              {/* Progress indicator (not a bar — a series of dots) */}
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 10 }).map((_, dot) => {
                  const filled = dot < Math.round(mission.progress / 10);
                  return (
                    <motion.div
                      key={dot}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.2, delay: 0.4 + i * 0.09 + dot * 0.03 }}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        filled ? "bg-accent" : "bg-border"
                      }`}
                    />
                  );
                })}
                <span className="ml-2 text-xs font-mono text-muted-foreground">
                  {mission.progress}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
