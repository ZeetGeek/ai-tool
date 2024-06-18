"use client";
import SubCategoriesWrapper from "@/components/sub-categories/subcategories-wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { subCategories } from "@/data/sub-categories";
import AiToolBox from "../ai-tool-box";

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
		</>
	);
};

export default AllSubcategories;
