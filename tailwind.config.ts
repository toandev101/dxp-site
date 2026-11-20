import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        md: "768px",
        lg: "992px",
        xl: "1280px",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      colors: {
        "c-primary": "rgb(var(--color-c-primary) / <alpha-value>)",
        "c-primary-hover": "rgb(var(--color-c-primary-hover) / <alpha-value>)",
        "c-primary-soft": "rgb(var(--color-c-primary-soft) / <alpha-value>)",
        "c-accent": "rgb(var(--color-c-accent) / <alpha-value>)",
        "c-success": "rgb(var(--color-c-success) / <alpha-value>)",
        "c-warning": "rgb(var(--color-c-warning) / <alpha-value>)",
        "c-error": "rgb(var(--color-c-error) / <alpha-value>)",
        "c-dark": "rgb(var(--color-c-dark) / <alpha-value>)",
        "c-dark-elevated": "rgb(var(--color-c-dark-elevated) / <alpha-value>)",
        "c-surface": "rgb(var(--color-c-surface) / <alpha-value>)",
        "c-border": "rgb(var(--color-c-border) / <alpha-value>)",
        "c-base": "rgb(var(--color-c-base) / <alpha-value>)",
        "c-description": "rgb(var(--color-c-description) / <alpha-value>)",
        "c-muted": "rgb(var(--color-c-muted) / <alpha-value>)",
      },
      boxShadow: {
        "bx-base": "var(--box-shadow-base)",
        "bx-card": "var(--box-shadow-card)",
        "bx-elevated": "var(--box-shadow-elevated)",
        "bx-glow": "var(--box-shadow-glow)",
      },
    },
  },
  plugins: [],
};

export default config;
