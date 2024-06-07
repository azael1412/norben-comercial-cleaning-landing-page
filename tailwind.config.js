/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        "brand-blue": {
          50: "#eceff5",
          100: "#d9dfea",
          200: "#b2bed5",
          300: "#8c9ec1",
          400: "#657dac",
          500: "#3f5d97",
          600: "#324a79",
          700: "#26385b",
          800: "#19253c",
          900: "#0d131e",
        },
        "brand-orange": {
          50: "#fef4e6",
          100: "#fdeacc",
          200: "#fbd499",
          300: "#fabf66",
          400: "#f8a933",
          500: "#f69400",
          600: "#c57600",
          700: "#945900",
          800: "#623b00",
          900: "#311e00",
        },
      },
    },
  },
  plugins: [],
};
