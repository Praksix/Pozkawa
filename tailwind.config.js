/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      primary: {
        100: '#E6F6FF',
        200: '#B3E6FF',
        300: '#80D5FF',
        400: '#4DC5FF',
        DEFAULT: '#1AB5FF',
        600: '#0088CC',
      },
      secondary: {
        100: '#E6F6FF',
        200: '#B3E6FF',
        300: '#80D5FF',
        400: '#4DC5FF',
        DEFAULT: '#1AB5FF',
        600: '#0088CC',
      },
      gray: {
        100: '#F5F5F5',
        200: '#E0E0E0',
        300: '#BDBDBD',
        400: '#9E9E9E',
        500: '#757575',
        600: '#616161',
        700: '#424242',
        800: '#212121',
        DEFAULT: '#000000',
      },
    },
    extend: {},
  },
  plugins: [],
};