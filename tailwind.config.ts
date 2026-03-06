import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // new design system
        "off-white":   "#fafaf9",
        border:        "#e2e1de",
        "border-strong": "#c8c5c0",
        "ink-mid":     "#6b6a67",
        "ink-faint":   "#a09e9b",
        green:         "#059669",
        "green-light": "#d1fae5",
        "green-mid":   "#6ee7b7",
        // legacy tokens (used by /systems, /contact pages)
        paper:         "#f5f2ec",
        warm:          "#ede9e1",
        ink:           "#0f0d0b",
        mid:           "#7a7168",
        rule:          "#c8c0b4",
        accent:        "#c1440e",
        "ink-deep":    "#2a2520",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        serif:   ["var(--font-serif)", "Georgia", "serif"],
        mono:    ["var(--font-mono)", "monospace"],
        sans:    ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
