const plugins = [];

try {
  // Require Tailwind if available
  const tailwindcss = require('tailwindcss');
  plugins.push(tailwindcss());
} catch (e) {
  // tailwindcss not installed — skip gracefully
}

try {
  // Require Autoprefixer if available
  const autoprefixer = require('autoprefixer');
  plugins.push(autoprefixer());
} catch (e) {
  // autoprefixer not installed — skip gracefully
}

module.exports = { plugins };
