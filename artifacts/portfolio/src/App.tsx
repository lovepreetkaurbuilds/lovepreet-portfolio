import { useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeProvider } from "@/context/ModeContext";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CommandPalette from "@/components/layout/CommandPalette";
import Hero from "@/components/sections/Hero";
import BuilderJourney from "@/components/sections/BuilderJourney";
import WhyIBuild from "@/components/sections/WhyIBuild";
import BuilderToolkit from "@/components/sections/BuilderToolkit";
import ProjectLab from "@/components/sections/ProjectLab";
import WorkExperience from "@/components/sections/WorkExperience";
import LearningEngine from "@/components/sections/LearningEngine";
import HowIThink from "@/components/sections/HowIThink";
import OpenToWork from "@/components/sections/OpenToWork";
import Contact from "@/components/sections/Contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Portfolio() {
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <Navbar onCommandPalette={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
      <main>
        <Hero />
        <BuilderJourney />
        <WhyIBuild />
        <BuilderToolkit />
        <ProjectLab />
        <WorkExperience />
        <LearningEngine />
        <HowIThink />
        <OpenToWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="lk-portfolio-theme">
      <ModeProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <Router />
            </WouterRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ModeProvider>
    </ThemeProvider>
  );
}

export default App;
