module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: "#364663",
        },
        blue: {
          DEFAULT: "#2E75FF",
          gray: "#96A6C2",
          white: "#F7F7F7",
          bg: "rgba(46, 117, 255, 0.15)",
        },
        system: {
          indigo: "#5E5CE6",
          pink: "#FF2D55",
          green: "#32D74B",
          yellow: "#FFD60A",
          blue: "#0A84FF",
          error: "#FF2D2D",
        },
        alert: {
          DEFAULT: "#FF4E4E",
          light: "#FAD7D6",
          error: "#FF2D2D",
        },
        error: {
          DEFAULT: "#FF4E4E",
          200: "#FAD7D6",
          light: "#ff2d2d1a",
        },
      },
      fontFamily: {
        "SF-UI": ["SF UI Display", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
