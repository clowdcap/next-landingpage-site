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
        
        gray: {
          900: "#121214"
        },

        primary: {
          1: "#ED1E78"
        }
      }
    },
  },
  plugins: [],
}
