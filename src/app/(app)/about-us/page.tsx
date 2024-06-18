import PageIntro from "@/components/page-into";
import Title from "@/components/ui/title";
import Des from "@/components/ui/description";
import AboutUsInfos from "@/components/about-us/about-us-infos";
import Faqs from "@/components/faqs";
import "@/style/about-us.scss";
import { Newsletter } from "@/components/newsletter";

const AboutUs = () => {
	return (
		<>
			<div className="about_us">
				{/* page intro */}
				<PageIntro
					home={{
						title: "Home",
						href: "/",
					}}
				>
					<Title size="h1">
						Know <span className="highlight">About us</span>
					</Title>
					<Des size="lg">Learn about our commitment to making advanced AI tools accessible for everyone. Meet the team driving innovation and supporting your AI journey.</Des>
				</PageIntro>

				{/* about us infos */}
				<AboutUsInfos />

				{/* faqs */}
				<Faqs />

				{/* newsletter */}
				<div className="py-30">
					<Newsletter />
				</div>
			</div>
		</>
	);
};

export default AboutUs;
