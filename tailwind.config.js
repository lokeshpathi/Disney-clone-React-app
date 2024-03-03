/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/*.{jsx,js}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '10px 10px 8px rgba(255,255,255,0.3)',
      }
    },
  },
  plugins: [
require('tailwindcss-no-scrollbar')
  ]
}



