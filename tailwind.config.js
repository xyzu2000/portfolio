/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linkedInColor: '#035afc',
        gitColor: '#1a1918',
        mailColor: '#769965',
        profileColor: '#4f4c4a',
      },
    },
  },
  plugins: [],
}