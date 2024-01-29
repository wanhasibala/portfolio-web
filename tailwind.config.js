/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx, tsx}',
  ],
  theme: {
    extend: {
       colors: {
        'transparent': 'transparent',
        'primary-200': '#1D233B',
        'primary-300': '#918888',
        'secondary-100': '#F9F9F9',
        'secondary-200': '#D9D9D9',
        'secondary-300': '#BDBBBB',
        'secondary-700': '#585858',
        'secondary-800': '#393737',
        'secondary-900': '#171717',
        'accent-400': '#0E0E0C',
        'accent-300': '#262626',
        'accent-200': '#4D4D4D',
        'accent-100': '#666666',
      },
    },
  },
  plugins: [],
}

