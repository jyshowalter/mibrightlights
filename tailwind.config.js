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
          //red
          primary: "E52E29",
          //green
          secondary: "#56CD7D",
          //blue
          accent: "#AEDFF0",
          neutral: "#111827",
          "base-100": "#111827",
          //cream
          info: "#F2EEEF",
          //beige
          success: "#D6B789",
          warning: "#ff0000",
          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
