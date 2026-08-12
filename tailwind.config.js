/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'brico': ['Bricolage Grotesque', 'sans-serif'],
        'lex': ['Lexend Deca', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif']
      },
      width: {
        'hug': '541px',
      },
    },
  },
  plugins: [],
}

