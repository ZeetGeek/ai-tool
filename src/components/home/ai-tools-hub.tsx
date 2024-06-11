import Title from "../ui/title";
import Des from "../ui/description";
import { aiToolsData } from "@/data/ai-tools";
import AiToolBox from "../ai-tool-box";
import { Button } from "../ui/button";

const AiToolsHub = () => {
	const categoryOptions = ["Featured", "Free", "Paid", "Popular", "New"];

	return (
		<section className="ai_tools_hub">
			<div className="container">
				<div className="center_box">
					{/* title */}
					<Title
						size="h2"
						className="text-neutral-800"
					>
						AI Tool Hub
					</Title>
					{/* description */}
					<Des
						size="lg"
						className="text-neutral-500"
					>
						Explore our collection of free AI tools for all your project needs. No cost, all innovation.
					</Des>
				</div>

				<div className="sec_title_options flex items-center justify-between">
					{/* category title and description */}
					<div className="sec_title">
						<Title size="h4">Featured</Title>
						<Des size="md">
							the Featured category <span className="highlight">We found 120 AI Tools results.</span>
						</Des>
					</div>
					{/* category options */}
					<div className="sec_option flex flex-wrap items-center justify-center gap-6">
						{categoryOptions.map((item, index) => (
							<button
								className={`category_box ${index === 0 && "active"} `}
								key={index}
							>
								{item}
							</button>
						))}
					</div>
				</div>

				{/* all ai tools */}
				<div className="ai_tool_boxes_wp mt-10">
					{aiToolsData.map((item, index) => (
						<AiToolBox
							key={index}
							{...item}
						/>
					))}
				</div>
				{/* load more  */}
				<div className="mt-10 flex">
					<Button
						size="lg"
						className="m-auto"
					>
						Load More AI Tools
					</Button>
				</div>
			</div>
		</section>
	);
};

export default AiToolsHub;
