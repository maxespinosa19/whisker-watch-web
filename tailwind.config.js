/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
        fontFamily: {
          sans: ['Inria Sans', 'Arial', 'sans-serif'], // Add other fallback fonts if needed
        },
    
    extend: {
      'animation': {
       
        'gradient-y':'gradient-y 15s ease infinite',
        
    },
      'keyframes': {
        'gradient-y': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'center top'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'center center'
            },
        },
      

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
   },
  },
  plugins: [],
}
