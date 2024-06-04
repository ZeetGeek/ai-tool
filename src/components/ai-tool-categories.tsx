"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

interface AiToolsCategoryProps {
	data: string[];
}

const AiToolsCategory = ({ data }: AiToolsCategoryProps) => {
	return (
		<>
			<Swiper
				slidesPerView={"auto"}
				spaceBetween={24}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				loop={true}
				className="mySwiper"
				modules={[Autoplay]}
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
