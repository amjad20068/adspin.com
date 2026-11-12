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
        brand: {
          black: "#000000",
          "black-pure": "#000000",
          "black-soft": "#0F0F0F",
          "black-muted": "#1A1A1A",
          red: "#D54F56",
          "red-hover": "#C03F46",
          "red-light": "#FFF1F2",
          white: "#FFFFFF",
          gray: {
            50: "#F9F9F9",
            100: "#F3F3F3",
            200: "#E5E5E5",
            300: "#D4D4D4",
            400: "#A3A3A3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#171717",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.03em",
        editorial: "-0.02em",
        wide: "0.05em",
        widest: "0.15em",
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "spin-slower": "spin 40s linear infinite",
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;

