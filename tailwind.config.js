/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "first-color": "#ffffff",
        "second-color": "#e9e9e9",
        "third-color": "#767676",
        "fourth-color": "#111111",
        "fifth-color": "#e60023",
        "border-color": "#7fc1ff"
      },

    },
  },
  plugins: [],
};
