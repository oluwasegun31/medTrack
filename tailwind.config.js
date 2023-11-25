/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#9788AB",
          200: "#2A1A5C",
          400: "#1D1542",
          800: "#1D1542",
        },
        secondary: "#E5FD91",
        tertiary: {
          100: "#DEC9FB",
          200: "#F7BEE1",
          400: "#ED66B9",
          800: "#F27FC6"
        }
      }
    },
    fontFamily: {
      Aspekta: 'Aspekta'
    }
  },
  plugins: [],
}

