import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useMode } from "@/context/ModeContext";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function WhyIBuild() {
  const { isRecruiter } = useMode();

  return (
    <section id="why-i-build" className="py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — narrative */}
          <div>
            <FadeIn>
              <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-4">
                02 — Identity
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Why I Build
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-5 font-sans">
                I enjoy learning and building technology through projects and practical problem solving.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-5 font-sans">
                My interests span software, systems, automation, AI, and emerging technologies. I prefer learning by building and turning ideas into working solutions rather than only studying theory.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-5 font-sans">
                I am interested in creating technology that solves real-world problems and contributes to making systems more efficient, accessible, and transparent. I enjoy exploring how technology can improve the way people work, make decisions, and interact with services and information.
              </p>
            </FadeIn>

            {!isRecruiter && (
              <FadeIn delay={0.25}>
                <div className="mt-8 p-5 bg-card border border-border rounded-lg">
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed italic">
                    Outside technology, I enjoy horses, cats, badminton, cricket, and travelling.
                  </p>
                </div>
              </FadeIn>
            )}
          </div>

          {/* Right — positioning */}
          <div>
            <FadeIn delay={0.05}>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Core Positioning
              </h3>
            </FadeIn>

            <div className="space-y-4">
              {[
                { label: "Technology Builder in Progress", desc: "Growing through education, real work, self-learning, and projects" },
                { label: "Practical Problem Solver", desc: "Interested in real-world problems, not just academic exercises" },
                { label: "Systems Thinker", desc: "Software, systems, and automation are connected — I learn across all of them" },
                { label: "Honest Builder", desc: "No inflated claims. Building proof through real code and documented projects" },
              ].map((item, i) => (
                <FadeIn key={item.label} delay={0.1 + i * 0.08}>
                  <div className="flex gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent/30 transition-colors">
                    <div className="w-1 shrink-0 bg-accent rounded-full mt-1" />
                    <div>
                      <div className="font-sans font-semibold text-sm text-foreground mb-1">{item.label}</div>
                      <div className="text-xs text-muted-foreground font-sans">{item.desc}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.45}>
              <div className="mt-8">
                <div className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-3">
                  Interests
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Software", "Systems", "Automation", "AI", "IoT", "Real-World Problems", "Open Source", "Future Technology"].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-sans border border-border text-muted-foreground rounded hover:border-accent hover:text-accent transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
