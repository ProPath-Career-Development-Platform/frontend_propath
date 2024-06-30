/** @type {import('tailwindcss').Config} */

const { nextui, collapseAdjacentVariantBorders, colors } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        purple1: '#3f067a',
        grey1: '#a9a9a9',
        purple2: '#9a80d4',
        purple3: '#b0b0d9'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

