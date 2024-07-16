/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    colors: {
      Blue: {
        default: '#050C9C',
        primary: '#3572EF',
        secondary: '#3ABEF9',
        tertiary: '#A7E6FF',
      },
      light: {
        default: '#FFFFFF',
        primary: '#EEF7FF',
        secondary: '#F6F4EB',
        tertiary: '#F6F5F5',
      },
      dark: {
        default: '#000000',
        primary: '#1B2021',
        secondary: '#21243D',
        tertiary: '#1D1919',
      },
    },
    extend: {},
  },
  plugins: [],
}