/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#5865F2", // Discord blue
      yellow: "#FCD34D",
      green: "#4CAF50",
      red: "#FF5252",
      orange: "#FFA500",
      cyan: "#00BCD4",
      pink: "#FF4081",
      dark: {
        100: "#36393F", // Dark theme background
        200: "#2F3136", // Slightly darker
        300: "#202225", // Even darker
        400: "#121314",
        500: "#0D1011",
        600: "#090C0E",
        700: "#060809",
        800: "#030404",
        900: "#000000",
      },
      light: {
        100: "#FFFFFF", // Light theme background
        200: "#F2F3F5", // Slightly lighter
        300: "#E3E5E8", // Even lighter
        400: "#D8DCE0",
        500: "#C3C9D0",
        600: "#ABB4BE",
        700: "#98A1B0",
        800: "#7D8899",
        900: "#646B7A",
      },
      status: {
        online: "#43B581", // Online status color
        idle: "#FAA61A", // Idle status color
        dnd: "#F04747", // Do Not Disturb status color
        invisible: "#747F8D", // Invisible status color
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
