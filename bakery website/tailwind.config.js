/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        hand: ['"Caveat"', 'cursive']
      },
      colors: {
        brand: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          pink: '#ff8fb1',
          cream: '#fffdfa',
          lavender: '#e8dcff',
          mint: '#d2f9ea',
          peach: '#ffe5d9',
          gold: '#eab308'
        }
      }
    },
  },
  plugins: [],
}
