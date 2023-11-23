/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],

  theme: {
    fontFamily:{
      'sans': ['Nunito', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        'discord-dark': '#36393F',
        'discord-dark-2': '#2F3136',
        'discord-dark-3': '#202225',
        'discord-dark-4': '#292B2F',
        'discord-dark-hover': '#4F545C',
        'discord-blue': '#7289DA',
      },
      borderRadius: {
        '5xl': '50px'
      }
    },
  },
  plugins: [],
}

