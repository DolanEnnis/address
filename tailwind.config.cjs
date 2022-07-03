/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			white: colors.white,
			black: colors.black,
			gray: colors.stone,
			blue: colors.blue,
			red: colors.red,
			green: colors.green,
			'svelte-prime': '#ff5030'
		},
		extend: {}
	},
	plugins: []
};
