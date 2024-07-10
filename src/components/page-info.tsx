import Des from "./ui/description";
import Title from "./ui/title";

interface PageInfoProps {
	children: React.ReactNode;
	title: string | React.ReactNode;
	description: string | React.ReactNode;
}

const PageInfo = ({ title, description, children }: PageInfoProps) => {
	return (
		<>
			<section className="page_info">
				<div className="container">
					<div className="center_box">
						<Title size="h2">{title}</Title>
						<Des
							size="lg"
							className="text-neutral-500"
						>
							{description}
						</Des>
					</div>
					<div className="rounded-2xl bg-neutral-100 p-5 sm:p-6 lg:rounded-4xl lg:p-8 xl:p-10">{children}</div>
				</div>
			</section>
		</>
	);
};

export default PageInfo;
