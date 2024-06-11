import Link from "next/link";
import { Facebook, Instagram, X, Dribbble } from "iconoir-react";

const SocialLinks = () => {
	return (
		<>
			<ul className="flex flex-col items-center space-y-4 md:items-start">
				{/* facebook */}
				<li>
					<Link
						href="/"
						className="social_media_link"
						title="Facebook"
					>
						<Facebook className="icon_24" />
						Facebook
					</Link>
				</li>

				{/* twitter */}
				<li>
					<Link
						href="/"
						className="social_media_link"
						title="Twitter"
					>
						<X className="icon_24" />
						Twitter
					</Link>
				</li>

				{/* instagram */}
				<li>
					<Link
						href="/"
						className="social_media_link"
						title="Instagram"
					>
						<Instagram className="icon_24" />
						Instagram
					</Link>
				</li>

				{/* Dribble */}
				<li>
					<Link
						href="/"
						className="social_media_link"
						title="Dribble"
					>
						<Dribbble className="icon_24" />
						Dribbble
					</Link>
				</li>
			</ul>
		</>
	);
};

export default SocialLinks;
