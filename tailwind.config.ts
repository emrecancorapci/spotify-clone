import type { Config } from 'tailwindcss';
import tailwindCssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        's-green': '#1db954', // green-500
        's-green-dark': '#1aa34a',
        's-green-light': '#1ed760', // green-400
        's-black': '#191414',
        's-gray-darkest': '#121212',
        's-gray-dark': '#181818',
        's-gray-darker': '#282828',
        's-gray': '#535353',
        's-gray-lighter': '#b3b3b3',
        's-gray-light': '#e5e5e5',
        's-gray-lightest': '#f5f5f5',
        's-white': '#ffffff',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        wiggle: {
          '0%, 50%, 100%': { transform: 'rotate(-7deg)' },
          '25%, 75%': { transform: 'rotate(7deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        wiggle: 'wiggle 300ms ease-in-out',
      },
    },
  },
  plugins: [tailwindCssAnimate],
} satisfies Config;
