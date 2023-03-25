const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/common/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Roboto Slab", ...defaultTheme.fontFamily.mono],
      secondary: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "primary-100": "#E33761",
        "primary-200": "#D903FF",
        "primary-300": "#8500FF",
        "primary-dark-100": "#20267A",
        "primary-dark-200": "#2B193D",
        "footer-100": "#FCFCFF",
        "primary-light": "#ffffff"
      },
    },
  },
  plugins: [],
};
