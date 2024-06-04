import { Phone, SendMail } from "iconoir-react";
import Logo from "./logo";
import Des from "./ui/description";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="flex items-start justify-between">
					{/* logo and contact info */}
					<div className="flex flex-col items-start">
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
								<Phone className="text-white icon_24" /> +91 1234567890
							</Link>
							<Link
								href="mailto:aiverce@gmail.com"
								title="Our email address"
								className="hover_effect inline-flex gap-3 rounded-lg bg-neutral-800 px-6 py-4 text-base font-medium text-white hover:bg-neutral-700"
							>
								<SendMail className="text-white icon_24" /> aiverce@gmail.com
							</Link>
						</div>
					</div>

					{/* categories */}

					{/* pages */}

					{/* legal */}

					{/* social links */}
				</div>

				<hr className="mt-14 border border-neutral-200" />

				{/* copy right */}
			</div>
		</footer>
	);
};

export default Footer;
