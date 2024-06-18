import {  Phone, User, Mail, Quote, Telegram } from "iconoir-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactForm = () => {
	return (
		<>
			<div className="flex flex-col items-start space-y-6 lg:space-y-8">
				{/* first name and last name */}
				<div className="form_field">
					<div className="field">
						<User className="icon_24 text-neutral-500" />
						<Input
							type="text"
							placeholder="first name"
						/>
					</div>
					<div className="field">
						<User className="icon_24 text-neutral-500" />
						<Input
							type="text"
							placeholder="last name"
						/>
					</div>
				</div>

				{/* email address phone number */}
				<div className="form_field">
					<div className="field">
						<Mail className="icon_24 text-neutral-500" />
						<Input
							type="email"
							placeholder="Email Address"
						/>
					</div>
					<div className="field">
						<Phone className="icon_24 text-neutral-500" />
						<Input
							type="number"
							placeholder="Phone Number"
						/>
					</div>
				</div>

				{/* subject */}
				<div className="form_field">
					<div className="field">
						<Quote className="icon_24 text-neutral-500" />
						<Input
							type="text"
							placeholder="Subject"
						/>
					</div>
				</div>

				{/* message */}
				<div className="form_field">
					<div className="field">
						<Telegram className="icon_24 text-neutral-500" />
						<textarea
							placeholder="Type your message here..."
							className="h-[200px]"
						></textarea>
					</div>
				</div>

				<div className="w-full text-center lg:text-start">
					<Button size="lg">Send Message</Button>
				</div>
			</div>
		</>
	);
};

export default ContactForm;
