import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF8FF",
        surface: {
          DEFAULT: "#FFFFFF",
          light: "#F3E8FF",
          hover: "#E0E7FF",
        },
        cheerful: {
          purple: "#7E22CE",
          "purple-light": "#A855F7",
          blue: "#2563EB",
          "blue-light": "#3B82F6",
          cyan: "#0284C7",
          pink: "#DB2777",
          "pink-light": "#EC4899",
        },
        accent: {
          gold: "#8B5CF6",
          "gold-light": "#C084FC",
        },
        muted: {
          DEFAULT: "#475569",
          light: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      animation: {
        "float-slow": "float 5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3.5s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.06)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
