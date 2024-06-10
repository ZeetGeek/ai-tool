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
				<div className="flex flex-wrap items-start justify-between gap-6">
					{/* logo and contact info */}
					<div className="flex flex-col items-start sm:w-6/12 md:bg-red-500 xl:w-full xl:max-w-[500px] xl:bg-red-200">
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

						<div className="phone_email_box_wp ">
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
					<div className="footer_wp md:w-5/12 md:bg-blue-400 xl:w-auto xl:bg-blue-200">
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
					<div className="footer_wp">
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
					<div className="footer_wp">
						<Title
							size="h6"
							className="footer_links_title"
						>
							Pages
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
