/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#fff4ed",
        mainBgColor: "#faf9f7",
        secondaryColor: "#db5300",
        fontPrimary: "#383838",
        sideColor: "#005e9e",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif", "Arial"],
      },
      height: {
        sliderHeight: "42rem",
        bookItemHeight: "34rem",
        formHeight: "34rem",
      },
      width: {
        mainWidth: "98.75rem",
        searchWidth: "32rem",
        bookItemWidth: "24rem",
        formWidth: "32rem",
      },
    },
  },
  plugins: [],
};
