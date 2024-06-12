import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
	prefix: "",
	theme: {
		extend: {
			screens: {
				vsm: "480px",
				xxl: "1360px",
				"2xl": "1600px",
			},

			// font family
			fontFamily: {
				primary: "var(--font-glancyr)",
				secondary: "var(--font-poppins)",
			},

			// font size
			fontSize: {
				"7xl": "clamp(2.625rem, 2.25rem + 1.875vw, 4.5rem)",
				"6xl": "clamp(2.25rem, 1.5vw + 1.95rem, 3.75rem)",
				"4xl": "clamp(1.75rem, 1.65rem + 0.5vw, 2.25rem)",
				"2xl": "clamp(1.25rem, 1.2rem + 0.25vw, 1.5rem)",

				lg: [
					"clamp(1rem, 0.125vw + 0.975rem, 1.125rem)",
					{
						lineHeight: "[160%]",
					},
				],

				base: [
					"clamp(0.875rem, 0.125vw + 0.85rem, 1rem)",
					{
						lineHeight: "[170%]",
					},
				],

				sm: [
					"clamp(0.813rem, 0.063vw + 0.8rem, 0.875rem)",
					{
						lineHeight: "[180%]",
					},
				],
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
				"12": "clamp(1.25rem, 1.875vw + 0.875rem, 3.125rem)",
				"20": "clamp(2.5rem, 2rem + 2.5vw, 5rem)",
				"26": "100px",
				"30": "clamp(3.75rem, 3rem + 3.75vw, 7.5rem)",
			},

			margin: {
				"12": "clamp(1rem, -1.5rem + 8vw, 3rem)",
				"20": "clamp(2.5rem, 2rem + 2.5vw, 5rem)",
				"30": "clamp(3.75rem, 3rem + 3.75vw, 7.5rem)",
			},

			// box shadow
			boxShadow: {
				hover_dropdown: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
			},

			// keyframes
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

			// animation
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},

			// border radius
			borderRadius: {
				"4xl": "32px",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
