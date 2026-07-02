/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        breathe: "breathe 4s ease-in-out infinite",
        "slide-left": "slideLeft 12s linear infinite",
        "slide-right": "slideRight 12s linear infinite",
      },

      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(2)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 0.33rem))" },
        },
        slideRight: {
          "0%": { transform: "translateX(calc(-50% - 0.33rem))" },
          "100%": { transform: "translateX(0)" },
        },
      },

      colors: {
        // Pulse X Colors
        "pulse-x-red": "#F23333",
        "pulse-x-dark-red": "#E32323",
        "pulse-x-card-red": "#D10D10",
        "pulse-x-card-gray": "#989FAC",
        "pulse-x-subtitle-gray": "#DEDEDE",

        // Snackly
        "snackly-blue": "#3A0CA3",
        "snackly-purple": "#7209B7",
        "snackly-card-gray": "#989FAC",

        // Drox360
        "drox360-orange": "#FC641C",
        "drox360-light-gray": "#E5E5E5",
        "drox360-dark-gray": "#989FAC",
        "drox360-input-gray": "#DDDEE3",

        // Cybersky
        "cybersky-red": "#F23333",

        // Globals
        white: "#E5E5E5",
        "placeholder-color": "#E5E5E5",
      },
      fontFamily: {
        // Default font
        sans: ["Glacial Indifference", "sans-serif"],
        glacial: ["Glacial Indifference", "sans-serif"],
      },
      fontSize: {
        // Titles

        // titre : text-t3 md:text-h6
        h1: "8rem",
        h2: "6rem",
        h3: "5rem",
        h4: "4rem",
        h5: "3rem",
        h6: "2.25rem",
        h7: "1.5rem",

        // Texts
        t1: "2rem",
        t2: "1.75rem",
        t3: "1.5rem",
        t4: "1.25rem",
        t5: "1rem",
        t6: "0.75rem",
        t7: "0.625rem",

        // Pour rendre la police Bold, il faut utiliser: font-bold
      },
      borderRadius: {
        r01: "2.5rem",
        r1: "1.875rem",
        r3: "0.9375rem",
      },
    },
  },
  plugins: [],
};
