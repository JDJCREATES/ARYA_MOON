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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom brand colors
        brand: {
          sage: "#C8D2BC",
          lime: "#9DF38C",
          mauve: "#AB82A0",
          plum: "#917693",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        aryamoon: {
          "primary": "#AB82A0",        // Mauve - primary purple
          "primary-content": "#ffffff",
          "secondary": "#917693",      // Plum - darker purple
          "secondary-content": "#ffffff",
          "accent": "#9DF38C",         // Lime - bright green accent
          "accent-content": "#1a1a1a",
          "neutral": "#2a2a2a",
          "neutral-content": "#ffffff",
          "base-100": "#1a1a1a",       // Dark background
          "base-200": "#242424",       // Slightly lighter dark
          "base-300": "#2e2e2e",       // Even lighter dark
          "base-content": "#e5e5e5",   // Light text
          "info": "#C8D2BC",           // Sage - soft accent
          "info-content": "#1a1a1a",
          "success": "#9DF38C",        // Lime green for success
          "success-content": "#1a1a1a",
          "warning": "#f59e0b",
          "warning-content": "#1a1a1a",
          "error": "#ef4444",
          "error-content": "#ffffff",
        },
      },
    ],
    darkTheme: "aryamoon",
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
};

export default config;
