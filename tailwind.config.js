/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'body' : '#d3d3d3',
      'theme' : 'red'

      },
      fontFamily : {
        jost :['jost','sans-serif'],
           }
      
    },
  },
  plugins: [],
}
