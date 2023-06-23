/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,vue,ts}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'shadowCustom': "0 0px 8px rgba(0, 0, 0, 1)",
      },
      padding:{
        "marginContainerCustom": '0.5rem',
      },
      dropShadow:{
        'borderCustom': ["0px -0.8px 0px rgba(255,255,255, 1)"
        ,"0px 0.8px 0px rgba(255,255,255, 1)"
        , "-0.8px 0px 0px rgba(255,255,255, 1)"
        , "0.8px 0px 0px rgba(255,255,255, 1)"],

        'borderShadowCustom': ["0px -0.8px 0px rgba(255,255,255, 1)"
        ,"0px 0.8px 0px rgba(255,255,255, 1)"
        , "-0.8px 0px 0px rgba(255,255,255, 1)"
        , "0.8px 0px 0px rgba(255,255,255, 1)"
        ,"0 0 3px rgba(0,0,0, 1)"],
      },
      maxHeight:{
        'logosHeader': "60px",
        'logosFooter': "100px",
      },
      width:{
        'cardsCustom': "280px",
      },
      maxWidth:{
        'paraghPrincipal': "250px",
      },
      height:{
        'cardsCustom': "550px",
        'headerHeight': "72px",
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

