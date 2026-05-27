import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    label: "Observe the Real Problem",
    description: "Before writing any code, I spend time with the problem as it exists — not as it's described in a spec or assignment.",
    detail: "What's actually broken? Who does it affect? What workarounds already exist? The stated problem is rarely the whole problem."
  },
  {
    number: "02",
    label: "Break It Into Smaller Parts",
    description: "Complex problems decompose into smaller, testable questions. I map the pieces before touching any tool.",
    detail: "Which parts are understood? Which are unknown? What's the smallest thing I can build to test the approach? Clarity before code."
  },
  {
    number: "03",
    label: "Understand the People Affected",
    description: "Technology exists to help people. I try to understand who is affected and what they actually need — not just what the brief says.",
    detail: "The best solutions come from understanding the user's actual experience. Technical elegance that doesn't serve people isn't a solution."
  },
  {
    number: "04",
    label: "Build a Simple Version",
    description: "Start simple. The first version exists only to test assumptions — not to be complete or beautiful.",
    detail: "Prototypes are disposable. Build the simplest thing that could possibly work, then learn from it. Early simplicity saves late complexity."
  },
  {
    number: "05",
    label: "Test and Improve",
    description: "Run it against real conditions. Break it deliberately. The failures in testing are cheaper than the failures after shipping.",
    detail: "The second version is always better — not because I'm smarter, but because I now know what the first version revealed. Testing is part of building."
  },
  {
    number: "06",
    label: "Document the Process",
    description: "Writing is thinking made visible. If I can't explain what the system does and why, I don't fully understand it yet.",
    detail: "Documentation isn't about others (though it helps them). It's the final test of whether the work is coherent. Unclear docs = unclear thinking."
  },
  {
    number: "07",
    label: "Keep Learning",
    description: "Every project reveals gaps. Those gaps become the next learning roadmap. The cycle doesn't end — it compounds.",
    detail: "What did this project teach me that I didn't know going in? That question is the most important one after every build."
  }
];

export default function HowIThink() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-i-think" className="py-28 md:py-36 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-4">
            07 — Philosophy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            How I Approach Problems
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-lg max-w-xl">
            This section helps you see how I think — not just what tools I know. Process matters as much as skills.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-card border border-border rounded-lg p-5 hover:border-accent/40 hover:shadow-md transition-all duration-300 cursor-default relative overflow-hidden"
              data-testid={`how-i-think-${step.number}`}
            >
              <div className="absolute -right-2 -bottom-4 font-serif text-7xl font-bold text-border/40 select-none pointer-events-none leading-none">
                {step.number}
              </div>
              <div className="relative">
                <div className="text-xs font-mono text-accent tracking-widest mb-2">{step.number}</div>
                <h3 className="font-serif text-base font-bold text-foreground mb-2 leading-snug group-hover:text-accent transition-colors duration-200">
                  {step.label}
                </h3>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed mb-3">
                  {step.description}
                </p>
                <p className="text-xs text-muted-foreground/60 font-sans leading-relaxed border-t border-border pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
