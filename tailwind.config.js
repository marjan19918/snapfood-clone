// const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    transparent: 'transparent',
    current: 'currentColor',
    colors: {
      red: 'rgb(255, 0, 166)',
      white: 'rgb(255,255,255)',
      black: 'rgb(58,61,66)',
      blue: '#b0e0e6',
      light_gray: 'rgb(249,250,251)',
     dark_gray:'rgb(235,237,240)',
      grren: 'rgb(0, 184,98)'
    },
    fontFamily: {
      sans: ['Iransans', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    }

  },
  variants: {
    extend: {}
  },
  plugins: []
}
