/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#00040d",
        blue: "#00ADB5",
        red: "#001B5A",
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
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        karla: ["Karla", "sans-serif"],
      },
      content: {
        // brush: "url('./assets/brush.png')",
      },
      keyframes: {
        rubberBand: {
          "0%": {
            transform: "scaleX(1)",
          },
          "40%": {
            transform: "scaleX(1.12) scaleY(0.75)",
          },
          "55%": {
            transform: "scaleX(0.85) scaleY(1)",
          },
          "65%": {
            transform: "scaleX(1.09) scaleY(0.85)",
          },
          "75%": {
            transform: "scaleX(0.9)  scaleY(1)",
          },
          "90%": {
            transform: "scaleX(1.05) scaleY(0.95)",
          },
          "100%": {
            transform: "scaleX(1) scaleY(1)",
          },
        },

        extra: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "30%": {
            transform: "scale3d(1.25, 0.75, 1)",
          },
          "40%": {
            transform: "scale3d(0.75, 1.25, 1)",
          },
          "50%": {
            transform: "scale3d(1.15, 0.85, 1)",
          },
          "65%": {
            transform: "scale3d(0.95, 1.05, 1)",
          },
          "75%": {
            transform: "scale3d(1.05, 0.95, 1)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
      },

      animation: {
        rubber: "rubberBand 0.8s alternate ease-out",
        extraRubber: "extra 0.8s ease-in-out",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
