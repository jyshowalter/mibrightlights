/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
        heading: ["Permanent Marker"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4361ee",
          secondary: "#560bad",
          accent: "#4cc9f0",
          neutral: "#111827",
          "base-100": "#111827",
          info: "#0000ff",
          success: "#38bdf8",
          warning: "#ff0000",
          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
