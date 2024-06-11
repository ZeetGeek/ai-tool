import { Phone, SendMail } from "iconoir-react";
import Logo from "./logo";
import Des from "./ui/description";
import Link from "next/link";
import Title from "./ui/title";
import { categoriesData, pageData, legalData } from "@/data/page-links";
import SocialLinks from "./social-links";
import "@/style/footer.scss";

const Footer = () => {
	// links data

	return (
		<footer className="footer">
			<div className="container">
				<div className="flex flex-wrap items-start justify-between space-y-10 sm:space-y-0">
					{/* logo and contact info */}
					<div className="xxl:max-w-[500px] xxl:mb-0 xxl:items-start mb-0 flex w-full flex-col items-center sm:mb-10">
						{/* logo */}
						<Logo href="/" />

						{/* description */}
						<div className="xxl:mb-10 xxl:mt-6 my-6">
							<Des
								size="md"
								className="xxl:text-start text-center text-neutral-500"
							>
								Unlock the potential of AI with our curated collection of cutting-edge tools.
							</Des>
						</div>

						<div className="phone_email_box_wp flex-col items-center sm:flex-row sm:items-start">
							{/* // TODO make this email and number box into component  */}
							<Link
								href="tel:+911234567890"
								title="Our contact number"
								className="phone_box"
							>
								<Phone className="icon_24" /> +91 1234567890
							</Link>
							<Link
								href="mailto:aiverce@gmail.com"
								title="Our email address"
								className="email_box"
							>
								<SendMail className="icon_24" /> aiverce@gmail.com
							</Link>
						</div>
					</div>

					{/* categories */}
					<div className="footer_wp w-full sm:w-5/12 md:w-auto">
						<Title
							size="h6"
							className="footer_links_title"
						>
							Categories
						</Title>
						<ul className="footer_links">
							{categoriesData.map((link, index) => {
								return (
									<li key={index}>
										<Link
											className="footer_link"
											href={link.href}
											title={link.title}
										>
											{link.title}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>

					{/* pages */}
					<div className="footer_wp w-full sm:w-4/12 md:w-auto">
						<Title
							size="h6"
							className="footer_links_title"
						>
							Pages
						</Title>
						<ul className="footer_links">
							{pageData.map((link, index) => {
								return (
									<li key={index}>
										<Link
											className="footer_link"
											href={link.href}
											title={link.title}
										>
											{link.title}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>

					{/* legal */}
					<div className="footer_wp w-full sm:w-3/12 md:w-auto">
						<Title
							size="h6"
							className="footer_links_title"
						>
							Legal
						</Title>
						<ul className="footer_links">
							{legalData.map((link, index) => {
								return (
									<li key={index}>
										<Link
											className="footer_link"
											href={link.href}
											title={link.title}
										>
											{link.title}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>

					{/* social links */}
					<div className="footer_wp mt-0 w-full sm:mt-10 md:mt-0 md:w-auto">
						<Title
							size="h6"
							className="footer_links_title text-center md:text-start"
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
