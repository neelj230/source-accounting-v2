import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2B3F36",
          light: "#3D5A4C",
          dark: "#1A2B22",
        },
        cream: "#F5F3EC",
        dark: "#1A1A1A",
        body: "#4A4A4A",
        accent: "#C4A35A",
        muted: "#8A8A7A",
      },
      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: [
          "clamp(3rem, 8vw, 7rem)",
          { lineHeight: "1.05", letterSpacing: "-0.04em" },
        ],
        heading: [
          "clamp(2rem, 5vw, 4rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        subheading: [
          "clamp(1.25rem, 3vw, 2rem)",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
      },
      letterSpacing: {
        editorial: "-0.06em",
        tight: "-0.03em",
      },
      maxWidth: {
        site: "1400px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
