import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, CheckCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-28 md:py-36 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-4">
            09 — Connect
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Get In Touch
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-lg max-w-xl">
            Whether you have a role to discuss, a project idea to explore, or just want to connect — I'd be glad to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-emerald-500/30 rounded-lg p-10 flex flex-col items-center justify-center text-center min-h-[320px]"
              >
                <CheckCircle size={36} className="text-emerald-500 mb-4" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Message Received
                </h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  Thank you for your message. I will get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                <div>
                  <label className="block text-xs font-sans font-semibold text-foreground mb-2 tracking-wide uppercase" htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                    data-testid="contact-input-name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-semibold text-foreground mb-2 tracking-wide uppercase" htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                    data-testid="contact-input-email"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-semibold text-foreground mb-2 tracking-wide uppercase" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Your message..."
                    data-testid="contact-input-message"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-foreground text-background font-sans text-sm tracking-wide rounded hover:bg-foreground/90 transition-all disabled:opacity-60"
                  data-testid="contact-submit"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                <p className="text-xs text-muted-foreground font-sans text-center">
                  This form doesn't send email directly — I'll receive your message and reply via email.
                </p>
              </form>
            )}
          </motion.div>

          {/* Direct links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-6"
            >
              <div className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-5">
                Or reach me directly
              </div>
              <div className="space-y-3">
                {[
                  { label: "Email Me", handle: "lovepreetkaur090gsp@gmail.com", href: "mailto:lovepreetkaur090gsp@gmail.com", icon: Mail, external: false },
                  { label: "LinkedIn", handle: "linkedin.com/in/lovepreetkaur10", href: "https://www.linkedin.com/in/lovepreetkaur10", icon: Linkedin, external: true },
                  { label: "GitHub", handle: "github.com/lovepreetkaurbuilds", href: "https://github.com/lovepreetkaurbuilds", icon: Github, external: true },
                ].map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="group flex items-center justify-between p-5 bg-card border border-border rounded-lg hover:border-accent/40 hover:shadow-md transition-all duration-300"
                    data-testid={`contact-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded border border-border bg-secondary flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/5 transition-all">
                        <link.icon size={16} className="text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                      <div>
                        <div className="text-sm font-sans font-semibold text-foreground">{link.label}</div>
                        <div className="text-xs text-muted-foreground font-sans">{link.handle}</div>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-accent transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-5 bg-card border border-border rounded-lg"
            >
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                I respond to professional inquiries within 24–48 hours. Best way to reach me quickly is via email or LinkedIn.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
