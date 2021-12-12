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
      black: '#000000',
      blue: '#87ceeb',
      gray: '#808080'
    },
    fontFamily: {
      sans: ['Iransans', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

  },
  variants: {
    extend: {}
  },
  plugins: []
}
