/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bv-dark-blue': '#1A3647',     // Deep blue/teal for main background overlay
        'bv-teal': '#00C2CB',          // Vibrant teal for buttons/accents
        'bv-light-teal': '#00E0E9',    // Lighter teal for glows/hover states
        'bv-footer-dark': '#122B3A',   // Darker blue for the footer background
        'bv-text-light': '#FFFFFF',    // White text
        'bv-text-secondary': '#A3A3A3',// Light grey secondary text
        'bv-border': '#2F2F2F',        // Dark grey for borders
        'bv-surface': '#262626',       // Dark grey for card backgrounds (with opacity)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Using Inter as a modern sans-serif
      },
      borderRadius: {
        'xl': '16px', // Consistent rounded corners for cards and sections
      },
    },
  },
  plugins: [],
}
