/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
          inter: ['Inter', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
          roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        h1Color: "#143E4A",
        h2Color: "#4C4C4C",
        h3Color: "#273240",
        bodyText:  '#646464',
        primary :  '#D1FED1',
        button : '#008D96',
        gradient: '#CDE5E0',
        jobs: "#D8E7FF",
        iconBg: '#D9D9D9',
        lightText: '#777777'
      }
    },
   
  },
  plugins: [],
}
