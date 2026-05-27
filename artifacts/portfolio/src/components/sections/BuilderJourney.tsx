import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { journeyEvents } from "@/data/timeline";

const statusColors: Record<string, string> = {
  completed: "bg-accent",
  current: "bg-emerald-500",
  upcoming: "bg-border",
};

const statusLabels: Record<string, string> = {
  completed: "Completed",
  current: "Current",
  upcoming: "Upcoming",
};

export default function BuilderJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="builder-journey" className="py-28 md:py-36 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-4">
            01 — Timeline
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            The Builder Journey
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-lg max-w-xl">
            Education, real work, and technical growth — a truthful map of where I've been and where I'm going.
          </p>
        </motion.div>

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <motion.div
            className="absolute left-[19px] top-4 w-px bg-border"
            initial={{ height: 0 }}
            animate={inView ? { height: "calc(100% - 32px)" } : {}}
            transition={{ duration: 1.6, delay: 0.2, ease: "easeOut" }}
          />

          <div className="space-y-0">
            {journeyEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-7 pb-10"
              >
                {/* Node */}
                <div className="relative shrink-0 mt-1">
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                    event.status === "current"
                      ? "border-emerald-500 bg-emerald-500/10"
                      : event.highlight
                      ? "border-accent bg-accent/10"
                      : "border-border bg-background"
                  }`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${statusColors[event.status ?? "completed"]}`} />
                  </div>
                  {event.status === "current" && (
                    <div className="absolute inset-0 rounded-full border-2 border-emerald-500/30 animate-ping" />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 pb-2 ${
                  event.highlight
                    ? "bg-card border border-accent/20 rounded-lg p-5 -mt-1"
                    : "pt-1"
                }`}>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-accent tracking-wider">
                      {event.period}
                    </span>
                    {event.status && (
                      <span className={`text-xs px-2 py-0.5 rounded-full font-sans ${
                        event.status === "current"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                          : "bg-secondary text-muted-foreground border border-border"
                      }`}>
                        {statusLabels[event.status]}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-0.5">
                    {event.title}
                  </h3>
                  {event.subtitle && (
                    <p className="text-sm text-accent font-sans mb-2">{event.subtitle}</p>
                  )}
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-3">
                    {event.description}
                  </p>
                  {event.tags && event.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 border border-border rounded text-muted-foreground font-sans"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
