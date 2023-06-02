export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cRed: "#fd5e53",
        cWhite: '#f9fcfb',
        cLightGreen: '#b0eacd',
        cGreen: '#21bf73',
        cPink: '#F4DADA',
        cDarkPink: '#E688A1'
      }
    },
  },
  plugins: [require("daisyui")],
}

