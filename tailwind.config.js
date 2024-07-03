/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#eeedeb",
        gray: {
          "100": "#939185",
          "200": "#1c1b1f",
        },
        coral: "#e46935",
        white: "#fff",
        darkslategray: "#2f3645",
        chocolate: "#df6633",
        tan: "#e6b9a6",
        darkgray: "#a5a5a5",
      },
      spacing: {},
      fontFamily: {
        "lexend-deca": "'Lexend Deca'",
        "dm-serif-display": "'DM Serif Display'",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "45xl": "64px",
      "5xl": "24px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "32xl": "51px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};