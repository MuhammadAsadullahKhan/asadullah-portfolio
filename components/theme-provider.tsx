"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ThemeContextValue, ThemeName } from "@/types/theme";

const THEME_STORAGE_KEY = "portfolio-theme";

const themes: ThemeName[] = [
  "light",
  "dark",
  "retro",
  "aurora",
  "paper",
];

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): ThemeName {
  if (typeof window === "undefined") return "dark";
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")
    .matches;
  return prefersDark ? "dark" : "light";
}

function applyThemeToDocument(theme: ThemeName) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = theme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => "dark");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as
      | ThemeName
      | null;
    const initial = stored && themes.includes(stored) ? stored : getSystemTheme();
    setThemeState(initial);
    applyThemeToDocument(initial);
  }, []);

  const setTheme = useCallback((next: ThemeName) => {
    setThemeState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    }
    applyThemeToDocument(next);
  }, []);

  const value: ThemeContextValue = {
    theme,
    setTheme,
    themes,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}

