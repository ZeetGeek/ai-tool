import Title from "@/components/ui/title";
import Des from "@/components/ui/description";
import { AboutUsData } from "@/data/about-us";
import Image from "next/image";

const AboutUsInfos = () => {
	return (
		<>
			<section className="about_us_infos mb-30 mt-14">
				<div className="container">
					<div className="row gap-y-6">
						{AboutUsData.map((item, index) => (
							<div
								key={index}
								className="col-xxl-4 col-lg-6 about_us_box_wp mx-auto"
							>
								<div className="about_us_box">
									<div className="gao-4 flex flex-col items-start justify-center sm:flex-row sm:items-center sm:justify-start lg:gap-6">
										{/* icon */}
										<Image
											src={item.icon}
											height={100}
											width={100}
											alt={`${item.title} icon`}
										/>

										{/* title */}
										<Title size="h3">{item.title}</Title>
									</div>

									{/* divider */}
									<hr className="my-4 border lg:my-6" />

									{/* description */}
									<Des size="lg">{item.description}</Des>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutUsInfos;
