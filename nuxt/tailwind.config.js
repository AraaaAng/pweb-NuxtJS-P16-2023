/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      biru: "#0058AB",
      kuning: "#FBD914",
    },
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0058AB",

          secondary: "#a70000",

          accent: "#e44a00",

          neutral: "#100e17",

          "base-100": "#ffffff",

          info: "#007eb5",

          success: "#93d935",

          warning: "#FBD914",

          error: "#ff6b80",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
