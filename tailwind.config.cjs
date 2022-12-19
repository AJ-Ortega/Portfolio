/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"],
      },
      colors: {
        palette: {
          100: "#73404A",
          200: "#A62D4D",
          300: "#401731",
          400: "#F2B680",
          500: "#D9564A",
        },
      },
      backgroundImage: {
        'nft': "url(https://res.cloudinary.com/guate-data-suite/image/upload/c_scale,w_430/v1665722206/Portfolio/MPACHEANDRE_ka3dxa.png)",
      },
      animation: {
        "spin-slow": "wiggle 1.6s linear infinite",
        "type": "typing 2.5s steps(48) 1s 1 normal both, blink 1s steps(1) infinite",
        "typecode": "typingCode 2.5s steps(40) 1s 1 normal both, blink 1s steps(1) infinite"
      },
      keyframes: {
        wiggle: {
          "25%": { transform: "translateY(-4px)" },
          "50%": { transform: "translateY(0)" },

          "75%": { transform: "translateY(5px)" },
        },
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" }
        },
        typingCode: {
          "from": { width: "0" },
          "to": { width: "25rem" }
        },
        blink: {
          "50%": { borderColor: "transparent" }
        }
      },
    },
  },

  plugins: [],
};
