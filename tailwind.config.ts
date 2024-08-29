import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      neutral: {
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        500: '#6B7280',
        600: '#A6A6A6',
        700: '#374151',
        800: '#33475B',
        900: '#111827',
      },
      primary: {
        100: '#EDE9FE',
        300: '#75E3EA',
        600: '#1DB5BE',
      },
      white: '#fff',
      black: '#000',
    },
    extend: {
      screens: {
        xsm: '245px',
      },
    },
  },
  plugins: [],
};
export default config;
