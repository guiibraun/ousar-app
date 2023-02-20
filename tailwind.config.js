/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-oswald)', 'sans-serif'],
        content: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        'gray-100': '#f3f3f3',
        'gray-700': '#232323',
        'red-600': '#E11A1A',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      screens: {
        '3xl': { min: '1600px' },
      },
    },
  },
  plugins: [],
}
