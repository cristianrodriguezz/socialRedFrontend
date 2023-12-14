/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { },
    colors : {
        'bunker': {
          logo: '#50c878',
          body: '#18191a',
          white: '#fff',
          card: '#242526',
          gray: '#979797',
          hover:'#3a3b3c',
          red: '#FF0000',
          successBg: '#f0fdf4',
          successText: 'rgb(22 101 52)'
        }
    }
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [],
}