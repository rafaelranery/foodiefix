export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cRed: "#e63946",
        cWhite: '#f9fcfb',
        cLightGreen: '#b0eacd',
        cGreen: '#21bf73',
        cPink: '#F4DADA',
        cDarkPink: '#E688A1',
        btnPrimary: '#457b9d',
        btnHover: '#1d3557'
      }
    },
  },
  plugins: [require("daisyui")],
}

