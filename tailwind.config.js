/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dribble: "#EA4C89",
        instagram: "#E4405F",
        twitter: "#1DA1F2",
        linkedin: "#0A66C2",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
