/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  presets: [require('./src/vender/tailwindcss/project-preset.js')],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
