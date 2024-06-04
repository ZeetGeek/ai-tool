import Des from "../ui/description";
import Title from "../ui/title";
import { featuresData } from "@/data/features";
import Image from "next/image";
import botImage from "@/images/pages/home/features/bot-image.png";

const Features = () => {
	return (
		<>
			<section className="features">
				<div className="container">
					<div className="rounded-4xl bg-neutral-900 p-12">
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
						<div className="features_wp mt-10 grid grid-cols-12 grid-rows-2 gap-6">
							{featuresData.map((item, index) => (
								<div
									className="feature_box"
									key={index}
								>
									{/* title and icon */}
									<div className="flex items-center justify-between">
										<Title size="h4">{item.title}</Title>
										<Image
											src={item.icon}
											height={100}
											width={100}
											placeholder="blur"
											alt={`${item.title} icon`}
										/>
									</div>

									<hr className="mb-4 mt-6" />

									{/* description */}
									<Des size="lg">{item.description}</Des>
								</div>
							))}
							<div className="feature_box flex">
								<Image
									src={botImage}
									width={368}
									height={520}
									className="m-auto"
									alt="feature bot image"
									placeholder="blur"
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
