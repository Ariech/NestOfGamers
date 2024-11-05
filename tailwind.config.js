/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1B1F23", // Dark Graphite - main background
        cardBg: "#2A2D32", // Anthracite - background for headers/cards
        accentSilver: "#B0B0B5", // Metallic Silver - accents, icons, borders
        highlight: "#3A4F6B", // Steel Blue - links, highlights
        textPrimary: "#A6A6A8", // Gray - primary text color
        shadowDark: "#0E0E0F", // Graphite Black - shadows, buttons
        actionGreen: "#379683", // Emerald Green - CTA buttons, interactive elements
      },
      textColor: {
        DEFAULT: "#A6A6A8",
      },
    },
  },
  plugins: [],
};
