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
      },
    },
  },
  plugins: [require("daisyui")],
};

// DaisyUI configuration
export const daisyui = {
  themes: ["light", "dark", "cupcake", "cyberpunk"],
  darkTheme: "dark",
  base: true,
  styled: true,
  utils: true,
};

export default config;
