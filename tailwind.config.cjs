/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        'primary': '#B22222',
        'secondary': '#FF0000',
        'tertiary': '#CD5C5C',
        'quartenary': '#F08080'
      },backgroundImage: {
        'card': "url('/src/assets/card.png)"
      }
    },
  },
  plugins: [],
};
