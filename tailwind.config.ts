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
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'SF Pro Display'",
          "'SF Pro Text'",
          "'Helvetica Neue'",
          "'Segoe UI'",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      colors: {
        /* OPERO official semantic tokens */
        "opero-red": "#D91842",
        "opero-red-hover": "#B8123A",
        "opero-red-press": "#94102F",
        "opero-red-50": "#FDECEF",
        "opero-red-100": "#F9D0D8",
        "opero-green": "#5E9B2E",
        "opero-green-text": "#3F7A1C",
        "opero-green-50": "#EEF6E8",
        "opero-ink": "#151417",
        "opero-ink-2": "#3A393F",
        "opero-ink-mute": "#6E6D75",
        "opero-ink-faint": "#9A99A1",
        "opero-line": "#D9D9DD",
        "opero-line-soft": "#EBEBED",
        "opero-canvas": "#FFFFFF",
        "opero-canvas-soft": "#F5F5F6",
        "opero-night": "#111013",
        "opero-night-surface": "#1B1A1F",
        "opero-night-line": "#2A2A2E",
        "opero-on-dark-mute": "#A9A8AF",

        /* Tailwind RGB utility tokens synced to OPERO */
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
      borderRadius: {
        panel: "20px",
        field: "8px",
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
