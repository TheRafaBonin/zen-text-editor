import type { Config } from 'tailwindcss'

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			fontFamily: {
				josefinSans: 'var(--font-josefin-sans)',
				crimsonText: 'var(--font-crimson-text)',
				barlow: 'var(--font-barlow)',
			},
		},
	},
	plugins: [],
} satisfies Config
