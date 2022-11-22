/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      colors: {
        gray: {
          900: "#121214"
        },
        base: {
          1: "#217BF4",
          2: "#D4E7FE",
          3: "#656464",
          4: "#0A093D",
          5: "#F1F6FD"
        }
      }
    },
  },
  plugins: [],
}
