import type { Config } from "tailwindcss";

import baseConfig from "@acme/tailwind-config";

export const colors = {
  black: "#000",
  grey: "#7b8ca4",
  highlight: "#e5e5e9",
  light: "#e3f1ff",
  light2: "#F7F2FA",
  light7: "#9ed2e6",
  lightGray: "#f8f4f4",
  lightGray2: "#d4d4d4",
  mediumGray: "#888889",
  primary: "#0a84ff",
  red: "#fc5c65",
  secondary: "#4ecdc4",
  white: "#fff",
  iosBackground: "#f2f2f6",
};

export default {
  content: ["./src/**/*.tsx", "./App.tsx"],
  presets: [baseConfig],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
  colors,
} satisfies Config;
