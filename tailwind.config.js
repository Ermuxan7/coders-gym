/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      testShadow: '0 10px 5px rgba(0, 0, 0, 0.8)',
      container: {
        center: true,
        padding:{
          Default: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem'
        }
      }
    },
  },
  plugins: [],
}
