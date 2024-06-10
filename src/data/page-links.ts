// types
interface PageLinkProps {
	id: number;
	title: string;
	href: string;
}

// header link
export const headerLinks: PageLinkProps[] = [
	{
		id: 0,
		title: "Home",
		href: "/",
	},
	{
		id: 1,
		title: "Categories",
		href: "/categories",
	},
	{
		id: 2,
		title: "About Us",
		href: "/about-us",
	},
	{
		id: 3,
		title: "Contact Us",
		href: "/contact-us",
	},
];

// footer link

// categories data
export const categoriesData: PageLinkProps[] = [
	{
		id: 0,
		title: "AI Productivity Tools",
		href: "/ai-productivity-tools",
	},
	{
		id: 1,
		title: "AI Video Tools",
		href: "/ai-video-tools",
	},
	{
		id: 2,
		title: "AI Text Generators",
		href: "/ai-text-generators",
	},
	{
		id: 3,
		title: "AI Business Tools",
		href: "/ai-business-tools",
	},
	{
		id: 4,
		title: "AI Image Tools",
		href: "/ai-image-tools",
	},

	{
		id: 5,
		title: "AI Automation Tools",
		href: "/ai-automation-tools",
	},
	{
		id: 6,
		title: "AI Art Generators",
		href: "/ai-art-generators",
	},
	{
		id: 7,
		title: "AI Audio Generators",
		href: "/ai-audio-generators",
	},
	{
		id: 8,
		title: "AI Misc Tools",
		href: "/ai-misc-tools",
	},
	{
		id: 9,
		title: "AI Code Tools",
		href: "/ai-code-tools",
	},
];

// pages data

export const pageData: PageLinkProps[] = [
	{
		id: 0,
		title: "Home",
		href: "/",
	},
	{
		id: 1,
		title: "Categories",
		href: "/categories",
	},
	{
		id: 2,
		title: "About Us",
		href: "/about-us",
	},
	{
		id: 3,
		title: "Contact Us",
		href: "/contact-us",
	},
];

// legal data

export const legalData: PageLinkProps[] = [
	{
		id: 0,
		title: "Terms of Use",
		href: "/",
	},
	{
		id: 1,
		title: "Privacy Policy",
		href: "/categories",
	},
	{
		id: 2,
		title: "Cookie Policy",
		href: "/about-us",
	},
];
