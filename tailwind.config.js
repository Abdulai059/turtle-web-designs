/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enable dark mode
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#242424",
        card: "#ffffff",
        cardForeground: "#242424",
        primary: "#36d399",
        secondary: "#0f766e",
        accent: "#34d399",
        destructive: "#ef4444",
        muted: "#f5f5f5",
        border: "#d1d5db",
        input: "#e5e7eb",
        ring: "#36d399",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
};
