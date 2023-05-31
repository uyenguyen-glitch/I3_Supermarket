/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myRed: "#f60000",
        myRedBlur: "#f60000b3",
        grayBlur: "#d6d3d180",
      },
    },
  },
  plugins: [],
  important: true,
};
