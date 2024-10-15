/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        success: {
          100: '#d4edda',
          500: '#28a745',
          700: '#218838', 
        },
        error: {
          100: '#f8d7da',
          500: '#dc3545',
          700: '#c82333', 
        },
        warn: {
          100: '#fff3cd',
          500: '#ffc107',
          700: '#e0a800', 
        },
        info: {
          100: '#d1ecf1',
          500: '#17a2b8',
          700: '#117a8b', 
        },
        // Add more colors as needed
      },
      boxShadow : {
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
      },
      rotate: {
        '360': '360deg',
      },
    },
  },
  plugins: [],
}
