/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      sans: [...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'discord-input': '#383a40',
        "discord-dark": "#313338",
        "discord-dark-2": "#2F3136",
        "discord-dark-3": "#202225",
        "discord-dark-4": "#2b2d31",
        "discord-dark-hover": "#4F545C",
        "discord-blue": "#4e59d6",
        "discord-blue-hover": "#4752c4",
      },
      borderRadius: {
        "5xl": "50px",
      },
      boxShadow: {
        "slight-bottom": "0 1px 0 0 rgba(0,0,0,0.24)",
      },
      gridTemplateAreas: {
        "discord-layout": [
          "logo logo logo",
          "serverlist channellist messages"
        ]  
      },
      
    },
  },
  plugins: [],
};
