/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "player1": "#fd6687",
        "player2": "#ffce67",
        "background-main": "#7945ff"
      }
    },
  },
  plugins: [],
}

