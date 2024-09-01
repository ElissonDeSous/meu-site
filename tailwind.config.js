/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    extend: {
      backgroundImage:{
         'fundo' : "url(./public/Fundo.webp) "
      }
    },
  },
  plugins: [],
}

