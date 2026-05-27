import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-serif text-lg font-semibold text-foreground">Lovepreet Kaur</p>
          <p className="text-sm text-muted-foreground mt-1">
            Technology, systems, automation, and real-world problem solving.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:lovepreetkaur090gsp@gmail.com"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Email"
            data-testid="footer-email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/lovepreetkaur10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn"
            data-testid="footer-linkedin"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/lovepreetkaurbuilds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub"
            data-testid="footer-github"
          >
            <Github size={18} />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">Built by Lovepreet Kaur</p>
      </div>
    </footer>
  );
}
