/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: '#143642',
        yellow: '#ec9a29',
        red: '#a8201a'
      },
      fontFamily:{
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      },
    },
  },
  plugins: [],
}

