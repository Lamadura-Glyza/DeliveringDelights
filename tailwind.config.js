/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./component/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'red': '#dc143c',
      },
      fontFamily:{
        payToneReg:["PaytoneOne-Regular", "sans serif"],
        pthin:["Poppins-Thin", "sans serif"],
        pextralight:["Poppins-ExtraLight", "sans serif"],
        pbold:["Poppins-Bold", "sans serif"],
        pextrabold:["Poppins-ExtraBold", "sans serif"],
        preg:["Popping-Regular", "sans serif"],
      },
      
    },
  },
  plugins: [],
}


