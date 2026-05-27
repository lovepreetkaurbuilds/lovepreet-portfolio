import { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";
import { useMode } from "@/context/ModeContext";
import { Moon, Sun, Command } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Journey", href: "#builder-journey" },
  { label: "Projects", href: "#project-lab" },
  { label: "Toolkit", href: "#builder-toolkit" },
  { label: "Experience", href: "#work-experience" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  onCommandPalette: () => void;
}

export default function Navbar({ onCommandPalette }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const { mode, setMode } = useMode();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const toggleMode = () => setMode(mode === "builder" ? "recruiter" : "builder");

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-serif text-lg font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
          data-testid="nav-logo"
        >
          LK
        </button>

        <nav className="hidden md:flex items-center gap-6" data-testid="nav-links">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
              data-testid={`nav-link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Mode toggle */}
          <button
            onClick={toggleMode}
            className={`hidden md:flex items-center gap-1.5 text-xs px-2.5 py-1 rounded border transition-all duration-200 ${
              mode === "recruiter"
                ? "border-accent/50 text-accent bg-accent/10"
                : "border-border text-muted-foreground hover:border-accent hover:text-accent"
            }`}
            data-testid="nav-mode-toggle"
            title={mode === "builder" ? "Switch to Recruiter View" : "Switch to Builder View"}
          >
            {mode === "recruiter" ? "Recruiter View" : "Builder View"}
          </button>

          <button
            onClick={onCommandPalette}
            className="hidden md:flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded px-2 py-1 hover:border-accent hover:text-foreground transition-all"
            data-testid="nav-command-palette"
            title="Command palette (Ctrl+K)"
          >
            <Command size={12} />
            <span>K</span>
          </button>

          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            data-testid="nav-theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="nav-mobile-toggle"
            aria-label="Toggle mobile menu"
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span className={`block h-px bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-px bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <nav className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => { toggleMode(); setMobileOpen(false); }}
                className={`text-sm text-left px-3 py-1.5 rounded border w-fit transition-all ${
                  mode === "recruiter" ? "border-accent text-accent" : "border-border text-muted-foreground"
                }`}
              >
                {mode === "recruiter" ? "Recruiter View" : "Builder View"}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
