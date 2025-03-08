// import { keyframes, transform } from 'motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%)',
      },

      colors: {
        navbarColor: "#ffffff",
        btnColor: "#3364F7",
        linkColor: "#2a5bd7",
      },
      boxShadow: {
        custom: "0 0 15px rgba(0, 0, 0, 0.3)",
        right: "10px 0px 10px -5px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat"],
      },
    },
  },

  variants: {
    extend: {
      backgroundImage: ["responsive"],
    },

    animation: {
      popOut: 'popOut 1.5s infinite',
    },
    keyframes: {
      popOut: {
        '0%': {
          transform: 'translateX(-100%)',
        },
        '100%': {
          transform: 'translateX(0)',
        }
      },
    },
  },

  plugins: [],
};
