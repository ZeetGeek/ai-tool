import Title from "../ui/title";
import Des from "../ui/description";
import { aiToolsData } from "@/data/ai-tools";
import AiToolBox from "../ai-tool-box";

const AiToolsHub = () => {
	const categoryOptions = ["Featured", "Free", "Paid", "Popular", "New"];

	return (
		<section className="ai_tools_hub">
			<div className="container">
				<div className="center_box">
					{/* title and description */}
					<Title
						size="h2"
						className="text-neutral-800"
					>
						AI Tool Hub
					</Title>
					<Des
						size="lg"
						className="text-neutral-500"
					>
						Explore our collection of free AI tools for all your project needs. No cost, all innovation.
					</Des>
				</div>

				<div className="flex items-center justify-between">
					{/* category title and description */}
					<div className="flex flex-col items-start">
						<Title size="h4">Featured</Title>
						<Des size="md">
							the Featured category <span className="highlight">We found 120 AI Tools results.</span>
						</Des>
					</div>
					{/* category options */}
					<div className="flex items-center justify-center gap-6">
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
				<div className="mt-10 grid grid-cols-4 gap-6">
					{aiToolsData.map((item, index) => (
						<AiToolBox
							key={index}
							{...item}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default AiToolsHub;
