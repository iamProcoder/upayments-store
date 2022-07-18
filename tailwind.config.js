/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'background-body-color': '#ccc'
      }
    },
  },
  plugins: [],
}
