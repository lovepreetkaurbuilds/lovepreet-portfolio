import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const rotatingKeywords = [
  "Software", "Systems", "Automation", "AI",
  "Real Projects", "Problem Solving", "Documentation", "Self-Learning"
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [kwIndex, setKwIndex] = useState(0);

  // Rotate keywords
  useEffect(() => {
    const timer = setInterval(() => {
      setKwIndex((i) => (i + 1) % rotatingKeywords.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Animated grid background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animFrame: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const isDark = () => document.documentElement.classList.contains("dark");

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      const gs = 40;
      ctx.strokeStyle = isDark() ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
      ctx.lineWidth = 1;
      for (let x = 0; x < w + gs; x += gs) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h + gs; y += gs) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }
      // Moving gold glow
      const cx = (w / 2) + Math.sin(time * 0.25) * 100;
      const cy = (h / 2) + Math.cos(time * 0.18) * 70;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 350);
      grad.addColorStop(0, isDark() ? "rgba(201,168,76,0.12)" : "rgba(201,168,76,0.09)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      time += 0.008;
      animFrame = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(animFrame); };
  }, []);

  const scroll = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="relative z-10 text-center px-5 sm:px-8 w-full max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 rounded-full flex-wrap justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
            <span className="text-xs font-sans text-muted-foreground tracking-widest uppercase text-center">
              Computer Programmer Graduate · Open to Work · Canada · India · Remote
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] tracking-tight mb-6 max-w-4xl mx-auto"
        >
          Building Practical Technology
          <br className="hidden sm:block" />
          {" "}
          <span className="text-foreground/70">Through Learning, Work,</span>
          <br className="hidden sm:block" />
          {" "}
          <span className="text-foreground/70">and Real Projects</span>
        </motion.h1>

        {/* Rotating keyword */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.3 }}
          className="h-10 flex items-center justify-center mb-4"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={kwIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-2xl md:text-3xl font-semibold text-accent"
            >
              {rotatingKeywords[kwIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-muted-foreground font-sans leading-loose max-w-xl mx-auto mb-10 sm:mb-12"
        >
          I am a Computer Programmer graduate building skills through software projects, systems practice, automation experiments, and real-world problem solving.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <button
            onClick={() => scroll("#project-lab")}
            className="px-7 py-3 bg-foreground text-background font-sans text-sm tracking-wide hover:bg-foreground/90 transition-all rounded"
            data-testid="hero-view-work"
          >
            View My Work
          </button>
          <button
            onClick={() => scroll("#builder-journey")}
            className="px-7 py-3 border border-border text-foreground font-sans text-sm tracking-wide hover:border-accent hover:text-accent transition-all rounded"
            data-testid="hero-see-journey"
          >
            See My Journey
          </button>
          <a
            href="https://github.com/lovepreetkaurbuilds"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-border text-muted-foreground font-sans text-sm hover:border-foreground hover:text-foreground transition-all rounded"
            data-testid="hero-github"
          >
            <Github size={14} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lovepreetkaur10"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-border text-muted-foreground font-sans text-sm hover:border-foreground hover:text-foreground transition-all rounded"
            data-testid="hero-linkedin"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
          <a
            href="mailto:lovepreetkaur090gsp@gmail.com"
            className="flex items-center gap-2 px-5 py-3 border border-border text-muted-foreground font-sans text-sm hover:border-foreground hover:text-foreground transition-all rounded"
            data-testid="hero-email"
          >
            <Mail size={14} />
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 3.1 }}
        onClick={() => scroll("#builder-journey")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        data-testid="hero-scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
