import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    label: "Observe",
    description: "Before writing a line of code, I spend time with the problem as it exists in the world — not as it's described in a spec.",
    detail: "What's actually broken? Who does it affect? What workarounds already exist? The real problem is rarely the stated problem."
  },
  {
    number: "02",
    label: "Break Down",
    description: "Complex problems decompose into small, testable questions. I map dependencies before touching tools.",
    detail: "Which parts are well-understood? Which are unknown? What's the minimum needed to validate the approach? Clarity before code."
  },
  {
    number: "03",
    label: "Build",
    description: "Start simple. The first version exists only to test assumptions, not to be beautiful or complete.",
    detail: "Prototypes are disposable. The point of building early is discovering what you didn't know. Build the simplest thing that could possibly work."
  },
  {
    number: "04",
    label: "Test",
    description: "Not unit tests (though those matter). Testing means: does this solve the actual problem in real conditions?",
    detail: "Run it against the real use case. Break it deliberately. The failures in testing are cheaper than the ones in production."
  },
  {
    number: "05",
    label: "Improve",
    description: "After testing, there's always a clearer picture. Refactor with that clarity. Remove what doesn't earn its place.",
    detail: "The second version is always better — not because you're smarter, but because you now know what the first version revealed."
  },
  {
    number: "06",
    label: "Document",
    description: "Writing is thinking made visible. If I can't explain what the system does and why, I don't fully understand it yet.",
    detail: "Documentation isn't about others (though it helps them). It's the final test of whether the system is coherent. Unclear docs mean unclear thinking."
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
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-4">
            05 — Philosophy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            How I Think
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-lg max-w-xl">
            A process. Not a methodology with a name. Just what actually works.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-card border border-border rounded-lg p-6 hover:border-accent/40 hover:shadow-md transition-all duration-300 cursor-default relative overflow-hidden"
              data-testid={`how-i-think-${step.number}`}
            >
              {/* Large number behind */}
              <div className="absolute -right-2 -bottom-4 font-serif text-8xl font-bold text-border/40 select-none pointer-events-none leading-none">
                {step.number}
              </div>

              <div className="relative">
                <div className="text-xs font-mono text-accent tracking-widest mb-3">
                  {step.number}
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {step.label}
                </h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4">
                  {step.description}
                </p>
                <motion.div
                  initial={false}
                  className="overflow-hidden"
                >
                  <p className="text-xs text-muted-foreground/70 font-sans leading-relaxed border-t border-border pt-4 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {step.detail}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <p className="font-serif text-xl md:text-2xl italic text-foreground/60 max-w-2xl mx-auto">
            "The first version exists only to discover what the second version should be."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
