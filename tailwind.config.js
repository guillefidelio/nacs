/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'din-bold': ['var(--font-din-bold)', 'sans-serif'],
        'din-pro-cond': ['var(--font-din-pro-cond)'],
        'din-pro-cond-black': ['var(--font-din-pro-cond-black)'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        pri: '#0451CE',
        sec: '#1EB9FF',
        ter: '#F3F3F3',
      },
    },
  },
  plugins: [],
}