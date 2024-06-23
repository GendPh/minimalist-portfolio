/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {

        background: {
          light: '#FAFAFA',
          darkBlue: '#203A4C',
          dark: '#33323D',
        },

        text: {
          light: '#33323D',
          dark: '#EAEAEB',
          accent: '#5FB4A2',
          red: "#F43030"
        },
      }
    },
    animation: {
      'fadeIn': 'fadeIn 1s ease-in-out forwards',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      }
    }
  },
  plugins: [],
}