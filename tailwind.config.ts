import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
	prefix: "",
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

			// padding
			padding: {
				"26": "100px",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
