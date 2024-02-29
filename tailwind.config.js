/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/componets/asesst/imges/banner-bg.jpg')",
      },
      fontFamily: { // اضافة الخطوط
        bodyfont: ['poppins']
      },

    },
    plugins: [],
  }

}