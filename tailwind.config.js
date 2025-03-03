module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js", // add this line
  ],
  theme: {
    extend: {
      colors: {
        "--main-color": "#0aad0a",
        "--color-light": "#f0f3f2",
        "--rating-color": "#ffc908",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
