/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		animationDelay: {
			0: '0',
			100: '100ms',
			250: '250ms',
			500: '500ms',
			750: '750ms',
			1000: '1000ms',
			1500: '1500ms',
		},
		animationDirection: {
			'alternate': 'alternate',
			'alternate-reverse': 'alternate-reverse',
			'inherit': 'inherit',
			'normal': 'normal',
			'reverse': 'reverse',
			'revert-layer': 'revert-layer',
			'unset': 'unset',
		},
		animationDuration: {
			0: '0',
			100: '100ms',
			250: '250ms',
			500: '500ms',
			750: '750ms',
			1000: '1000ms',
			1500: '1500ms',
		},
		extend: {
			container: {
				center: true,
				padding: '0.75rem',
			},
			backgroundImage: {
				'noise': "url('/images/noise.png')"
			},
			colors: {
				'brand': '#363650',
				'primary': '#6cafb6',
				'outline': '#d48174',
				'gray-bright': '#f3f6f9',
				'gray-dark': '#35363a',
				'gray-darker': '#2c2d30',
				'background': '#fff',
				'foreground': '#333639',
				'link': '#3f6c9e',
				'link-dark': '#6cafb6',
			},
			fontFamily: {
				'sans': ['Noto Sans', ...defaultTheme.fontFamily.sans]
			},
			keyframes: {
				'fade-in': {
					'0%': {
						opacity: 0,
					},
					'100%': {
						opacity: 1,
					},
				},
				'fade-in-bottom': {
					'0%': {
						opacity: 0,
						transform: 'translateY(25%)',
					},
					'100%': {
						opacity: 1,
						transform: 'none',
					},
				},
				'fade-in-left': {
					'0%': {
						opacity: 0,
						transform: 'translateX(-25%)',
					},
					'100%': {
						opacity: 1,
						transform: 'none',
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: 0,
						transform: 'translateX(25%)',
					},
					'100%': {
						opacity: 1,
						transform: 'none',
					},
				},
				'zoom-in': {
					'0%': {
						opacity: 0,
						transform: 'scale(0.5, 0.5)',
					},
					'50%': {
						opacity: 0.5,
						transform: 'scale(1.25, 1.25)',
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1, 1)',
					},
				},
			},
			animation: {
				'fade-in': 'fade-in ease-in 1 forwards',
				'fade-in-bottom': 'fade-in-bottom ease-in 1 forwards',
				'fade-in-left': 'fade-in-left ease-in 1 forwards',
				'fade-in-right': 'fade-in-right ease-in 1 forwards',
				'zoom-in': 'zoom-in ease-in 1 forwards',
			},
		},
	},
	plugins: [
		plugin(({ matchUtilities, theme}) => {
			matchUtilities(
				{ 'animate-delay': (val) => ({ animationDelay: val }) },
				{ values: theme('animationDelay' )},
			)
		}),
		plugin(({ matchUtilities, theme}) => {
			matchUtilities(
				{ 'animate-direction': (val) => ({ animationDirection: val }) },
				{ values: theme('animationDirection' )},
			)
		}),
		plugin(({ matchUtilities, theme}) => {
			matchUtilities(
				{ 'animate-duration': (val) => ({ animationDuration: val }) },
				{ values: theme('animationDuration' )},
			)
		}),
		plugin(({ addUtilities }) => {
			addUtilities({
				'.animate-paused': { 'animation-play-state': 'paused' },
				'.animate-running': { 'animation-play-state': 'running' },
			})
		}),
	],
}
