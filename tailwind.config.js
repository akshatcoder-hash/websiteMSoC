/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './pages/**/*.{html,js}',
    './index.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')

  ],
}
