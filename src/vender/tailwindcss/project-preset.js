const defaultTheme = require('tailwindcss/defaultTheme')
const screens = require('./screens.json')
const colors = require('./colors.json')
const fontSize = require('./fontSize.json')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Noto Serif TC'", ...defaultTheme.fontFamily.serif],
      },
      colors,
      animation: {
        'fade-in': 'fade-in .6s linear .2s 1 forwards',
        'fade-in-delay-0': 'fade-in .8s linear 0s 1 forwards',
        'fade-up': 'fade-up .3s easeOutBack .2s 1 forwards',
        'fade-up-delay-0': 'fade-up .3s easeOutBack 0s 1 forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(100px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
    screens,
    fontSize,
  },
}
