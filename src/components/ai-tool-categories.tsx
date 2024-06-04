"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

interface AiToolsCategoryProps {
	data: string[];
}

const AiToolsCategory = ({ data }: AiToolsCategoryProps) => {
	return (
		<>
			<Swiper
				slidesPerView={"auto"}
				spaceBetween={24}
				className="mySwiper"
			>
				{data.map((item, index) => (
					<SwiperSlide
						key={index}
						className="w-fit"
					>
						<button className={`category_box ${index === 0 ? "active" : ""} `}>{item}</button>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default AiToolsCategory;
