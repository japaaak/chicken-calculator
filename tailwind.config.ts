import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        notosansjp: ["var(--font-notosansjp)"],
      },
    },
  },
  plugins: [],
};
export default config;
