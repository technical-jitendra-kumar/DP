export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      colors: {
        primary: {
          500: "#155dfc",   // Blue
          600: "#0f4edb",
        },
        accent: {
          400: "#f99b3d",   // Orange
          500: "#f58220",
          600: "#e07420",
        },
        navy: {
          900: "#0b1220",
          800: "#111827",
        },
      },
    },
  },
  plugins: [],
};
