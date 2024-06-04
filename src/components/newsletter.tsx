import Title from "./ui/title";
import Des from "./ui/description";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
	return (
		<>
			<section className="newsletter">
				<div className="container">
					<div className="newsletter_wp relative z-10 overflow-hidden rounded-3xl bg-neutral-900 py-[100px] text-center">
						{/* title */}
						<Title
							size="h2"
							className="mb-6 text-white"
						>
							Stay Updated with Our Newsletter
						</Title>
						{/* description */}
						<Des
							size="lg"
							className="text-neutral-300"
						>
							Subscribe to our newsletter to get the latest Metarik news
						</Des>

						{/* email and button */}
						<div className="mt-12 inline-flex items-center gap-4">
							<Input
								className="w-[434px] rounded-xl border border-white px-8 py-4 text-white placeholder:text-neutral-300"
								type="email"
								placeholder="Email address"
							/>
							<Button size="lg">Subscribe</Button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
