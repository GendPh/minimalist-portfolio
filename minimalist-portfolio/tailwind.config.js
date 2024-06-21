/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-Cyan': '#5FB4A2',
        'primary-Dark-Blue': '#203A4C',
        'primary-Grayish-Dark-Blue': '#33323D',
        'secondary-Very-Light-Grey': '#FAFAFA',
        'secondary-Light-Grey': '#EAEAEB',
        'secondary-Bright-Red': '#F43030',
      }
    },
  },
  plugins: [],
}