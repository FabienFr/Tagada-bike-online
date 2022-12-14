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
        'sm': '640px',
        'md': '768px',
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1440px",
        "3xl": "1980px",
        "4xl": "2560px",
        "5xl": "3840px",
        "6xl": "7680px",
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        "160": "40rem",
        "176": "44rem",
        "192": "48rem",
      },
      inset: {
        '68': '17rem'
      }
    },
  },
  plugins: [],
};