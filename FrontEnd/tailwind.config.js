/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#D9232A',
          orange: '#F15A24',
          dark: '#1F2937',
          light: '#F8FAFC',
        },
        stock: {
          critical: '#EF4444',
          alert: '#F59E0B',
          optimal: '#10B981',
        }
      }
    },
  },
  plugins: [],
}
