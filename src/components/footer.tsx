import { Phone, SendMail } from "iconoir-react";
import Logo from "./logo";
import Des from "./ui/description";
import Link from "next/link";
import Title from "./ui/title";
import { categoriesData, pagesData, legalData } from "@/data/page-links";
import SocialLinks from "./social-links";
import "@/style/footer.scss";

const Footer = () => {
	// links data

	return (
		<footer className="footer">
			<div className="container">
				<div className="flex items-start justify-between">
					{/* logo and contact info */}
					<div className="flex w-full max-w-[500px] flex-col items-start">
						{/* logo */}
						<Logo href="/" />

						{/* description */}
						<div className="mb-10 mt-6">
							<Des
								size="md"
								className="text-neutral-500"
							>
								Unlock the potential of AI with our curated collection of cutting-edge tools.
							</Des>
						</div>

						<div className="flex items-center gap-6">
							{/* // TODO make this email and number box into component  */}
							<Link
								href="tel:+911234567890"
								title="Our contact number"
								className="hover_effect inline-flex gap-3 rounded-lg bg-primary-600 px-6 py-4 text-base font-medium text-white hover:bg-primary-500"
							>
								<Phone className="icon_24 text-white" /> +91 1234567890
							</Link>
							<Link
								href="mailto:aiverce@gmail.com"
								title="Our email address"
								className="hover_effect inline-flex gap-3 rounded-lg bg-neutral-800 px-6 py-4 text-base font-medium text-white hover:bg-neutral-700"
							>
								<SendMail className="icon_24 text-white" /> aiverce@gmail.com
							</Link>
						</div>
					</div>

					{/* categories */}
					<div className="footer_wp">
						<Title
							size="h6"
							className="footer_links_title"
						>
							Categories
						</Title>
						<ul className="footer_links">
							{categoriesData.map((item, index) => {
								const link = item.replace(/\s+/g, "-").toLowerCase();

								return (
									<li key={index}>
										<Link
											className="footer_link"
											href={`/${link}`}
											title={item}
										>
											{item}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>

					{/* pages */}
					<div className="footer_wp">
						<Title
							size="h6"
							className="footer_links_title"
						>
							Pages
						</Title>
						<ul className="footer_links">
							{pagesData.map((item, index) => {
								const link = item.replace(/\s+/g, "-").toLowerCase();

								return (
									<li key={index}>
										<Link
											className="footer_link"
											href={`${link === "home" ? "/" : `/${link}`}`}
											title={item}
										>
											{item}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>

					{/* legal */}
					<div className="footer_wp">
						<Title
							size="h6"
							className="footer_links_title"
						>
							Pages
						</Title>
						<ul className="footer_links">
							{legalData.map((item, index) => {
								const link = item.replace(/\s+/g, "-").toLowerCase();

								return (
									<li key={index}>
										<Link
											className="footer_link"
											href={`${link === "home" ? "/" : `/${link}`}`}
											title={item}
										>
											{item}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>

					{/* social links */}
					<div className="footer_wp">
						<Title
							size="h6"
							className="footer_links_title"
						>
							Social Links
						</Title>
						<SocialLinks />
					</div>
				</div>

				<hr className="mt-14 border border-neutral-200" />

				{/* copy right */}
				<div className="py-8 text-center">
					<Des
						size="md"
						className="text-neutral-500"
					>
						Copyright © 2024 AIverce All rights reserved.
					</Des>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
