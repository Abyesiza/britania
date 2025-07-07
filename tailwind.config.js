/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': 'var(--brand-red)',
        'light-gray': 'var(--light-gray)',
        'secondary-gray': 'var(--secondary-gray)',
        'text-gray': 'var(--text-gray)',
        'heading-gray': 'var(--heading-gray)',
        'steel-blue': 'var(--steel-blue)',
        'warm-beige': 'var(--warm-beige)',
        'earthy-brown': 'var(--earthy-brown)',
        'navy-blue': '#000080',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
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