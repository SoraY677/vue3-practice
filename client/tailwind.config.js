/** @type {import('tailwindcss').Config} */

export default {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        basic: ["Crimson Text", "Rampart One"],
      },
    },
  },
  plugins: [],
};
