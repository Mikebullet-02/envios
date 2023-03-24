/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      'xs': '428px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      
    },
    extend: {
      colors: {
        'odm':'#003368',
      }
    },
  },
  plugins: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};
