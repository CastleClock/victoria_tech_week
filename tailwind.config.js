/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        vibrant: "#1DAC98",
      },
      fontFamily: {
        header: ["Recoleta", ...defaultTheme.fontFamily.sans],
        copy: ["Suisse", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
