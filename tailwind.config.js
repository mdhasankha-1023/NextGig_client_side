/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "primaryBtn" : '#1967D2',
      "primaryBg" : '#1967D2'
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

