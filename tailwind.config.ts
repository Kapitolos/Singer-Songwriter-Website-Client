import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        heading: "var(--heading-color)",
      },
      fontFamily: {
        sans: ["var(--font-playfair-display)", "Playfair Display", "serif"],
        heading: ["var(--font-anton-sc)", '"Anton SC"', "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
