/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#e6f1ff',
            100: '#b3d7ff',
            200: '#80bdff',
            300: '#4da3ff',
            400: '#1a89ff',
            500: '#0070e0',
            600: '#0057b3',
            700: '#003d80',
            800: '#00244d',
            900: '#000a1a',
          }
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif']
        }
      },
    },
    plugins: [],
    darkMode: 'class',
  }