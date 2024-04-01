import { nextui } from '@nextui-org/react'
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        'istok-web': ['Istok Web', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        'noto-sans': ['Noto Sans', 'sans-serif'],
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [nextui()],
  darkMode: 'selector',
}
