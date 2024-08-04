/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      tablet: "640px",

      laptop: "1024px",

      mobile: "280px",
    },
    extend: {},
  },
  plugins: [],
};
