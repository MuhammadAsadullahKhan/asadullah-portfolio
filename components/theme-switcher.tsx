"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./theme-provider";
import type { ThemeName } from "@/types/theme";

const themeLabels: Record<ThemeName, string> = {
  light: "Light",
  dark: "Dark",
  retro: "Retro",
  aurora: "Aurora",
  paper: "Paper",
};

export function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--background)]/70 px-3 py-1.5 text-xs font-medium text-[color:var(--foreground)] shadow-sm backdrop-blur-sm transition hover:bg-[color:var(--muted)]"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-sky-500 via-violet-500 to-fuchsia-500" />
        <span>{themeLabels[theme]}</span>
        <ChevronDown className="h-3 w-3" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.12 }}
            className="absolute right-0 z-20 mt-2 w-40 overflow-hidden rounded-xl border border-[color:var(--border-soft)] bg-[color:var(--background)] p-1 text-xs shadow-lg backdrop-blur-lg"
            role="listbox"
          >
            {themes.map((t) => (
              <li key={t}>
                <button
                  type="button"
                  onClick={() => {
                    setTheme(t);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left transition hover:bg-[color:var(--muted-foreground)]/10 ${t === theme
                      ? "bg-[color:var(--muted)] font-semibold text-[color:var(--foreground)]"
                      : "text-[color:var(--foreground)]"
                    }`}
                  role="option"
                  aria-selected={t === theme}
                >
                  <span>{themeLabels[t]}</span>
                  {t === theme && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

