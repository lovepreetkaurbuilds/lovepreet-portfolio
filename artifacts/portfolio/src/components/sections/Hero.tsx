import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const words = ["BUILD", "TEST", "IMPROVE", "REPEAT"];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      const gridSize = 48;
      const color = isDark() ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      for (let x = 0; x < w + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      // subtle moving dot
      const dotColor = isDark() ? "rgba(201,168,76,0.15)" : "rgba(201,168,76,0.12)";
      const cx = (w / 2) + Math.sin(time * 0.3) * 80;
      const cy = (h / 2) + Math.cos(time * 0.2) * 60;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 300);
      grad.addColorStop(0, dotColor);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      time += 0.01;
      animFrame = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  const scrollToWork = () => {
    document.querySelector("#why-i-build")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToJourney = () => {
    document.querySelector("#learning-engine")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollDown = () => {
    document.querySelector("#why-i-build")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Animated statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
            {words.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 md:gap-5"
              >
                <span className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl text-foreground tracking-tight leading-none">
                  {word}
                </span>
                {i < words.length - 1 && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 2.0 + i * 0.12 }}
                    className="text-2xl md:text-4xl text-accent font-light"
                  >
                    →
                  </motion.span>
                )}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3"
        >
          <p className="text-xl md:text-2xl font-serif text-foreground/70 italic">
            Learning through projects.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.45, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3"
        >
          <p className="text-xl md:text-2xl font-serif text-foreground/70 italic">
            Building systems.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl font-serif text-foreground/70 italic">
            Solving practical problems.
          </p>
        </motion.div>

        {/* Name badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.1 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-sans text-muted-foreground tracking-widest uppercase">
              Lovepreet Kaur — Technology Builder
            </span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToWork}
            className="px-8 py-3.5 bg-foreground text-background font-sans text-sm tracking-wide hover:bg-foreground/90 transition-all duration-200 rounded"
            data-testid="hero-explore-work"
          >
            Explore Work
          </button>
          <button
            onClick={scrollToJourney}
            className="px-8 py-3.5 border border-border text-foreground font-sans text-sm tracking-wide hover:border-accent hover:text-accent transition-all duration-200 rounded"
            data-testid="hero-view-journey"
          >
            View Journey
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 3.2 }}
        onClick={scrollDown}
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
