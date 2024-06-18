"use client";
import SubCategoriesWrapper from "@/components/sub-categories/subcategories-wrapper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const AllSubcategories = () => {
	return (
		<>
			<section className="all_categories mb-30 mt-14">
				<div className="container">
					<SubCategoriesWrapper>
						<Swiper
							slidesPerView={1}
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								991: {
									slidesPerView: 3,
								},
								1200: {
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
							<SwiperSlide className="w-fit">
								<div className="col-12 bg-red-200 p-20"></div>
							</SwiperSlide>
							<SwiperSlide className="w-fit">
								<div className="col-12 bg-red-200 p-20"></div>
							</SwiperSlide>
							<SwiperSlide className="w-fit">
								<div className="col-12 bg-red-200 p-20"></div>
							</SwiperSlide>
							<SwiperSlide className="w-fit">
								<div className="col-12 bg-red-200 p-20"></div>
							</SwiperSlide>

							<SwiperSlide className="w-fit">
								<div className="col-12 bg-red-400 p-20"></div>
							</SwiperSlide>
							<SwiperSlide className="w-fit">
								<div className="col-12 bg-red-400 p-20"></div>
							</SwiperSlide>
							<SwiperSlide className="w-fit">
								<div className="col-12 bg-red-400 p-20"></div>
							</SwiperSlide>
							<SwiperSlide className="w-fit">
								<div className="col-12 bg-red-400 p-20"></div>
							</SwiperSlide>
						</Swiper>
					</SubCategoriesWrapper>
				</div>
			</section>
		</>
	);
};

export default AllSubcategories;
