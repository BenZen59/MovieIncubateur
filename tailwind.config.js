/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      weight: {
        128: '565px',
      },
      height: {
        128: '32rem',
      },
      margin: {
        960: '50%',
      },
    },
  },
  plugins: [],
};
