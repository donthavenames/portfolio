/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-gray': '#F0F0F0',
      },
      fontFamily: {
        sans:['"IBM Plex Sans"'],
      },
    },
  },
  plugins: [],
}

