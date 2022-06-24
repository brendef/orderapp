/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#aec6cf',
        'secondary': '#C3B1E1',
        'success': '#C1E1C1',
        'warning': '#FDFD96',
        'danger': '#FAA0A0',
        'light': '#FAF9F6',
        'dark': '#152238',
      },
    },
  },
  plugins: [],
}