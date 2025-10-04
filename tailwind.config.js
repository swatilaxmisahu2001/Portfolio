/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bright: ['"Bright Clones"', "sans-serif"],
        handwritten: ['"Bright Clones"', "cursive"],
        handlee: ["Handlee", "cursive"],
      },
    },
  },
  plugins: [],
};
