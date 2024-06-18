import Title from "@/components/ui/title";
import Image from "next/image";
import Des from "@/components/ui/description";
import SearchBox from "@/components/search-box";
import AiBotImg1 from "@/images/pages/home/ai-bot-1.png";
import AiBotImg2 from "@/images/pages/home/ai-bot-2.png";
import AiImg1 from "@/images/ai-images/1.jpg";
import AiImg2 from "@/images/ai-images/2.jpg";
import AiImg3 from "@/images/ai-images/3.jpg";
import AiImg4 from "@/images/ai-images/4.jpg";

const Banner = () => {
	const bannerAiImgs = [AiImg1, AiImg2, AiImg3, AiImg4];

	return (
		<>
			<section className="banner">
				<div className="container">
					{/* title and description */}
					<div className="center_box">
						{/* title */}
						<div className="mx-auto text-center">
							<Title size="h1">
								Discover the Latest <span className="highlight">AI Tools</span>
							</Title>
							<div className="mt-4 inline-flex flex-col items-center gap-3 md:flex-row lg:gap-5">
								<div className="flex items-center">
									{bannerAiImgs.map((img, index) => (
										<div
											key={index}
											className="banner_ai_img"
										>
											<Image
												src={img}
												width={80}
												height={80}
												alt="ai tool logo"
												className="m-auto"
											/>
										</div>
									))}
								</div>
								<Title
									size="h1"
									className="-mb-4"
								>
									For Every Need
								</Title>
							</div>
						</div>

						{/* description */}
						<div className="page_main_des mb-7 mt-8 md:mb-10 lg:mb-14">
							<Des
								size="lg"
								className="text-center text-neutral-500"
							>
								Unlock the potential of AI with our curated collection of cutting-edge tools. Whether you&apos;re a beginner or an expert, find the perfect solution for your projects.
							</Des>
						</div>

						{/* search box */}
						<SearchBox />
					</div>

					{/* ai bot image */}
					<div className="bot_images hidden lg:block">
						<Image
							src={AiBotImg1}
							height={340}
							width={340}
							alt="ai bot image"
						/>
						<Image
							src={AiBotImg2}
							height={300}
							width={300}
							alt="ai bot image"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner;
