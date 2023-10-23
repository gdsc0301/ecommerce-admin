import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      'sm' : '320px',
      'md' : '640px',
      'lg' : '1024px',
      'xl' : '1245px'
    },
    container: {
      center: true
    },
    extend: {
      colors: {
        'davy-gray'   : '#4D5254',
        'crayola'     : '#2C7EF8',
        'apple'       : '#59AE43',
        'red-pigment' : '#F71E2E',
        'gunmetal'    : '#252F3D'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
