import { useEffect } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Hash, Github, Mail, Linkedin } from "lucide-react";

const sections = [
  { id: "why-i-build", label: "Why I Build", description: "About Lovepreet" },
  { id: "builder-dashboard", label: "Builder Dashboard", description: "Skills and tools" },
  { id: "project-lab", label: "Project Lab", description: "Projects" },
  { id: "learning-engine", label: "Learning Engine", description: "Journey" },
  { id: "how-i-think", label: "How I Think", description: "Process" },
  { id: "current-mission", label: "Current Mission", description: "2026 Focus" },
  { id: "work-with-me", label: "Work With Me", description: "Contact" },
];

const links = [
  { label: "GitHub", href: "https://github.com/lovepreetkaur", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/lovepreetkaur", icon: Linkedin },
  { label: "Email", href: "mailto:lovepreetkaur@email.com", icon: Mail },
];

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export default function CommandPalette({ open, onClose }: CommandPaletteProps) {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (open) onClose();
      }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, [open, onClose]);

  const scrollTo = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="command-palette-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[80] bg-foreground/20 backdrop-blur-sm flex items-start justify-center pt-[20vh]"
          onClick={onClose}
          data-testid="command-palette-overlay"
        >
          <motion.div
            key="command-palette"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg mx-4"
            data-testid="command-palette"
          >
            <Command
              className="bg-card border border-border rounded-lg shadow-xl overflow-hidden"
              shouldFilter={true}
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                <Search size={14} className="text-muted-foreground shrink-0" />
                <Command.Input
                  placeholder="Navigate to..."
                  className="flex-1 text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                  data-testid="command-palette-input"
                />
                <kbd className="text-xs text-muted-foreground border border-border px-1.5 py-0.5 rounded">
                  ESC
                </kbd>
              </div>
              <Command.List className="max-h-72 overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                  No results found.
                </Command.Empty>
                <Command.Group heading={<span className="text-xs font-medium text-muted-foreground tracking-wider uppercase px-2">Sections</span>}>
                  {sections.map((s) => (
                    <Command.Item
                      key={s.id}
                      value={s.label}
                      onSelect={() => scrollTo(s.id)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded text-sm cursor-pointer text-foreground hover:bg-secondary aria-selected:bg-secondary transition-colors"
                      data-testid={`command-item-${s.id}`}
                    >
                      <Hash size={13} className="text-muted-foreground" />
                      <span className="font-medium">{s.label}</span>
                      <span className="ml-auto text-xs text-muted-foreground">{s.description}</span>
                    </Command.Item>
                  ))}
                </Command.Group>
                <Command.Group heading={<span className="text-xs font-medium text-muted-foreground tracking-wider uppercase px-2">Connect</span>}>
                  {links.map((l) => (
                    <Command.Item
                      key={l.label}
                      value={l.label}
                      onSelect={() => { onClose(); window.open(l.href, "_blank"); }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded text-sm cursor-pointer text-foreground hover:bg-secondary aria-selected:bg-secondary transition-colors"
                      data-testid={`command-link-${l.label.toLowerCase()}`}
                    >
                      <l.icon size={13} className="text-muted-foreground" />
                      <span>{l.label}</span>
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
