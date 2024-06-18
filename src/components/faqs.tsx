import Title from "./ui/title";
import Des from "./ui/description";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FaqsData } from "@/data/faqs";

const Faqs = () => {
	return (
		<>
			<section className="faqs">
				<div className="container">
					<div className="center_box">
						<div className="mb-10">
							<Title size="h2">FAQ’S</Title>
							<Des
								size="lg"
								className="text-neutral-500"
							>
								Find answers to common questions about our AI tools, features, and services. Get the information you need to make the most of our platform.
							</Des>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-8 mx-auto">
							{/* TODO make accordion custom don't use shadcn*/}
							<Accordion>
								{FaqsData.map((item, index) => (
									<AccordionItem
										className="mb-6 last:mb-0"
										key={index}
										value={`${index + 1}`}
									>
										<AccordionTrigger>{item.title}</AccordionTrigger>
										<AccordionContent>{item.description}</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Faqs;
