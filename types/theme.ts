export type ThemeName =
  | "light"
  | "dark"
  | "retro"
  | "aurora"
  | "paper";

export interface ThemeContextValue {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themes: ThemeName[];
}

