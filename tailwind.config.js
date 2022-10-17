module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#fe4463",
        yellow: "#fcee58",
        blue: "#78cecd",
      },
      screens: {
        "2xl": "1536px",
        "3xl": "1980px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [],
};