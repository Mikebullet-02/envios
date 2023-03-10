/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'blue-rgba':'rgba(0, 51, 104, 0.5)',
      }
    },
  },
  plugins: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};
