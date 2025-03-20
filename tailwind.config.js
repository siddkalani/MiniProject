/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'abc-whyte': ['ABC Whyte', 'sans-serif'],
        'kaftan' : ['Kaftan Serif', 'serif'],
        'karla' : ['Karla','sans-serif'],
        'cormo' : ['Cormorant Garamond', 'serif'],
        'rale': ['Raleway', 'sans-serif'],
        'bodoni':['Bodoni Moda SC', 'serif'],
        'rollgates':['Rollgates Luxury','serif']
      }
    },
    // screens: {
    //   mq1300: {
    //     raw: "screen and (max-width: 1300px)",
    //   },
    //   mq1125: {
    //     raw: "screen and (max-width: 1125px)",
    //   },
    //   mq800: {
    //     raw: "screen and (max-width: 800px)",
    //   },
    //   mq450: {
    //     raw: "screen and (max-width: 450px)",
    //   },
    // },
  },
  plugins: [],
}

