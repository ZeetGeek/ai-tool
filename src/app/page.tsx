import Banner from "@/components/home/banner";
import AiTools from "@/components/home/ai-tools";
import Features from "@/components/home/features";
import HomeCategories from "@/components/home/home-categories";
import AiToolsHub from "@/components/home/ai-tools-hub";
import { Newsletter } from "@/components/newsletter";
import "@/style/home.scss";

const Home = () => {
	return (
		<div className="home_page relative">
			{/* banner */}
			{/* <Banner /> */}

			{/* ai tools */}
			<div className="pb-30 pt-20">{/* <AiTools /> */}</div>

			{/* features */}
			{/* <Features /> */}

			{/* home categories */}
			<div className="py-30">{/* <HomeCategories /> */}</div>

			{/* ai tools hub */}
			{/* <AiToolsHub /> */}

			{/* newsletter  */}
			<div className="py-30">{/* <Newsletter /> */}</div>
		</div>
	);
};

export default Home;
