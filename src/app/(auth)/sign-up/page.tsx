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
					<div className="flex flex-col space-y-8">
						{/* first name & last name */}
						<div className="form_field">
							{/* first name */}
							<div className="field">
								<User className="field_icon" />
								<Input
									type="text"
									placeholder="First Name"
								/>
							</div>

							{/* last name */}
							<div className="field">
								<User className="field_icon" />
								<Input
									type="email"
									placeholder="Last Name"
								/>
							</div>
						</div>

						{/* email */}
						<div className="form_field">
							<div className="field">
								<Mail className="field_icon" />
								<Input
									type="email"
									placeholder="Email"
								/>
							</div>
						</div>

						{/* password */}
						<div className="form_field">
							<div className="field">
								<PasswordCursor className="field_icon" />
								<Input
									type={show ? "text" : "password"}
									placeholder="Password"
								/>
								<Button
									variant="ghost"
									className="pass_icon p-1"
									onClick={(e) => {
										e.preventDefault();
										isShow(!show);
									}}
								>
									{show ? <EyeClosed className="field_icon" /> : <Eye className="field_icon" />}
								</Button>
							</div>
						</div>

						{/* terms and condition */}
						<div className="flex items-center space-x-2">
							<Checkbox
								id="terms"
								className="mt-[-2px]"
							/>
							<label
								htmlFor="terms"
								className="text-lg font-medium leading-[160%] text-neutral-500"
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
						<Button type="submit">Sign Up</Button>
					</div>
				</form>
			</AuthWrapperProps>
		</>
	);
};

export default SignUp;
