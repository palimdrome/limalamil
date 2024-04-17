/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        firacode:["Fira Code", "monospace"]
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

