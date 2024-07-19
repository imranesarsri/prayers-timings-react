/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // 'node_modules/flowbite-react/lib/esm/**/*.js'
    './node_modules/flowbite-react/node_modules/flowbite/lib/esm/**/*.js'

  ],
  darkMode: 'selector',
  theme: {
    extend: {
      container: {
        center: true,
        // padding: '2rem',
      },
      boxShadow: {
        'custom': '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
      },
      fontSize: {
        '10xl': '5rem',
        '9xl': '4rem',
      },
      colors: {
        Blue: {
          default: '#3943FA',
          primary: '#3980FA',
          secondary: '#3ABEF9',
          tertiary: '#A7E6FF',
        },
        light: {
          default: '#FFFFFF',
          primary: '#EEF7FF',
          secondary: '#F3F4F6',
          tertiary: '#F6F5F5',
        },
        dark: {
          default: '#000000',
          primary: '#1B2021',
          secondary: '#21243D',
          tertiary: '#363062',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}