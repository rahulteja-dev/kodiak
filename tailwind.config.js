/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
	content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			lineHeight: {
				15: "15rem",
			},
			fontFamily: {
				inter: ["var(--font-inter)", ...fontFamily.sans],
				heading: ["var(--font-heading)", ...fontFamily.sans],
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				gradientwhite: "var(--gradientwhite)",
				primary: "var(--primary)",
			},
		},
	},
	plugins: [],
};
