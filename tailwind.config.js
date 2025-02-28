/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        rubikMono: ['Rubik Mono One', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
