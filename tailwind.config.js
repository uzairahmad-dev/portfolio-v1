module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.6rem'
    },
    colors: {
      'primary': '#00ADB5',
      'primary_b': '#42C2FF',
      'secondary_h': '#EAFCFF',
      'secondary_p': '#E6F4F1',
      'dark': '#374955',
      'dark_b': '#222831',
      'light':'#FEFFFF',
      'light_primary': '#2B7A78',
      'light_h': '#3AAFA9',
      'light_p': '#17252A',
      'light_b': '#DEF2F1',
      'white': '#FFFFFF',
      'black': '#000000',
      'tertiary': '#727375',
    },
    fontFamily: {
      'literata': ['Literata', 'serif'],
      'alegreya': ['Alegreya Sans', 'sans-serif']
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'in_md': {'max': '768px'},
      'in_sm': {'max': '640px'} 
    },
    extend: {
      borderStyle: ['hover'],
    },
  },
  variants: {
    stroke: ['hover','focus','group-hover'],
    fill: ['hover','focus','group-hover'],
  },
  plugins: [
    
  ],
}
