/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'georama': ['Georama', 'sans-serif'] 
      },
      colors: {
        primary: {
          brown: "#CFA575",
          green: "#4E7B57",
          lightOrigin: "#F1EDE9",
          yellow: "#EFE5A4",
          darkYellow: "#D2C67A",
          shadowGreen: "#A9C1AE",
          darkOrange: "#CFA575",
          shadowOrange: "#DFC5A7",
          gray: "#4B4B4B"
        }
      },
      width: {
        loading: "649px",
        card: "475px"
      },
      height: {
        loading: "25px",
        card: "152px"
      }
    },
  },
  plugins: [],
}
