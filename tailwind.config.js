export default {
  darkMode: 'class', // 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px", // ✅ your custom screen size
      },
    },
  },
  plugins: [],
};
