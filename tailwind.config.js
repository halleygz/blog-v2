/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "whitesmoke": "#eeedeb",
        "coral": "#e46935",
        "palegreen": "rgba(110, 235, 131, 0)",
        "forestgreen": "rgba(59, 184, 79, 0)",
        "chocolate": {
          "100": "#df6633",
          "200": "#cc4f1c"
        },
        "white": "#fff",
        "gray": {
          "100": "#939185",
          "200": "#1c1b1f"
        },
        "tan": "#e6b9a6",
        "black": "#000",
        "darkslategray": "#2f3645",
        "darkgray": "#a5a5a5"
      },
      "spacing": {},
      "fontFamily": {
        "lexend-deca": "'Lexend Deca'",
        "dm-serif-display": "'DM Serif Display'"
      }
    },
    "fontSize": {
      "xl": "20px",
      "base": "16px",
      "13xl": "32px",
      "7xl": "26px",
      "lgi": "19px",
      "xs": "12px",
      "5xl": "24px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "45xl": "64px",
      "32xl": "51px",
      "11xl": "30px",
      "inherit": "inherit"
    },
    "screens": {
      "lg": {
        "max": "1200px"
      },
      "mq1125": {
        "raw": "screen and (max-width: 1125px)"
      },
      "mq1050": {
        "raw": "screen and (max-width: 1050px)"
      },
      "mq975": {
        "raw": "screen and (max-width: 975px)"
      },
      "mq950": {
        "raw": "screen and (max-width: 950px)"
      },
      "mq750": {
        "raw": "screen and (max-width: 750px)"
      },
      "mq700": {
        "raw": "screen and (max-width: 700px)"
      },
      "mq675": {
        "raw": "screen and (max-width: 675px)"
      },
      "mq450": {
        "raw": "screen and (max-width: 450px)"
      }
    }
  },
  "corePlugins": {
    "preflight": false
  }
}