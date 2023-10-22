/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cor:{
          azulClaro:"#38BDF8",
          branco: "#ffffff",
          cinza: "#828282",
          verde: "#07bc0c"
        }
      }
    },
  },
  plugins: [],
}

