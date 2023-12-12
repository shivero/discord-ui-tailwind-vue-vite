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
        'discord-blue': '#4e59d6',
        'discord-blue-hover': '#4752c4',
      },
      borderRadius: {
        '5xl': '50px'
      },
      boxShadow: {
        'slight-bottom': '0 1px 0 0 rgba(0,0,0,0.24)',
     } 
        },
  },
  plugins: [],
}

