/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        cor1: ['#24E5F0'],
        cor2: ['#2464F0'],
        cor3: ['#24A5F0'],
        cor4: ['#2BF0B9'],
        cor5: ['#2424F0'],
      }
    },
  },
  plugins: [],
};
