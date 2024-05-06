import type { Config } from "tailwindcss";

const config: Config = {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {heroImage: "url('https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg')"},
    },
  },
  plugins: [],
};
export default config;
