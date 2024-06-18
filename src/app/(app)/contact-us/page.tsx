import { FacebookTag, X, Phone, SendMail, Instagram, Dribbble } from "iconoir-react";
import PageIntro from "@/components/page-into";
import Title from "@/components/ui/title";
import Des from "@/components/ui/description";
import "@/style/contact-us.scss";
import { Newsletter } from "@/components/newsletter";
import Link from "next/link";
import ContactForm from "@/components/contact-us/contact-form";

const ContactUs = () => {
	return (
		<>
			<div className="contact_us">
				<div className="container">
					<PageIntro
						home={{
							title: "Home",
							href: "/",
						}}
					/>

					<div className="row items-center justify-center gap-12 lg:gap-0">
						{/* title and info */}
						<div className="col-xxl-5 col-lg-6">
							<div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-start">
								<Title
									size="h1"
									className="mb-6"
								>
									Let’s <span className="highlight">Contact Us</span>{" "}
								</Title>

								<Des
									size="lg"
									className="text-neutral-500"
								>
									Any question? We would be happy to help you!
								</Des>

								<div className="mb-8 mt-6 md:mb-10 md:mt-8 lg:mb-12 lg:mt-10 xl:mb-16 xl:mt-12 xxl:mt-14">
									<div className="phone_email_box_wp flex-col items-center sm:flex-row sm:items-start">
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

								<div className="flex items-center gap-4 lg:gap-6">
									<Link
										href="/"
										title="facebook"
									>
										<FacebookTag className="contact_us_social_icon" />
									</Link>
									<Link
										href="/"
										title="twitter"
									>
										<X className="contact_us_social_icon" />
									</Link>
									<Link
										href="/"
										title="instagram"
									>
										<Instagram className="contact_us_social_icon" />
									</Link>
									<Link
										href="/"
										title="dribble"
									>
										<Dribbble className="contact_us_social_icon" />
									</Link>
								</div>
							</div>
						</div>

						{/* contact form */}
						<div className="col-xxl-5 col-lg-6">
							<ContactForm />
						</div>
					</div>

					<div className="py-30">
						<Newsletter />
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactUs;
