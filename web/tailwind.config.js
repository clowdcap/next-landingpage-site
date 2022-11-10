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
          1: "#F48E9C"
        },

        back: {
          1: '#EEEEEE'
        }
      }
    },
  },
  plugins: [],
}
