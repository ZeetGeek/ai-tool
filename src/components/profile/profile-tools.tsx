import Des from "../ui/description";
import Title from "../ui/title";
import AiToolBox from "../ai-tool-box";
import { aiToolsData } from "@/data/ai-tools";
import { Button } from "../ui/button";

const ProfileTools = () => {
	const toolsOption = ["Uploaded Tools", "Saved Tools", "Tools Collection"];
	return (
		<>
			<section className="profile_tools">
				<div className="container">
					<div className="sec_title_options flex items-center justify-between">
					{/* category title and description */}
					<div className="sec_title">
						<Title size="h4">Uploaded Tools </Title>
						<Des size="md">
							Lorem ipsum dolor sit amet consectetur <span className="highlight">We found 120 AI Tools results.</span>
						</Des>
					</div>

					{/* category options */}
					<div className="sec_option flex flex-wrap items-center justify-center gap-6">
						{toolsOption.map((item, index) => (
							<button
								name="categories btn"
								className={`category_box ${index === 0 && "active"} `}
								key={index}
							>
								{item}
							</button>
						))}
					</div>
				</div>

				{/* all ai tools */}
				<div className="row mt-10 gap-y-6">
					{aiToolsData.map((item, index) => (
						<div
							key={index}
							className="col-xxl-3 col-lg-4 col-sm-6 col-12 "
						>
							<AiToolBox {...item} />
						</div>
					))}
				</div>

				{/* load more  */}
				<div className="mt-10 flex">
					<Button
						name="load more ai tools btn"
						size="lg"
						className="m-auto"
					>
						Load More AI Tools
					</Button>
				</div>
				</div>
			</section>
		</>
	);
};

export default ProfileTools;
