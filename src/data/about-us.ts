import { StaticImageData } from "next/image";
import WoWeAreIcon from "@/images/pages/about-us/icons/1.png";
import OurMissionIcon from "@/images/pages/about-us/icons/2.png";
import OurVisionIcon from "@/images/pages/about-us/icons/3.png";

interface AboutUsDataProps {
	id: number;
	icon: StaticImageData;
	title: string;
	description: string;
}

export const AboutUsData: AboutUsDataProps[] = [
	{
		id: 0,
		icon: WoWeAreIcon,
		title: "Wo We Are",
		description:
			"At AIverce, our mission is to democratize access to cutting-edge AI tools, empowering individuals and businesses to harness the power of artificial intelligence. We believe in fostering innovation, enhancing productivity, and driving progress through the use of advanced technology.",
	},
	{
		id: 1,
		icon: OurMissionIcon,
		title: "Our Mission",
		description:
			"We envision a world where AI technology is accessible to everyone, driving innovation and solving complex problems across industries. By providing a comprehensive platform for AI tools, we aim to support creators, researchers, and businesses in their quest for excellence.",
	},
	{
		id: 2,
		icon: OurVisionIcon,
		title: "Our Vision",
		description:
			"We are a team of AI enthusiasts, developers, and experts dedicated to curating and providing the best AI tools on the market. Our diverse backgrounds in machine learning, data science, software engineering, and user experience design enable us to offer a comprehensive and insightful platform for users.",
	},
];
