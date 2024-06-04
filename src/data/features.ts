import { StaticImageData } from "next/image";

// images
import icon1 from "@/images/pages/home/features/icons/1.png";
import icon2 from "@/images/pages/home/features/icons/2.png";
import icon3 from "@/images/pages/home/features/icons/3.png";
import icon4 from "@/images/pages/home/features/icons/4.png";

interface featuresDataProps {
	id: number;
	title: string;
	description: string;
	icon: StaticImageData;
}

export const featuresData: featuresDataProps[] = [
	{
		id: 0,
		title: "Discover AI Tools for Every Project",
		description:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend tellus per, sem taciti penatibus tempor facilisi ut nibh tristique in euismod, vivamus hac auctor fusce ultricies curabitur primis est neque. Eros habitant litora risus ultrices.",
		icon: icon1,
	},
	{
		id: 1,
		title: "Curated Selection of Tools",
		description:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend tellus per, sem taciti penatibus tempor facilisi ut nibh tristique in euismod, vivamus hac auctor fusce ultricies curabitur primis est neque. Eros habitant litora risus ultrices.",
		icon: icon2,
	},
	{
		id: 2,
		title: "Stay Informed, Stay Inspired",
		description:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend tellus per, sem taciti penatibus tempor facilisi ut nibh tristique in euismod, vivamus hac auctor fusce ultricies curabitur primis est neque. Eros habitant litora risus ultrices.",
		icon: icon3,
	},
	{
		id: 3,
		title: "Stay Informed, Stay Inspired",
		description:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend tellus per, sem taciti penatibus tempor facilisi ut nibh tristique in euismod, vivamus hac auctor fusce ultricies curabitur primis est neque. Eros habitant litora risus ultrices.",
		icon: icon4,
	},
];
