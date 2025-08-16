/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('nativewind/preset')],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    // add other paths if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

