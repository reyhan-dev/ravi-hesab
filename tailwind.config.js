/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/css/**/*.css"],
  theme: {
    extend: {
      colors: {
        box: "#F8F8F8",
        borderColor: "#EFEFEF",
        secondary: "#0C0D0F",
        primary: "#FFBB00",
        muted: "#949494",
        danger: "#FF3431",
        secondary_lighten: "#E8E8E6",
      },
      borderRadius: {
        md: "10px",
      },
      fontFamily: {
        yekan: ["YekanBakh", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 4px 16px 0px rgba(21, 16, 0, 0.2)",
      },
      padding: {
        extralg: "70px",
      },
    },
  },
  plugins: [],
};
