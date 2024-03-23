/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'istok-web': ['Istok Web', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode:'selector'
}

