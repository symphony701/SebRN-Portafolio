/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {},
		screens: {
			'sm': '400px',
	  
			'md': '768px',
	  
			'lg': '1024px',
	  
			'xl': '1280px',
	  
			'2xl': '1536px',
		  },
		colors: {
			'shadow' : '#13151a',
			'white': '#f5f5f5',
			'bunker': {
				'50': '#f6f7f9',
				'100': '#eceef2',
				'200': '#d5dae2',
				'300': '#b0b9c9',
				'400': '#8593ab',
				'500': '#667691',
				'600': '#515f78',
				'700': '#434d61',
				'800': '#3a4252',
				'900': '#343a46',
				'950': '#13151a',
			},
			'red': {
				'50': '#fff0f0',
				'100': '#ffe3e4',
				'200': '#ffcbce',
				'300': '#ffa0a7',
				'400': '#ff6b7a',
				'500': '#fc4158',
				'600': '#e91539',
				'700': '#c50b2f',
				'800': '#a50c2f',
				'900': '#8d0e2f',
				'950': '#4f0214',
			},
			
		},
	},
	plugins: [],
}
