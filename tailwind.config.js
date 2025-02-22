/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "frame-black":
          "url('/src/assets/Frame-black-2.png')",
        "gradient-border":
          "linear-gradient(to right, transparent 5%, #EFEFEF 10%, #EFEFEF 90%, transparent 95%)",
      },
      colors: {
        box: "#F8F8F8",
        box_light: "#EFEFEF",
        borderColor: "#EFEFEF",
        secondary: "#0C0D0F",
        primary: "#FFBB00",
        primary_lighten: "#FFF8E0",
        muted: "#949494",
        danger: "#FF3431",
        danger_lighten: "#FFEFEF",
        secondary_lighten: "#E8E8E6",
        success: "#14AE5C",
        success_lighten: "#E2F5EB",
        alerts_info: "#2088F7",
        alerts_info_lighten: "#D2F0FE",
      },
      borderRadius: {
        md: "10px",
      },
      fontFamily: {
        yekan: ["YekanBakh", "sans-serif"],
        danstevis: ["danstevis"],
        fanoos: ["fanoos"],
      },
      boxShadow: {
        custom: "0px 4px 16px 0px rgba(21, 16, 0, 0.2)",
        custom_light:
          "0px 4px 24px 0px rgba(0, 0, 0, 0.04)",
      },
      padding: {
        extralg: "120px",
      },
    },
  },
  plugins: [],
};
