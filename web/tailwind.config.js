/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        back: {
          1: "#6EC5B8",
          2: "#10A98B",
          3: "#F5454A"
        },
        gray: {
          900: "#121214"
        }
      }
    },
  },
  plugins: [],
}
