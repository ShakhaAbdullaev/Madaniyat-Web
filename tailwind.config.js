/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        purple: "#5425A1",
        primary: "#906DCA",
        grey: "#9FA7BC",
        darkBlue: "#0B1D36",
        customGrey: "rgba(243, 223, 223, 0.25)",
        bgMain: "#5425A1",
        textGrey: "#9DA5AF",
        bgDarkBlue: "#172840"
      },
      width: {
        '4/10': '45%',
        '6/10': '60%',
      },
    },
  },
  plugins: [],
};
