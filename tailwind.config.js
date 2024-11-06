/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-card": "0 4px 12px rgba(0, 0, 0, 0.5)",
        "custom-card-hover": "0 6px 18px rgba(0, 0, 0, 0.8)",
      },
      colors: {
        background: "#1B1F23", // Dark Graphite - main background
        cardBg: "#2A2D32", // Anthracite - background for headers/cards
        accentSilver: "#B0B0B5", // Metallic Silver - accents, icons, borders
        highlight: "#3A4F6B", // Steel Blue - links, highlights
        textPrimary: "#D1D1D3", // Lighter Gray - primary text color
        shadowDark: "#0E0E0F", // Graphite Black - shadows, buttons
      },
    },
  },
  plugins: [],
};
