/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
	content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		screens: {
			"sm": "640px",
			"md": "768px",
			"lg": "1024px",
			"xl": "1280px",
			"2xl": "1600px",
		},
		extend: {
			lineHeight: {
				10: "10rem",
				11: "11rem",
			},
			fontFamily: {
				inter: ["var(--font-inter)", ...fontFamily.sans],
				heading: ["var(--font-heading)", ...fontFamily.sans],
			},
			colors: {
				buttonbg: "var(--buttonbg)",
				background: "var(--background)",
				foreground: "var(--foreground)",
				gradientwhite: "var(--gradientwhite)",
				primary: "var(--primary)",
			},
		},
	},
	plugins: [],
};
