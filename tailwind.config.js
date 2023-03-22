/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    letterSpacing: {
      widest: '2.5em',
    },
    extend: {
      fontFamily: {
        uthmanic: ['Uthmanic', 'sans-serif'],
        bismillah: ['Bismillah', 'sans-serif'],
        kitab: ['kitab', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
