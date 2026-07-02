import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette lifted from the RCE business card: warm-black field, brushed-gold
        // engraving, and a bronze mid-tone for depth. No pure #000 / #FFF anywhere.
        ink: "#0B0A08",        // primary background — warm near-black
        panel: "#151310",      // raised surface / cards
        panelLine: "#2A2418",  // hairline borders on dark panels
        gold: "#C9A24B",       // primary metallic gold (headline, icons)
        goldLight: "#E8CD8A",  // hover / highlight gold
        bronze: "#8C6A3F",     // secondary accent, deeper & quieter
        parchment: "#EDE7D8",  // body text on dark
        parchmentDim: "#B8B0A0", // muted secondary text
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "gold-fade": "linear-gradient(90deg, #C9A24B 0%, #E8CD8A 50%, #C9A24B 100%)",
      },
      boxShadow: {
        goldGlow: "0 0 40px -12px rgba(201,162,75,0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
