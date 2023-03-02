/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideright: 'slideright 0.6s ease-in'
      },
      fontFamily: {
        barlowCondensed: "'Barlow Condensed', sans-serif",
        bellefair: "'Bellefair', serif"
      },
      fontSize: {
        'heading1': ['9.375rem', {
          lineHeight: '10.75rem',
          fontWeight: '400',
        }],
        'heading2': ['6.25rem', {
          lineHeight: '7.1875rem',
          fontWeight: '400',
        }],
        'heading3': ['3.5rem', {
          lineHeight: '4rem',
          fontWeight: '400',
        }],
        'heading4': ['2rem', {
          lineHeight: '2.3125rem',
          fontWeight: '400',
        }],
        'heading5': ['1.75rem', {
          lineHeight: '2.125rem',
          fontWeight: '400',
        }],
        'SubHeading1': ['1.75rem', {
          lineHeight: '2rem',
          fontWeight: '400',
        }],
        'SubHeading2': ['0.875rem', {
          lineHeight: '1.0625rem',
          letterSpacing: '2.36px',
          fontWeight: '400',
        }],
        'navText': ['1rem', {
          lineHeight: '1.1875rem',
          letterSpacing: '2.7px',
          fontWeight: '400',
        }],
        'bodyText': ['1.125rem', {
          lineHeight: '2rem',
          fontWeight: '400',
        }],
      },
      colors: {
        darkBlue: '#0B0D17',
        lightViolet: '#D0D6F9'
      },
      keyframes: {
        slideright: {
          from: { opacity: 0, transform: 'translateX(100%)' },
          to: { opacity: 1, transform: 'none' }
        },
      }
    },
  },
  plugins: [],
}
