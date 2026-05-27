import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { workRoles } from "@/data/timeline";

const experienceCards = [
  {
    id: "customer",
    title: "Customer Service",
    icon: "◈",
    description: "Learned communication, patience, active listening, and helping people clearly — even in high-pressure, fast-paced retail environments.",
    lessons: ["Active listening", "Clear communication", "Customer empathy", "Problem resolution"]
  },
  {
    id: "retail",
    title: "Retail & Inventory",
    icon: "◉",
    description: "Learned stock handling, POS systems, order processing, product accuracy, and how to maintain customer experience while managing backend operations.",
    lessons: ["POS systems", "Inventory accuracy", "Order processing", "Product handling"]
  },
  {
    id: "warehouse",
    title: "Warehouse & Receiving",
    icon: "◇",
    description: "Learned RF scanners, WMS, shipment processing, inventory accuracy tracking, and how to operate efficiently in a structured warehouse environment.",
    lessons: ["RF scanners", "WMS", "Shipment receiving", "Inventory management"]
  },
  {
    id: "ride-ops",
    title: "Ride Operations",
    icon: "◎",
    description: "Learned safety procedures, responsibility for guest wellbeing, giving clear instructions, and calm decision-making when situations change quickly.",
    lessons: ["Safety procedures", "Guest responsibility", "Clear instructions", "Calm under pressure"]
  },
  {
    id: "production",
    title: "Production Work",
    icon: "◈",
    description: "Learned quality control, packaging standards, routine discipline, and the value of consistent teamwork in a production environment.",
    lessons: ["Quality control", "Packaging", "Team discipline", "Consistency"]
  }
];

export default function WorkExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work-experience" className="py-28 md:py-36 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-4">
            05 — Foundation
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Work Experience That Built My Foundation
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-lg max-w-2xl">
            Not just a list of jobs — each role taught something real. These experiences gave me discipline, communication, and real-world work habits before and during my technical journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {experienceCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/30 hover:shadow-md transition-all duration-300 group"
              data-testid={`work-card-${card.id}`}
            >
              <div className="text-2xl text-accent/60 group-hover:text-accent transition-colors mb-4">
                {card.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4">
                {card.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {card.lessons.map((lesson) => (
                  <span key={lesson} className="text-xs px-2 py-0.5 bg-secondary border border-border rounded font-sans text-muted-foreground">
                    {lesson}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Role timeline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-card border border-border rounded-lg p-6"
        >
          <div className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-5">
            Role History · Canada
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {workRoles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.55 + i * 0.06 }}
                className="flex items-start gap-2.5 py-2"
                data-testid={`work-role-${i}`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                <div>
                  <div className="text-sm font-sans font-medium text-foreground">{role.role}</div>
                  <div className="text-xs text-muted-foreground font-sans">{role.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-5 pt-5 border-t border-border">
            <p className="text-sm text-muted-foreground font-sans italic">
              These experiences gave me real-world discipline before and during my transition into deeper technology building.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
