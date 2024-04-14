/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        firacode:["Fira Code", "monospace"]
      }
    },
  },
  daisyui: {
    themes: [
      {
        sablay: {
          "primary": "#BD7F53",
          "secondary": "#703037",
          "accent": "#DAD5CD",
          "neutral": "#434446",
          "base-100": "#0B0A0A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

