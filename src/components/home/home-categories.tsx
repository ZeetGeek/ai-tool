import Link from "next/link";
import { Button } from "../ui/button";
import Des from "../ui/description";
import Title from "../ui/title";
import { categoriesData } from "@/data/categories";
import AiToolBox from "../ai-tool-box";
import { aiToolsData } from "@/data/ai-tools";

const HomeCategories = () => {
	return (
		<>
			<section className="home_categories">
				<div className="container">
					<div className="center_box">
						{/* title and description */}
						<Title
							size="h2"
							className="text-neutral-800"
						>
							AI Tool Categories
						</Title>

						<Des
							size="lg"
							className="text-neutral-500"
						>
							Explore specialized AI tools across machine learning, computer vision, and more. Uncover tailored solutions for your projects.
						</Des>
					</div>

					{/* home categories */}
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-12 xxl:grid-rows-2">
						{categoriesData.map(
							(item, index) =>
								item.id < 5 && (
									<div
										key={index}
										className="category_box"
									>
										<div className="category_content flex flex-col items-center lg:items-start ">
											{/* title */}
											<Title
												size="h4"
												className="mb-4 text-center lg:text-start"
											>
												{item.title}
											</Title>

											{/* description */}
											<div className="tool_description w-full max-w-full lg:max-w-[263px]">
												<Des
													size="lg"
													className="text-center lg:text-start"
												>
													{item.description}
												</Des>
											</div>

											{/* button */}
											<Button
												name="see all tools btn"
												className="mt-6"
												asChild
											>
												<Link
													href={item.href}
													title={`See all ${item.title.toLowerCase()} tools`}
												>
													See All Tools
												</Link>
											</Button>
										</div>

										{/* ai tools */}
										{/* TODO : add image instate of ai_tools box */}
										<div className="ai_tools">
											{aiToolsData.map(
												(item, index) =>
													item.id < 2 && (
														<AiToolBox
															key={index}
															className="category_ai_tools pointer-events-none max-w-[437px]"
															{...item}
														/>
													)
											)}
										</div>
									</div>
								)
						)}
					</div>

					{/* load more btn */}
					<div className="mt-10 flex">
						<Button
							name="load more categories btn"
							className="m-auto"
							size={"lg"}
						>
							Load More Categories
						</Button>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomeCategories;
