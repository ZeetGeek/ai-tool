"use client";
import SubCategoriesWrapper from "@/components/sub-categories/subcategories-wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { subCategories } from "@/data/sub-categories";
import AiToolBox from "../ai-tool-box";
import PageInfo from "../page-info";
import Des from "../ui/description";
import Title from "../ui/title";
import { Newsletter } from "../newsletter";

const AllSubcategories = () => {
	return (
		<>
			<section className="all_categories mb-30 mt-14">
				<div className="container">
					<div className="flex flex-col space-y-10">
						{subCategories.map((item, index) => (
							<div
								key={index}
								className="subcategories_wp"
							>
								<SubCategoriesWrapper
									title={item.title}
									description={item.description}
									icon={item.icon}
									href={item.href}
								>
									<Swiper
										slidesPerView={1}
										breakpoints={{
											768: {
												slidesPerView: 2,
											},
											1200: {
												slidesPerView: 3,
											},
											1600: {
												slidesPerView: 4,
											},
										}}
										spaceBetween={24}
										autoplay={{
											delay: 3000,
											disableOnInteraction: false,
										}}
										loop={true}
										className="mySwiper"
										modules={[Autoplay]}
									>
										{item.aiTools.map((item, index) => (
											<SwiperSlide
												key={index}
												className="w-fit"
											>
												<AiToolBox {...item} />
											</SwiperSlide>
										))}
									</Swiper>
								</SubCategoriesWrapper>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* category content */}
			<div className="mt-30">
				<PageInfo
					title="More Info"
					description="Explore specialized AI tools across machine learning, computer vision, and more. Uncover tailored solutions for your projects."
				>
					<div className="content_item">
						<Des size="md">
							The era when AI was just a cool concept in movies or books is long gone. Today, AI is deeply woven into the fabric of our lives, especially through virtual assistants that are way more than mere tools. They&apos;re our partners,
							ready to take on the world with us. Thanks to some brainy algorithms, crystal-clear speech tech, and some pretty advanced machine learning, these digital helpers are transforming how we interact with our tech. They&apos;re the
							bridge between human intuition and the speed of a machine, leading us into a future where having an AI sidekick is just part of the norm.
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

			<div className="py-30">
				<Newsletter />
			</div>
		</>
	);
};

export default AllSubcategories;
