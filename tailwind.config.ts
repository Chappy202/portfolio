import type { Config } from 'tailwindcss';

import { heroui } from '@heroui/theme';

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
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
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'pop-blob': {
          '0%': {
            transform: 'scale(1)',
          },
          '33%': {
            transform: 'scale(1.2)',
          },
          '66%': {
            transform: 'scale(0.8)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        'spin-around': {
          '0%': {
            transform: 'translateZ(0) rotate(0)',
          },
          '15%, 35%': {
            transform: 'translateZ(0) rotate(90deg)',
          },
          '65%, 85%': {
            transform: 'translateZ(0) rotate(270deg)',
          },
          '100%': {
            transform: 'translateZ(0) rotate(360deg)',
          },
        },
        slide: {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)',
          },
        },
        'slow-ping': {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
      },
      colors: {
        background: '#101010',
        filter: {
          'blur-20': 'blur(20px)',
          'blur-25': 'blur(25px)',
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pop-blob': 'pop-blob 5s infinite',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        slide: 'slide var(--speed) ease-in-out infinite alternate',
        'slow-ping': 'slow-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        shine: 'shine 3s linear infinite',
        spin: 'spin 2s linear infinite',
        'border-travel': 'border-travel 4s linear infinite',
      },
    },
  },
  darkMode: ['class'],
  plugins: [heroui(), require('tailwindcss-animate')],
  prefix: '',
};

export default config;
