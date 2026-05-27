import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const timelineEvents = [
  { year: "2022", label: "First line of Python", note: "print('Hello, World') — and that was it." },
  { year: "2023", label: "First real project", note: "Built something that actually solved a problem." },
  { year: "2024", label: "Linux daily driver", note: "The terminal became home." },
  { year: "2024", label: "Backend APIs", note: "FastAPI, SQL, real systems thinking." },
  { year: "2025", label: "Automation & AI", note: "Connecting software to the physical world." },
  { year: "2026", label: "Building in public", note: "This portfolio. More projects. Keep shipping." },
];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function WhyIBuild() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-i-build" className="py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — narrative */}
          <div>
            <FadeIn>
              <div className="mb-6">
                <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground">
                  01 — Identity
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Why I Build
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-sans">
                I don't learn to pass a course. I learn because a problem genuinely fascinates me — and the only way I know how to understand something deeply is to build it.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-sans">
                Software, systems, automation, AI — these aren't separate fields to me. They're different angles on the same question: how do you make something work reliably in the real world?
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-sans">
                Practical problem solving means you actually deploy things. You watch them fail. You understand why. You improve them. The cycle is the point, not the destination.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="text-lg text-muted-foreground leading-relaxed font-sans">
                Future technologies — AI, edge computing, IoT — matter most when they're connected to real human problems. A farm that burns down at night. A village with no way to report a broken road. A clinic that misses patients. These are the problems I want to build for.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-3">
                {["Practical", "Curious", "Builder", "Systems Thinker", "Self-taught"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-sans border border-border text-muted-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right — timeline */}
          <div ref={ref}>
            <FadeIn delay={0.05}>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-8">
                The Journey
              </h3>
            </FadeIn>

            <div className="relative">
              {/* Vertical line */}
              <motion.div
                className="absolute left-[11px] top-0 w-px bg-border"
                initial={{ height: 0 }}
                animate={inView ? { height: "100%" } : {}}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              />

              <div className="space-y-8">
                {timelineEvents.map((event, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex gap-6 items-start"
                  >
                    <div className="relative shrink-0 mt-1.5">
                      <div className="w-[22px] h-[22px] rounded-full border-2 border-border bg-background flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-mono text-accent tracking-wider">
                          {event.year}
                        </span>
                        <span className="font-sans font-semibold text-sm text-foreground">
                          {event.label}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground font-sans">
                        {event.note}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
