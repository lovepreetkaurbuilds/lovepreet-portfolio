import { createContext, useContext, useState } from "react";

export type PortfolioMode = "builder" | "recruiter";

interface ModeContextValue {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
  isRecruiter: boolean;
}

const ModeContext = createContext<ModeContextValue>({
  mode: "builder",
  setMode: () => {},
  isRecruiter: false,
});

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<PortfolioMode>("builder");

  return (
    <ModeContext.Provider value={{ mode, setMode, isRecruiter: mode === "recruiter" }}>
      {children}
    </ModeContext.Provider>
  );
}

export const useMode = () => useContext(ModeContext);
