module.exports = {
  mode: "jit",
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#12A3EB'
      },
      spacing: {
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
