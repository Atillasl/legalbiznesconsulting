/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#00969A',
          dark: '#007A7E',
        },
      },
    },
  },
  plugins: [],
}