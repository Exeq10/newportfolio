/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html",   "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        skyblue: "#19A7CE",
      },

      fontFamily: {
        Montserrat: "Montserrat",
      },

      keyframes: {
        wiggle: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },

        
      },

      animation: {
        wiggle: "wiggle 1s ease-in ",
       
      },
    },
  },
  plugins: [],
};
