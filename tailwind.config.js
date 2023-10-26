// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [tailwindcss('./tailwind.config.js'), require('autoprefixer')],
};
