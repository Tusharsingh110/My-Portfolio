/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4285F4',
        secondary: '#DB4437',
        accent: '#F4B400',
        tertiary: '#0F9D58',
        success: '#48BB78',
        warning: '#F6AD55',
        error: '#FC8181',
        info: '#63B3ED',
      },
    },
  },
  plugins: [],
}