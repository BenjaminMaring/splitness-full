/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      background: "#F4F4F4",
      red: '#dd1c1a',
      yellow: "#f0c808",
      lightBlue: "#07a0c3",
      darkBlue: "#086788",
      text: "#0F0F0F",
      soft: "#EBEBEB",
      dark: "#1e1e1e"
    }
  },
  plugins: [],
}

