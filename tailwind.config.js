/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'fg-primary': '#e25aa0',
        'fg-secondary': '#d02f82',
        'txlight': '#b8ffd9',
        'txdark': '#222d47',
      }
    },
  },
  plugins: [],
}

