/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        dodgerBlue:'#1E90FF',
        lightOrange:'FF8000',
        palePink:'FFCCFF',
        lightBlue:'#1ec8ff',
        stormGrey:'#797980',
        deepRed:'#FF5D36',
        darkGray:'#636868'
      }
    },
  },
  plugins: [],
}
