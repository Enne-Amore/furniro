/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
        'montserrat': ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'main-background': 'url("/src/assets/main-background.png")',
        'where-page-background': 'url("/src/assets/secundary-page-background.png")',
      },
      height: {
        '582': '582px',
        '486': '486px'
      },
      width: {
        '644': '644px'
      },
      gap: {
        '0.5': '2px'
      }
    },
  },
  plugins: [],
}

