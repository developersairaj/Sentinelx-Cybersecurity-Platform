import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./features/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0d14",
        surface: "#0f1420",
        "surface-raised": "#141a26",
        border: "#212838",
        "border-muted": "#181e2b",
        signal: {
          DEFAULT: "#6366f1", // primary accent — electric indigo
          dim: "#4338ca",
          amber: "#f59e0b", // signature "live pulse" accent
        },
        severity: {
          critical: "#ef4444",
          high: "#f97316",
          medium: "#eab308",
          low: "#3b82f6",
          info: "#64748b",
        },
      },
      fontFamily: {
        display: ["var(--font-chakra)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
