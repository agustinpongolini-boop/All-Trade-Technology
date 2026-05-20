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
        accent: {
          DEFAULT: "#FF6B2B",
          light: "#FF8B54",
        },
        dark: "#0D0D0D",
        darker: "#151515",
        card: "#1A1A1A",
        border: "#2A2A2A",
        body: "#DAD9D9",
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-libre-baskerville)", "serif"],
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(300%)" },
        },
        "orb-drift-a": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "33%": { transform: "translate3d(60px,-40px,0) scale(1.08)" },
          "66%": { transform: "translate3d(-40px,30px,0) scale(0.95)" },
        },
        "orb-drift-b": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(-80px,50px,0) scale(1.12)" },
        },
        "glass-sheen": {
          "0%": { transform: "translateX(-120%) skewX(-20deg)" },
          "100%": { transform: "translateX(220%) skewX(-20deg)" },
        },
      },
      animation: {
        "orb-a": "orb-drift-a 22s ease-in-out infinite",
        "orb-b": "orb-drift-b 28s ease-in-out infinite",
      },
      boxShadow: {
        "glass-inset": "inset 0 1px 0 0 rgba(255,255,255,0.12), inset 0 -1px 0 0 rgba(0,0,0,0.25)",
        "glass-accent": "inset 0 1px 0 0 rgba(255,255,255,0.28), 0 12px 32px -8px rgba(255,107,43,0.45), 0 4px 12px -2px rgba(255,107,43,0.25)",
        "glass-soft": "inset 0 1px 0 0 rgba(255,255,255,0.10), 0 8px 28px -10px rgba(0,0,0,0.6)",
        "glass-pill": "inset 0 1px 0 0 rgba(255,255,255,0.12), 0 14px 44px -12px rgba(0,0,0,0.55)",
      },
    },
  },
  plugins: [],
};
export default config;
