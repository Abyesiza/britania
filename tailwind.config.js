/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#fff1f1',
          100: '#ffdfdf',
          200: '#ffc5c5',
          300: '#ff9d9d',
          400: '#ff6464',
          500: '#ff2424',
          600: '#ed1515',
          700: '#c80d0d',
          800: '#a50f0f',
          900: '#881414',
          950: '#4b0404',
        }
      },
      fontFamily: {
        'sans': ['Inter var', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};