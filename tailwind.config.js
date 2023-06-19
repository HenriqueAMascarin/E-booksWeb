/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,vue}",
  ],
  theme: {
    extend: {
      dropShadow:{
        'logoCustom': ["0px -0.8px 0px rgba(255,255,255, 1)","0px 0.8px 0px rgba(255,255,255, 1)", "-0.8px 0px 0px rgba(255,255,255, 1)", "0.8px 0px 0px rgba(255,255,255, 1)"],
      },
      maxWidth:{
        'paraghPrincipal': "250px",
      },
      maxHeight:{
        'logosHeader': "60px",
        'logosFooter': "100px",
      },
      colors: {
        'brownCustom': "#59433E",
        'purpleCustom': "#26111F",
        'lightBrownCustom': "#D9BEA7",
        'yellowCustom': "#FFC700",
      },
    },
  },
  plugins: [],
}

