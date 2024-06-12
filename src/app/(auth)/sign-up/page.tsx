"use client";
import { useState } from "react";
import AuthWrapperProps from "@/components/auth-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import "@/style/auth.scss";
import { Eye, EyeClosed, Mail, PasswordCursor, User } from "iconoir-react";

const SignUp = () => {
	const [show, isShow] = useState<boolean>(false);

	return (
		<>
			<AuthWrapperProps page="sign-up">
				<form action="#">
					<div className="flex flex-col space-y-6 lg:space-y-8">
						{/* first name & last name */}
						<div className="form_field">
							{/* first name */}
							<div className="field">
								<User className="icon_24 text-neutral-500" />
								<Input
									type="text"
									placeholder="First Name"
								/>
							</div>

							{/* last name */}
							<div className="field">
								<User className="icon_24 text-neutral-500" />
								<Input
									type="email"
									placeholder="Last Name"
								/>
							</div>
						</div>

						{/* email */}
						<div className="form_field">
							<div className="field">
								<Mail className="icon_24 text-neutral-500" />
								<Input
									type="email"
									placeholder="Email"
								/>
							</div>
						</div>

						{/* password */}
						<div className="form_field">
							<div className="field">
								<PasswordCursor className="icon_24 text-neutral-500" />
								<Input
									type={show ? "text" : "password"}
									placeholder="Password"
								/>
								<Button
									name="password show and hide btn"
									variant="ghost"
									className="pass_icon p-1"
									onClick={(e) => {
										e.preventDefault();
										isShow(!show);
									}}
								>
									{show ? <EyeClosed className="icon_24 text-neutral-500" /> : <Eye className="icon_24 text-neutral-500" />}
								</Button>
							</div>
						</div>

						{/* terms and condition */}
						<div className="group flex items-center space-x-2">
							<Checkbox
								id="terms"
								className="mt-[-2px]"
							/>
							<label
								htmlFor="terms"
								className="hover_effect cursor-pointer text-lg font-medium capitalize leading-[160%] text-neutral-500 group-hover:text-neutral-800"
							>
								I Agree with
								<Link
									href="#"
									title="Terms of use"
									className="terms_links"
								>
									{" "}
									Terms & Condition{" "}
								</Link>
								and
								<Link
									href="#"
									title="Privacy policy"
									className="terms_links"
								>
									{" "}
									Privacy Policy
								</Link>
								.
							</label>
						</div>

						{/* sign up button */}
						<Button
							name="sign up btn"
							type="submit"
						>
							Sign Up
						</Button>
					</div>
				</form>
			</AuthWrapperProps>
		</>
	);
};

export default SignUp;
