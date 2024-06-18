import { categoriesData } from "@/data/categories";
import { Button } from "../ui/button";
import Image from "next/image";
import Title from "../ui/title";
import Des from "../ui/description";
import "@/style/categories.scss";
import Link from "next/link";

const AllCategories = () => {
	return (
		<>
			<section className="all_categories">
				<div className="container">
					<div className="row gap-y-6">
						{categoriesData.map((item, index) => (
							<div
								key={index}
								className="col-lg-6 main_category_box_wp "
							>
								<div className="main_category_box hover_effect cursor-pointer">
									<div className="flex items-center justify-between">
										{/* content */}
										<div className="flex w-full max-w-[550px] flex-col items-start">
											<Title size="h4">{item.title}</Title>
											<Des size="md">{item.description}</Des>
											<Button asChild>
												<Link
													className="hover_effect"
													href={item.href}
													title={`view all ${item.title}`}
												>
													View All Tools
												</Link>
											</Button>
										</div>
										{/* icon */}
										<Image
											className="hidden sm:block"
											src={item.icon}
											height={150}
											width={150}
											alt={`${item.title} icon`}
										/>
									</div>

									{/* three ai tools image */}
									<div className="three_ai_tools_image">
										<Image
											src={item.threeImage}
											height={385}
											width={876}
											alt={`${item.title} three ai tools image`}
										/>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="mt-10 text-center">
						<Button size="lg">Load more categories</Button>
					</div>
				</div>
			</section>
		</>
	);
};

export default AllCategories;
