/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#222831",
        blue: "#00ADB5",
        red: "#393E46",
        yellow: "#FDCC49",
        grey: "#ededed",
        white: "#EEEEEE",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        error: "#FF0000",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #00ADB5 14.53%, #393E46 69.36%, #FDCC49 117.73%)",
      }),
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        karla: ["Karla", "sans-serif"],
      },
      content: {
        // brush: "url('./assets/brush.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
