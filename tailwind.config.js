/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ---------------- Radius (shadcn) ---------------- */
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      /* ---------------- Shadows ---------------- */
      boxShadow: {
        field: `
      0px 2.55px 5.95px rgba(255, 255, 255, 0.10),
      0px 10.48px 10.48px rgba(255, 255, 255, 0.09)
    `,
      },
      backgroundImage: {
        'field-gradient': 'linear-gradient(180deg, #E7EEEC 0%, rgba(47, 65, 82, 0.10) 100%)',
        'chart-gradient': 'linear-gradient(to top, rgba(0, 191, 165, 0.2), #00BFA5)',
      },

      /* ---------------- shadcn Tokens (HSL) ---------------- */
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },

        /* ---------------- App Brand Colors (RGB) ---------------- */
        app: {
          primary: 'rgb(var(--color-primary) / <alpha-value>)',
          blue: 'rgb(var(--color-blue) / <alpha-value>)',
          green: 'rgb(var(--color-green) / <alpha-value>)',
          white: 'rgb(var(--color-white) / <alpha-value>)',
          blackText: 'rgb(var(--color-blacktext) / <alpha-value>)',
          greyText: 'rgb(var(--color-greytext) / <alpha-value>)',
          stroke: 'rgb(var(--color-stroke) / <alpha-value>)',
          stroke2: 'rgb(var(--color-stroke2) / <alpha-value>)',
          buttonPrimary: 'rgb(var(--color-buttonprimary) / <alpha-value>)',
          primaryLight: 'rgb(var(--color-primary-light) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
