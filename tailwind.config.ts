import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "class",
	theme: {
		extend: {
			// font family
			fontFamily: {
				primary: "var(--font-glancyr)",
				secondary: "var(--font-poppins)",
			},

			// color
			colors: {
				// primary colors
				"primary-950": "#1B1561",
				"primary-900": "#231C77",
				"primary-800": "#342AA5",
				"primary-700": "#4438D2",
				"primary-600": "#5546FF",
				"primary-500": "#776BFF",
				"primary-400": "#9990FF",
				"primary-300": "#BBB5FF",
				"primary-200": "#CCC7FF",
				"primary-100": "#DDDAFF",
				"primary-50": "#EEECFF",

				// secondary color
				"secondary-950": "#394D03",
				"secondary-900": "#4C6604",
				"secondary-800": "#739906",
				"secondary-700": "#99CC08",
				"secondary-600": "#BFFF0A",
				"secondary-500": "#CCFF3B",
				"secondary-400": "#D9FF6C",
				"secondary-300": "#E5FF9D",
				"secondary-200": "#ECFFB5",
				"secondary-100": "#F2FFCE",
				"secondary-50": "#F9FFE6",
			},

			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
