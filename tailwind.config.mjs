/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'Helvetica Now Display', 'sans-serif'], // Use Space Grotesk as primary, Helvetica as fallback
        display: ['Helvetica Now Display', 'sans-serif'], // For headers, if desired
        Grotesk: ['Space Grotesk', 'sans-serif'], // For paragraph text
      },
      colors: {
        blue: {
          600: '#4F46E5', // Adjust this to match your brand color
        }
      },
      maxWidth: {
        '8xl': '1273px',
      },
      fontSize: {
        base: '16px',
        hero_header: '80px',
        sub_header: '24px',
        header:'48px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};