import PageIntro from "@/components/page-into";
import AllSubcategories from "@/components/sub-categories/all-subcategories";
import Des from "@/components/ui/description";
import Title from "@/components/ui/title";
import "@/style/sub-categories.scss";

const SubCategories = () => {
	return (
		<>
			<div className="sub_categories">
				<PageIntro
					home={{
						title: "Categories",
						href: "/categories",
					}}
				>
					<Title size="h1">
						Explore AI <span className="highlight">Productivity</span> Tools
					</Title>
					{/* TODO add read more and read less functionality */}
					<Des size="lg">Unlock the transformative potential of AI productivity tools and watch your efficiency skyrocket. More than mere tools, they serve as catalysts for change... Read More</Des>
				</PageIntro>

				{/* all sub categories */}
				<AllSubcategories />
			</div>
		</>
	);
};

export default SubCategories;
