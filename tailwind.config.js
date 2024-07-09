/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#eeedeb",
        tan: "#e6b9a6",
        darkslategray: "#2f3645",
        gray: {
          "100": "#939185",
          "200": "#1c1b1f",
        },
        darkgray: "#a5a5a5",
        coral: "#e46935",
        white: "#fff",
        chocolate: "#df6633",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "lexend-deca": "'Lexend Deca'",
        "dm-serif-display": "'DM Serif Display'",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "45xl": "64px",
      "32xl": "51px",
      "13xl": "32px",
      "7xl": "26px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
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