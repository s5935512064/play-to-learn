module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Mitr': ['Mitr', 'sans-serif'],
        'Db-Heaven': ['db_heaventthin'],
      },
      animation: {
        'pulse2': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1)',
      },
      keyframes: {
        pulse2: {
          '100%': { opacity: 1 },
          '0%': { opacity: .5 },
        }
      }
    },
  },
  plugins: [],
}