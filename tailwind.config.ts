import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "Deep Navy & Cream" (deep-navy) — exact locked swatches.
        primary: "#FAF6EE",       // cream — text / highlights on dark
        accent: "#E8DFCF",        // warm sand — secondary highlight
        bg: "#0E1C33",            // deep navy — page background
        "bg-contrast": "#1F3252", // navy — raised surface
        cream: "#FAF6EE",
        sand: "#E8DFCF",
        navy: "#1F3252",
        "deep-navy": "#0E1C33",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
