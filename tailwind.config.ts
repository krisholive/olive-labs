import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'shimmer': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				},
				'sparkle': {
					'0%, 100%': {
						opacity: '1',
						transform: 'scale(1) rotate(0deg)'
					},
					'50%': {
						opacity: '0.7',
						transform: 'scale(1.1) rotate(180deg)'
					}
				},
				'electric': {
					'0%, 100%': {
						opacity: '1',
						transform: 'scale(1)'
					},
					'25%': {
						opacity: '0.8',
						transform: 'scale(1.05) translateX(-2px)'
					},
					'75%': {
						opacity: '0.8',
						transform: 'scale(1.05) translateX(2px)'
					}
				},
				'target-pulse': {
					'0%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'50%': {
						transform: 'scale(1.2)',
						opacity: '0.7'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'gentle-pulse': {
					'0%, 100%': {
						opacity: '1',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.8',
						transform: 'scale(1.05)'
					}
				},
				'plug-disconnect': {
					'0%': {
						transform: 'translateX(0)',
						opacity: '1'
					},
					'50%': {
						transform: 'translateX(3px)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'clock-tick': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'25%': {
						transform: 'rotate(90deg)'
					},
					'100%': {
						transform: 'rotate(0deg)'
					}
				},
				'globe-rotate': {
					'0%': {
						transform: 'rotateY(0deg)'
					},
					'100%': {
						transform: 'rotateY(360deg)'
					}
				},
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'bounce-in-bottom': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px) scale(0.9)'
					},
					'60%': {
						opacity: '1',
						transform: 'translateY(-5px) scale(1.02)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'float': 'float 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'electric': 'electric 1.5s ease-in-out infinite',
				'target-pulse': 'target-pulse 2s ease-in-out infinite',
				'gentle-pulse': 'gentle-pulse 3s ease-in-out infinite',
				'plug-disconnect': 'plug-disconnect 0.6s ease-in-out',
				'clock-tick': 'clock-tick 0.5s ease-in-out',
				'globe-rotate': 'globe-rotate 4s linear infinite',
				'fade-up': 'fade-up 0.6s ease-out forwards',
				'bounce-in-bottom': 'bounce-in-bottom 0.7s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.6s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
