import { StaticImageData } from "next/image";

// images
import ProductivityTools from "@/images/categories/productivity-tools.png";
import VideoTools from "@/images/categories/video-tools.png";
import TextGenerators from "@/images/categories/text-generators.png";
import BusinessTools from "@/images/categories/business-tools.png";
import MiscTools from "@/images/categories/misc-tools.png";
import AudioGenerators from "@/images/categories/audio-generators.png";
import ArtGenerators from "@/images/categories/art-generators.png";
import AutomationTools from "@/images/categories/automation-tools.png";
import AiImageTools from "@/images/categories/ai-image-tools.png";
import AiCodeTools from "@/images/categories/ai-code-tools.png";
import ThreeAiToolsImage from "@/images/three-ai-tools-image.png";

interface categoriesDataProps {
	id: number;
	title: string;
	shortDes?: string;
	description?: string;
	href: string;
	icon: StaticImageData;
	oneImage: StaticImageData | string;
	twoImage: StaticImageData | string;
	threeImage: StaticImageData | string;
}

export const categoriesData: categoriesDataProps[] = [
	{
		id: 0,
		title: "AI Productivity Tools",
		shortDes: "Lorem ipsum dolor sit amet consectetur",
		description: "Explore specialized AI tools across machine learning, computer vision, and more.",
		href: "/sub-categories",
		icon: ProductivityTools,
		oneImage: "",
		twoImage: "",
		threeImage: ThreeAiToolsImage,
	},
	{
		id: 1,
		title: "AI Video Tools",
		shortDes: "Lorem ipsum dolor sit amet consectetur",
		description: "Explore specialized AI tools across machine learning, computer vision, and more.",
		href: "/sub-categories",
		icon: VideoTools,
		oneImage: "",
		twoImage: "",
		threeImage: ThreeAiToolsImage,
	},
	{
		id: 2,
		title: "AI Text Generators",
		shortDes: "Lorem ipsum dolor sit amet consectetur",
		description: "Explore specialized AI tools across machine learning, computer vision, and more.",
		href: "/sub-categories",
		icon: TextGenerators,
		oneImage: "",
		twoImage: "",
		threeImage: ThreeAiToolsImage,
	},
	{
		id: 3,
		title: "AI Business Tools",
		shortDes: "Lorem ipsum dolor sit amet consectetur",
		description: "Explore specialized AI tools across machine learning, computer vision, and more.",
		href: "/sub-categories",
		icon: BusinessTools,
		oneImage: "",
		twoImage: "",
		threeImage: ThreeAiToolsImage,
	},
	{
		id: 4,
		title: "AI Image Tools",
		shortDes: "Lorem ipsum dolor sit amet consectetur",
		description: "Explore specialized AI tools across machine learning, computer vision, and more.",
		href: "/sub-categories",
		icon: MiscTools,
		oneImage: "",
		twoImage: "",
		threeImage: ThreeAiToolsImage,
	},
	{
		id: 5,
		title: "Automation Tools",
		shortDes: "Lorem ipsum dolor sit amet consectetur",
		description: "Explore specialized AI tools across machine learning, computer vision, and more.",
		href: "/sub-categories",
		icon: AudioGenerators,
		oneImage: "",
		twoImage: "",
		threeImage: ThreeAiToolsImage,
	},
	{
		id: 6,
		title: "AI Art Generators",
		shortDes: "Lorem ipsum dolor sit amet consectetur",
		description: "Explore specialized AI tools across machine learning, computer vision, and more.",
		href: "/sub-categories",
		icon: ArtGenerators,
		oneImage: "",
		twoImage: "",
		threeImage: ThreeAiToolsImage,
	},
	{
		id: 7,
		title: "AI Audio Generators",
		shortDes: "Lorem ipsum dolor sit amet consectetur",
		description: "Explore specialized AI tools across machine learning, computer vision, and more.",
		href: "/sub-categories",
		icon: AutomationTools,
		oneImage: "",
		twoImage: "",
		threeImage: ThreeAiToolsImage,
	},
	{
		id: 8,
		title: "Misc AI Tools",
		shortDes: "Lorem ipsum dolor sit amet consectetur",
		description: "Explore specialized AI tools across machine learning, computer vision, and more.",
		href: "/sub-categories",
		icon: AiImageTools,
		oneImage: "",
		twoImage: "",
		threeImage: ThreeAiToolsImage,
	},
	{
		id: 9,
		title: "AI Code Tools",
		shortDes: "Lorem ipsum dolor sit amet consectetur",
		description: "Explore specialized AI tools across machine learning, computer vision, and more.",
		href: "/sub-categories",
		icon: AiCodeTools,
		oneImage: "",
		twoImage: "",
		threeImage: ThreeAiToolsImage,
	},
];
