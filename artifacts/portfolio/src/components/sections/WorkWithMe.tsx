import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const openTo = [
  "Internships",
  "Graduate Roles",
  "Software Roles",
  "Automation Projects",
  "Builder Opportunities"
];

const links = [
  {
    label: "GitHub",
    handle: "@lovepreetkaur",
    href: "https://github.com/lovepreetkaur",
    icon: Github,
    description: "See the code"
  },
  {
    label: "LinkedIn",
    handle: "Lovepreet Kaur",
    href: "https://linkedin.com/in/lovepreetkaur",
    icon: Linkedin,
    description: "Professional profile"
  },
  {
    label: "Email",
    handle: "lovepreetkaur@email.com",
    href: "mailto:lovepreetkaur@email.com",
    icon: Mail,
    description: "Direct message"
  }
];

export default function WorkWithMe() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work-with-me" className="py-28 md:py-36 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-4">
                07 — Connect
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Work With Me
              </h2>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-8">
                I'm looking for people building things that matter — and willing to bring someone in who learns fast, thinks carefully, and ships real work.
              </p>
              <p className="text-base text-muted-foreground font-sans leading-relaxed">
                Not looking for a company that needs a resume. Looking for a team that needs a builder.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <div className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-4">
                Open To
              </div>
              <div className="flex flex-wrap gap-2">
                {openTo.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                    className="px-3 py-1.5 text-sm font-sans border border-border rounded text-foreground hover:border-accent hover:text-accent transition-all duration-200 cursor-default"
                    data-testid={`open-to-${item.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — contact links */}
          <div>
            <div className="space-y-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-accent/50 hover:shadow-md transition-all duration-300"
                  data-testid={`contact-${link.label.toLowerCase()}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded border border-border bg-secondary flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300">
                      <link.icon size={17} className="text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <div className="font-sans font-semibold text-foreground text-sm">
                        {link.label}
                      </div>
                      <div className="text-xs text-muted-foreground font-sans mt-0.5">
                        {link.handle}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-sans hidden sm:block group-hover:text-foreground transition-colors">
                      {link.description}
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="text-muted-foreground group-hover:text-accent transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200"
                    />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Resume */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-5"
            >
              <button
                className="w-full py-3.5 border border-dashed border-border rounded text-sm font-sans text-muted-foreground hover:border-accent hover:text-accent transition-all duration-200 flex items-center justify-center gap-2"
                data-testid="contact-resume"
                onClick={() => alert("Resume download — add your PDF link here.")}
              >
                <span>Download Resume</span>
                <ArrowUpRight size={14} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
