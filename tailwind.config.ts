import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      lg: ['32px', '46px'],
      one: ['28px', '34px'],
      two: ['24px', '32px'],
      sb: ['16px', '24px'],
      sm: ['14px', '18px'],
    },
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        roboto: ['var(--font-roboto)'],
      },
      colors: {
        blue: 'var(--blue)',
        orange: 'var(--orange)',
        black: 'var(--black)',
        grey: 'var(--grey)',
        primary: 'var(--blue)',
      },
      textColor: {
        primary: 'var(--blue)',
        secondary: 'var(--orange)',
        black: 'var(--black)',
        grey: 'var(--grey)',
      },

      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      boxShadow: {
        header: '0px 4px 16px 0px #00000024',
        descr: '0px 2px 11px 0px #00000040',
      },
      borderRadius: {
        hd: '24px',
        bt: '16px',
      },
    },
  },
  plugins: [],
};
export default config;
