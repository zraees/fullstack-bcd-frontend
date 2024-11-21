import { createContext, ReactNode, useState } from "react";
import { ThemeContextType } from "../types/types";

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkTheme, setIsDark] = useState(JSON.parse(localStorage.getItem("isDarkTheme")??"false"));

  const toggleTheme = (isDark : boolean) => {
    localStorage.setItem("isDarkTheme", JSON.stringify(isDark));
    setIsDark(isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

