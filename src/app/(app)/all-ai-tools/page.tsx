import AiTools from "@/components/home/ai-tools";
import { Newsletter } from "@/components/newsletter";
import PageIntro from "@/components/page-into";
import SearchBox from "@/components/search-box";
import Des from "@/components/ui/description";
import Title from "@/components/ui/title";
import PageInfo from "@/components/page-info";

const AllAiTools = () => {
	return (
		<>
			<div className="all_ai_tools">
				<PageIntro
					home={{
						title: "categories",
						href: "/categories",
					}}
				>
					<Title size="h1">
						All <span className="highlight">Personal Assistants</span> Tools
					</Title>
					<Des size="lg">We&apos;re in a thrilling era where technology, especially AI personal assistants, becomes integral to daily life. These AI-powered tools, combining artificial intelligence... Read More</Des>

					<SearchBox className="mt-14" />
				</PageIntro>

				{/* all ai tools */}
				<AiTools />

				{/* category content */}
				<div className="mt-30">
					<PageInfo
						title="More Info"
						description="Explore specialized AI tools across machine learning, computer vision, and more. Uncover tailored solutions for your projects."
					>
						<div className="content_item">
							<Des size="md">
								The era when AI was just a cool concept in movies or books is long gone. Today, AI is deeply woven into the fabric of our lives, especially through virtual assistants that are way more than mere tools. They&apos;re our
								partners, ready to take on the world with us. Thanks to some brainy algorithms, crystal-clear speech tech, and some pretty advanced machine learning, these digital helpers are transforming how we interact with our tech.
								They&apos;re the bridge between human intuition and the speed of a machine, leading us into a future where having an AI sidekick is just part of the norm.
							</Des>
						</div>

						<div className="content_item">
							<Title size="h5">Kicking Productivity into High Gear with AI Assistants: The Inside Scoop</Title>
							<Des size="md">The impact of AI personal assistants is massive, stretching across various fields and making a solid mark. Let’s dive in:</Des>
							<ul>
								<li>
									<Des size="md">
										<b>For the Everyday Dynamo:</b>  Whether it&apos;s Google Assistant, Siri, or another AI buddy native to your device, life just got a lot easier. Imagine your home adapting to your vibe or sending messages without
										lifting a finger. Magic, right?
									</Des>
								</li>

								<li>
									<Des size="md">
										<b>For the Workplace Heroes:</b>  Say goodbye to endless project management woes and hello to streamlined meetings and smart email campaigns. It&apos;s like having a secret weapon in your professional arsenal.
									</Des>
								</li>

								<li>
									<Des size="md">
										<b>For the Financial Whizzes:</b>  Managing money doesn’t have to be a headache anymore. With AI financial assistants, it’s like having your own financial advisor, always ready with smart insights.
									</Des>
								</li>

								<li>
									<Des size="md">
										<b>For the Marketing Maestros:</b> Launch email campaigns with confidence and personalize your outreach like never before. Your AI assistant has got your back.
									</Des>
								</li>

								<li>
									<Des size="md">
										<b>For the Home Gurus:</b> Home management just got a voice upgrade. Control your smart home devices through simple voice commands and make your home as smart as you are.
									</Des>
								</li>

								<li>
									<Des size="md">
										<b>For the Creative Geniuses:</b>  Unleash your creativity with AI-driven tools for art and writing. Enrich your content with insights only AI can provide and watch your creative process soar.
									</Des>
								</li>
							</ul>
						</div>
					</PageInfo>
				</div>

				<div className="my-30">
					<Newsletter />
				</div>
			</div>
		</>
	);
};

export default AllAiTools;
