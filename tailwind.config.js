/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', 'monospace'],
      },
      spacing: {
        trio: "32%",
        smalltrio: "30%"
      },
      fontSize: {
        "5-5xl": "3.5rem",
        "3-5xl": "2rem"
      }
    },
  },
  plugins: [],
}