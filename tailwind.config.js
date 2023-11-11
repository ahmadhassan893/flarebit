/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-500': '#FCD804',
        'primary-600': '#FAA41A',
        'secondary-500': '#000000',
      },
      screens: {
        sm: '640px', // Small screens, like mobile phones
        md: '768px', // Medium screens, like tablets
        lg: '1024px', // Large screens, like laptops
        xl: '1280px', // Extra-large screens, like desktops
        '2xl': '1536px', // Larger desktop screens
      },
    },
  },
  plugins: [],
}
