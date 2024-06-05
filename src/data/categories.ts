import { StaticImageData } from "next/image";

interface categoriesDataProps {
	id: number;
	name: string;
	description: string;
	href: string;
	// image: StaticImageData;
}

export const categoriesData: categoriesDataProps[] = [
	{
		id: 0,
		name: "AI Productivity Tools",
		description: "Lorem ipsum dolor sit amet consectetur  imperdiet maecenas pharetra ",
		href: "/",
		// image: "",
	},
	{
		id: 1,
		name: "AI Video Tools",
		description: "Lorem ipsum dolor sit amet consectetur  imperdiet maecenas pharetra ",
		href: "/",
		// image: "",
	},
	{
		id: 2,
		name: "AI Text Generators",
		description: "Lorem ipsum dolor sit amet consectetur  imperdiet maecenas pharetra ",
		href: "/",
		// image: "",
	},
	{
		id: 3,
		name: "AI Business Tools",
		description: "Lorem ipsum dolor sit amet consectetur  imperdiet maecenas pharetra ",
		href: "/",
		// image: "",
	},
	{
		id: 4,
		name: "AI Image Tools",
		description: "Lorem ipsum dolor sit amet consectetur  imperdiet maecenas pharetra ",
		href: "/",
		// image: "",
	},
	{
		id: 5,
		name: "Automation Tools",
		description: "Lorem ipsum dolor sit amet consectetur  imperdiet maecenas pharetra ",
		href: "/",
		// image: "",
	},
	{
		id: 6,
		name: "AI Art Generators",
		description: "Lorem ipsum dolor sit amet consectetur  imperdiet maecenas pharetra ",
		href: "/",
		// image: "",
	},
	{
		id: 7,
		name: "AI Audio Generators",
		description: "Lorem ipsum dolor sit amet consectetur  imperdiet maecenas pharetra ",
		href: "/",
		// image: "",
	},
	{
		id: 8,
		name: "Misc AI Tools",
		description: "Lorem ipsum dolor sit amet consectetur  imperdiet maecenas pharetra ",
		href: "/",
		// image: "",
	},
	{
		id: 9,
		name: "AI Code Tools",
		description: "Lorem ipsum dolor sit amet consectetur  imperdiet maecenas pharetra ",
		href: "/",
		// image: "",
	},
];
