/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       'poppins': ['Poppins', 'sans-serif']
      },
      fontSize:{
        smm:'0.6rem',
        smmx:'0.8rem'
      },

      colors: {
        primaryColor:'#07CABC',
        lightBlue: '#0085FF1A',
        lightPurple:'#702EFF1A',
        lightGreen:'#E4F9F7',
        blackNew:'#011816',
        lightOrange:'#EB942E1A',
        gradientGreen:'#0D3D39',
        grayscale:'#F0F3F6',
        purple: '#6133C6',
        darkPurple:'#140D22'



      }
    },
  },
  plugins: [],
}

