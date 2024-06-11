"use client";
import AiToolsCategory from "@/components/ai-tool-categories";
import Title from "../ui/title";
import Des from "../ui/description";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AiToolBox from "../ai-tool-box";
import { aiToolsData } from "@/data/ai-tools";

const AiTools = () => {
	// categories data
	const categoriesData: string[] = ["AI Productivity Tools", "AI Text Generators", "AI Image Tools", "AI Art Generators", "Misc AI Tools", "AI Video Tools", "AI Business Tools", "Automation Tools", "AI Audio Generators", "AI Code Tools"];

	// sub categories data
	const subCategoryData: string[] = ["Personal Assistant", "Research", "Spreadsheets", "Translator", "Presentations", "Email Assistant", "Search Engine"];

	// ai tools count
	const aiToolsCount = Array.from({ length: 12 }, (_, i) => i + 1);

	return (
		<>
			<section className="home_ai_tools">
				<div className="container">
					{/* tools category */}
					<div className="flex justify-center">
						<AiToolsCategory data={categoriesData} />
					</div>

					{/* title, description & filter options */}
					<div className="sec_title_options mb-10 mt-20 flex items-center justify-between">
						{/* title & description */}
						<div className="sec_title">
							<Title size="h4">AI Productivity Tools</Title>
							<Des size="md">
								the productivity tools category <span className="highlight">We found 360 AI Tools results.</span> for personal assistants.
							</Des>
						</div>

						{/* filter option */}
						<div className="sec_option flex flex-col items-center gap-6 sm:flex-row">
							{/* sub categories */}
							<Select>
								<SelectTrigger className="dropdown_btn">
									<SelectValue placeholder="Select Sub Category" />
								</SelectTrigger>
								<SelectContent>
									{subCategoryData.map((item, index) => (
										<SelectItem
											key={index}
											value={`${item.toLowerCase().replaceAll(" ", "-")}`}
										>
											{item}
										</SelectItem>
									))}
								</SelectContent>
							</Select>

							{/* filter button */}
							<Button>Filter The Results</Button>
						</div>
					</div>

					{/* all tools */}
					<div className="grid gap-6 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 ">
						{aiToolsData.map((item) => (
							<AiToolBox
								key={item.id}
								{...item}
							/>
						))}
					</div>

					{/* load more btn */}
					<div className="mt-10 text-center">
						<Button size="lg">Load More AI Tools</Button>
					</div>
				</div>
			</section>
		</>
	);
};

export default AiTools;
