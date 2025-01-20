/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple-gray': 'rgba(22, 22, 23, 0.8)',
        'apple-light': 'rgba(255, 255, 255, 0.8)',
        'primary-color': '#64ffda',
        'secondary-color': '#c792ea',
        'accent-color': '#ff79c6',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}