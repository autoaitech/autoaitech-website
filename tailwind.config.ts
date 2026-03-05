import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0A0A0A",
          blue: "#2563EB",
          "blue-hover": "#1D4ED8",
          "light-bg": "#F9FAFB",
          "dark-text": "#F1F5F9",
          "light-text": "#1E293B",
          muted: "#64748B",
          border: "#E2E8F0",
          "dark-border": "#1E293B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
