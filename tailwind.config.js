/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          primary: '#F38A19',
          dark: '#D36B0D',
        },
        grey: {
          dark: '#3C3C3C',
          medium: '#575757',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
