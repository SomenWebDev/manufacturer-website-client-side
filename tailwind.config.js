module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5ec113",

          secondary: "#fc1493",

          accent: "#a4f49f",

          neutral: "#292B3D",

          "base-100": "#FAF8FC",

          info: "#5593CE",

          success: "#155B56",

          warning: "#E1900E",

          error: "#D9263E",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
