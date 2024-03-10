import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '1000px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notMd: { max: '767.98px' },
      notXl: { max: '1279.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '1.25rem',
          xl: '2.5rem',
        },
      },
      colors: {
        grey: {
          120: '#010617',
          100: '#303030',
          80: '#43444A',
          70: '#5C5C5C',
          60: '#B1B0B0',
          50: '#898989',
          40: '#E1E1E4',
          20: '#F5F5F5',
          0: '#F9FAFF',
        },
        backdrop: ' rgba(177, 176, 176, 0.50)',
        progressBar: 'rgba(240, 240, 240, 1)',
        shadow: 'rgba(0, 0, 0, 0.04)',
        accent: {
          primary: '#0D36C9',
          hover: '#1A48ED',
          pressed: '#0C31B4',
        },
        orange: ' #FF551A',
        green: '#45CF15',
        error: '#E50E0E',
        box: '#e8e8e8',
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
