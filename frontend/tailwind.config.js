/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        dark: "#182E6F",
        accent: "#59B5F7",
        primary: "#305CDE",
        light: "#DAD2D8",
        shade: "#0C090D",
        transparent: "#0C090D",
      },
      fontFamily: {
        slab: ['"Roboto Slab"'],
        roboto: ['"Roboto"'],
      },
    },
  },
  plugins: [],
};
