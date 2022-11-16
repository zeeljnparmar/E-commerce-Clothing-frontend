/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", ", sans-serif"],
      },
      fontSize: {
        "head-1": "3.6rem", // 36px
        "head-2": "3.2rem", // 32px
        "head-3": "2.8rem", // 28px
        "head-4": "2.4rem", // 24px
        "head-5": "2rem", // 20px
        "body-1": "1.8rem", // 18px
        "body-2": "1.6rem", // 16px
        "body-3": "1.4rem", // 14px
        "body-4": "1.2rem", // 12px
        "body-5": "1rem", // 10px
      },

      fontWeight: {
        1: 100,
        2: 200,
        3: 300,
        4: 400,
        5: 500,
        6: 600,
        7: 700,
      },
      colors: {
        "black-9": "rgb(0,0,0,.9)",
        "black-5": "rgb(0,0,0,.5)",
        "black-7": "rgb(0,0,0,.7)",
        yellow: "rgb(251, 209, 57)",
        "light-yellow": "#ffd84d",
        footer: "#181818",
        "green-600": "rgb(22, 163, 74,0.6)",
      },
      screens: {
        1500: { max: "1500px" },
        1450: { max: "1450px" },
        1400: { max: "1400px" },
        1350: { max: "1350px" },
        1300: { max: "1300px" },
        1250: { max: "1250px" },
        1200: { max: "1200px" },
        1150: { max: "1150px" },
        1100: { max: "1100px" },
        1050: { max: "1050px" },
        1000: { max: "1000px" },
        950: { max: "950px" },
        900: { max: "900px" },
        850: { max: "850px" },
        800: { max: "800px" },
        750: { max: "750px" },
        700: { max: "700px" },
        650: { max: "650px" },
        600: { max: "600px" },
        550: { max: "550px" },
        500: { max: "500px" },
        450: { max: "450px" },
        400: { max: "400px" },
        350: { max: "350px" },
      },
    },
  },
  plugins: [],
};
