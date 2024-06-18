import Image from "next/image";
import { Button } from "../ui/button";
import Title from "../ui/title";
import Des from "../ui/description";

interface SubCategoriesWrapperProps {
	children: React.ReactNode;
}

const SubCategoriesWrapper = ({ children }: SubCategoriesWrapperProps) => {
	return (
		<>
			<div className="subcategories_wp bg-red-100 p-10">
				{/* title and description */}
				<div className="mb-8 flex items-center justify-between">
					<div className="flex items-center">
						{/* icon */}
						{/* <Image
										src={}
										hight={80}
										width={80}
										alt={}
									/> */}

						{/* title and description */}
						<div className="flex flex-col items-start gap-4">
							<Title size="h4">Personal Assistant</Title>
							<Des size="md">Your personal assistant for efficient daily task management.</Des>
						</div>
					</div>

					{/* View more tools  */}
					<Button size="md">View More Tools</Button>
				</div>

				{children}
			</div>
		</>
	);
};

export default SubCategoriesWrapper;
