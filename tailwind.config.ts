import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '420px',
      md: '768px',
      xl: '1240px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1239.98px' },
      notXl: { max: '1239.98px' },
    },
    // spacing: {
    //   6.375: '6.375rem',
    // },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '1.25rem',
          xl: '1.25rem',
        },
      },
      colors: {
        grey: {
          100: '#303030',
          80: '#43444A',
          60: '#B1B0B0',
          40: '#E1E1E4',
          20: '#F5F5F5',
          0: '#F9FAFF',
        },
        accent: {
          primary: '#0D36C9',
          hover: '#1A48ED',
          pressed: '#0C31B4',
        },
        orange: ' #FF551A',
        error: '#E50E0E',
      },
      fontFamily: {
        eUkraine: ['var(--font-eUkraine)'],
        eUkraineHead: ['var(--font-eUkraineHead)'],
      },
    },
  },
  plugins: [],
};
export default config;
