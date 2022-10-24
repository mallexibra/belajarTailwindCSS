/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}, ./public/spacing.html"],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins'],
      }
    },
  },
  plugins: [],
}
