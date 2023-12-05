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
          card: '#242526'
        }
    }
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [],
}