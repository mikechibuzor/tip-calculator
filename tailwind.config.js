// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "space-mono": ["Space Mono", "monospace"],
    },
    extend: {
      colors: {
        "strong-cyan": "hsl(172, 67%, 45%)",
        "very-dark-cyan": "hsl(183, 100%, 15%)",
        "dark-grayish-cyan1": "hsl(186, 14%, 43%)",
        "dark-grayish-cyan2": "hsl(184, 14%, 56%)",
        "light-grayish-cyan1": "hsl(185, 41%, 84%)",
        "light-grayish-cyan2": "hsl(189, 41%, 97%)",
      },
      height: {
        height10: "10vh",
        height15: "15vh",
        height20: "20vh",
        height30: "30vh",
        height40: "40vh",
        height50: "50vh",
        height55: "55vh",
        height60: "60vh",
        height70: "70vh",
        height80: "80vh",
        height90: "90vh",
        height100: "100vh",
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
