/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'pocket-watch1.jpg': "url('./images/poket-watch1.jpg')",
          'footer-texture': "url('/img/footer-texture.png')",
        }
      },
    },
    plugins: [],
  }