import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',        // blanc
        secondary: '#1f2937',      // gris foncé
        accent: '#9ca3af',         // gris clair
      },
    },
  },
  plugins: [],
};

export default config;
