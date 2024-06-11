import Des from "../ui/description";
import Title from "../ui/title";
import { featuresData } from "@/data/features";
import Image from "next/image";
import botImage from "@/images/pages/home/features/bot-image.png";

const Features = () => {
	return (
		<>
			<section className="features">
				<div className="container_full container">
					<div className="rounded-2xl bg-neutral-900 px-12 py-20 sm:rounded-3xl lg:rounded-4xl lg:py-12">
						{/* title and description */}
						<div className="center_box">
							<Title
								size="h2"
								className="text-white"
							>
								Explore the Power of AI Tools
							</Title>
							<Des
								size="lg"
								className="text-neutral-300"
							>
								Unleash innovation with our diverse selection of AI tools curated for every project. From machine learning to computer vision, find the perfect solution for your needs.
							</Des>
						</div>

						{/* all features */}
						<div className="features_wp xxl:grid-cols-12 xxl:grid-rows-2 grid grid-cols-1 gap-6 md:grid-cols-2">
							{featuresData.map((item, index) => (
								<div
									className="feature_box"
									key={index}
								>
									{/* title and icon */}
									<div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
										<Title
											size="h4"
											className="order-2 w-full flex-1 lg:order-1"
										>
											{item.title}
										</Title>
										<Image
											className="order-1 lg:order-2"
											src={item.icon}
											height={100}
											width={100}
											alt={`${item.title} icon`}
										/>
									</div>

									<hr className="mb-4 mt-6" />

									{/* description */}
									<Des size="lg">{item.description}</Des>
								</div>
							))}
							<div className="feature_box xxl:flex hidden">
								<Image
									src={botImage}
									width={368}
									height={520}
									className="m-auto"
									alt="feature bot image"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Features;
