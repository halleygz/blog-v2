/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#eeedeb",
        coral: "#e46935",
        white: "#fff",
        darkslategray: "#2f3645",
        gray: {
          "100": "#939185",
          "200": "#1c1b1f",
        },
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
      xl: "20px",
      base: "16px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "5xl": "24px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "45xl": "64px",
      "32xl": "51px",
      inherit: "inherit",
    },
    screens: {
      mq1575: {
        raw: "screen and (max-width: 1575px)",
      },
      mq1525: {
        raw: "screen and (max-width: 1525px)",
      },
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
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
