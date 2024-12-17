/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'messenger-gradient': 'linear-gradient(33deg, #00b2ff -2%, #8a2be2 100%, #743d3d, orange)',
      },
    },
  },
  plugins: [],
}