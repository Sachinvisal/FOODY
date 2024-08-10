/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "green" : "#39DB4A",
        "red" : "#3FF6868",
        "secondary" : "#555",
        "primaryBG" : "#FCFCFC",

      }
    },
  },
  plugins: [],
}