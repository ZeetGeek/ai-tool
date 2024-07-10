import { Newsletter } from "@/components/newsletter";
import PageIntro from "@/components/page-into";
import ProfileInfo from "@/components/profile/profile-info";
import ProfileTools from "@/components/profile/profile-tools";
import "@/style/profile.scss";

const Profile = () => {
	return (
		<>
			<div className="profile_page">
				<PageIntro
					home={{
						title: "Home",
						href: "/",
					}}
				/>
				{/* profile info */}
				<ProfileInfo />

				{/* profile tools */}
				<div className="mt-20">
					<ProfileTools />
				</div>

				{/* newsletter */}
				<div className="py-30">
					<Newsletter />
				</div>
			</div>
		</>
	);
};

export default Profile;
