/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { lightBlue, warmGray, trueGray, coolGray, blueGray, ...eligibleColors } = colors;

export default {
  content: ['./index.html', './documponents/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...eligibleColors,
      primary: {
        50: '#fdf2f8',
        100: '#fce7f3',
        200: '#fbcfe8',
        300: '#f9a8d4',
        400: '#f472b6',
        500: '#ec4899',
        600: '#db2777',
        700: '#be185d',
        800: '#9d174d',
        900: '#831843',
        950: '#500724',
      },
    },
    extend: {},
  },
  plugins: [],
};
