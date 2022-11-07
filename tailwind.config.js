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
          yellow: "#EFE5A4"
        }
      },
      width: {
        loading: "649px"
      },
      height: {
        loading: "25px"
      }
    },
  },
  plugins: [],
}
