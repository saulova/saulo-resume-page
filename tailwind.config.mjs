import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ["Atkinson", ...defaultTheme.fontFamily.sans]
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  					maxWidth: 'full'
  				}
  			}
  		},
  		rotate: {
  			'45': '45deg',
  			'135': '135deg',
  			'225': '225deg',
  			'315': '315deg'
  		},
  		animation: {
  			twinkle: 'twinkle 2s ease-in-out forwards',
  			meteor: 'meteor 3s ease-in-out forwards'
  		},
  		keyframes: {
  			twinkle: {
  				'0%': {
  					opacity: '0',
  					transform: 'rotate(0deg)'
  				},
  				'50%': {
  					opacity: '1',
  					transform: 'rotate(180deg)'
  				},
  				'100%': {
  					opacity: '0',
  					transform: 'rotate(360deg)'
  				}
  			},
  			meteor: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(200%)'
  				},
  				'50%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0',
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
