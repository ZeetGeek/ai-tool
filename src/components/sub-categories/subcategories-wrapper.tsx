import { StaticImageData } from "next/image";
import Image from "next/image";
import { Button } from "../ui/button";
import Title from "../ui/title";
import Des from "../ui/description";
import Link from "next/link";

interface SubCategoriesWrapperProps {
	children: React.ReactNode;
	title: string;
	description: string;
	icon: StaticImageData;
	href: string;
}

const SubCategoriesWrapper = ({ children, title, description, icon, href }: SubCategoriesWrapperProps) => {
	return (
		<>
			<div className="subcategories_box">
				{/* title and description */}
				<div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
					<div className="flex flex-col items-center gap-6 md:flex-row ">
						{/* icon */}
						<Image
							src={icon}
							height={80}
							width={80}
							alt={`${title} icon`}
						/>

						{/* title and description */}
						<div className="sub_category_content flex flex-col items-center gap-3 text-center md:items-start md:text-start">
							<Title size="h4">{title}</Title>
							<Des size="md">{description}</Des>
						</div>
					</div>

					{/* View more tools  */}
					<Button
						size="md"
						asChild
					>
						<Link
							className="sub_category_btn"
							href={href}
							title={`View ${title} tools`}
						>
							View More Tools
						</Link>
					</Button>
				</div>

				{children}
			</div>
		</>
	);
};

export default SubCategoriesWrapper;
