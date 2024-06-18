"use client";
import Title from "@/components/ui/title";
import Des from "@/components/ui/description";
import PageIntro from "@/components/page-into";
import { Newsletter } from "@/components/newsletter";
import AllCategories from "@/components/categories/all-categories";

const Categories = () => {
	return (
		<>
			<div className="categories_page">
				{/* page intro */}
				<PageIntro
					home={{
						title: "Home",
						href: "/",
					}}
				>
					<Title size="h1">
						Explore AI Tool <span className="highlight">Categories</span>
					</Title>
					<div className="page_main_des">
						{/* TODO : add read more and read less feature end of the description */}
						<Des size="lg">Explore specialized AI domains with our curated categories. Find the perfect tools for your projects in machine learning, natural language processing, and more. </Des>
					</div>
				</PageIntro>

				{/* all categories */}
				<div className="mt-14">
					<AllCategories />
				</div>

				{/* newsletter */}
				<div className="py-30">
					<Newsletter />
				</div>
			</div>
		</>
	);
};

export default Categories;
