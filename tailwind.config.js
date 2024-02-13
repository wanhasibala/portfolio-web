/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx, tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        'image-width':['clamp(5rem, 20vw, 17.887rem)'],
        'image-height':['clamp(13.672rem, 60vw, 46.875rem)'],
        'gap':['clamp(0.313rem, 3vw, 1.25rem)'],
        'photo-width': ['clamp(7.5rem,20vw, 30rem)'],
        'photo-height': ['clamp(4.219rem,16vh, 16.875rem)'],
        'image-card': ['clamp(11.875rem, 20vw, 115.625rem)'],
          
      },
      fontSize: {
        'title': ['clamp(3rem, 9vw, 7rem)'],
        'heading-1': ['clamp(2.5rem, 6.5vw, 10rem)'],
        'heading-2': ['clamp(2.4rem, 8vw, 10rem)'],
        'heading-3': ['clamp(2rem, 5vw, 2.25rem)'], 
        'special': ['clamp(1.25rem, 4vw, 1.5rem)'],
        'works-title': ['clamp(1.25rem, 2vw, 1.5rem)'],
        'body-1': ['clamp(1.1rem, 2vw, 1.3rem)'], 
        'body-2': ['clamp(1rem, 1.5vw, 1.5rem)'],
        'body-3': '1.1rem',
        'body-4': ['clamp(0.75rem, 3vw, 1rem)'],
      },
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

