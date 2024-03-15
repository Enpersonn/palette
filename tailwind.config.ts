import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/common/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mars-background": "url('/images/mars-background.jpg')",
        "space-background": "url('/images/space-background.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
