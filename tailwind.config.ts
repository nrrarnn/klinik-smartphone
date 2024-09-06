import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/img/background.jpg')",
      },
      screens: {
        'xs': '480px', 
        'sm': '640px', 
        'md': '769px', 
        'lg': '1024px', 
        'xl': '1280px',
        '2xl': '1536px', 
      },
    },
  },
  plugins: [],
};
export default config;
