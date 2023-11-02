import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        "dark-gray": "#333333",
        "darker-gray": "#111111",
        "lighter-gray": "#f5f5f5",
        "light-gray": "#dddddd",
        "pure-white": "#ffffff",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
