/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0f172a', // slate-900
          hover: '#1e293b' // slate-800
        },
        secondary: '#4f46e5', // indigo-600
        accent: '#f59e0b', // amber-500
      }
    },
  },
  plugins: [],
}
