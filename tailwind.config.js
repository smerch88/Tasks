/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './page-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2rem',
        },
      },
      backgroundImage: {
        cart_button: "url('/images/cart.png')",
      },
      colors: {
        dark: '#0F1C26',
        primary: '#094079',
        hover: '#0A5ADF',
        secondary: '#00d4ff',
        gray_light: '#5C666F',
        white_light: '#F8F8F8',
        red: '#f43f5e',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      boxShadow: {
        card: '1px 2px 8px rgba(37, 101, 208, 0.14)',
        header: '1px 2px 8px rgba(37, 101, 208, 0.14)',
        card_hover: '6px 8px 12px rgba(37, 101, 208, 0.18)',
      },
      animation: {
        blob: 'blob 7s infinite',
        text: 'text 5s ease infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'tranlate(0px, 0px) scale(1)' },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },

  variants: { extend: {} },

  plugins: [
    require('@tailwindcss/forms'),
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/line-clamp'),
  ],
};
