/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}', // Covers the app directory
      './components/**/*.{js,ts,jsx,tsx,mdx}', // Covers any shared components
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }