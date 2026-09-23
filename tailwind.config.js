/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        paper: '#f8f5f1',
        accent: '#a36a43',
        accentSoft: '#ead8c7',
        olive: '#586d5b',
        sand: '#d8c7b3'
      },
      boxShadow: {
        soft: '0 20px 45px -25px rgba(15, 23, 42, 0.35)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
