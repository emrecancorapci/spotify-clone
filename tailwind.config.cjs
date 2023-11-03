/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 50%, 100%": { transform: "rotate(-7deg)" },
          "25%, 75%": { transform: "rotate(7deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 300ms ease-in-out"
      }
    },
  },
  plugins: [],
}

