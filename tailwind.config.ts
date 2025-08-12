import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{mdx,md}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
        primary: 'hsl(var(--color-primary))',
        secondary: 'hsl(var(--color-secondary))',
        accent: 'hsl(var(--color-accent))',
        muted: 'hsl(var(--color-muted))',
        card: 'hsl(var(--color-card))',
        border: 'hsl(var(--color-border))',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.2)'
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;