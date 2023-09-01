/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors : {
			primary : '#1C1C1C',
			secondary : '#181818',
			accent : '#FDCA00',
			buttons_accent : '#D99C00',
			white : '#FFFFFF',
			black : '#000000',
			gray : '#111111',
			light_gray : '#D9D9D9',
			dark_gray : '#0B0B0B',
		},
		fontFamily : {
			'sans' : ['Wix Madefor Text', 'sans-serif'],
			'display' : ['Roboto Slab', 'serif'],
		},
	},
	plugins: [],
}
