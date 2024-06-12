"use client";
import { useState } from "react";
import Link from "next/link";
import AuthWrapperProps from "@/components/auth-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import "@/style/auth.scss";
import { Eye, EyeClosed, Mail, PasswordCursor, User } from "iconoir-react";

const SignIn = () => {
	const [show, isShow] = useState<boolean>(false);

	return (
		<>
			<AuthWrapperProps page="sign-in">
				<form action="#">
					<div className="flex flex-col space-y-6 lg:space-y-8 ">
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

								{/* // TODO add name to all buttons and also change color when i click on button using action */}
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

						{/* remember me and forgot password */}
						<div className="flex flex-row items-center justify-between">
							{/* remember me */}
							<div className="group flex items-center space-x-2">
								<Checkbox
									id="terms"
									className="mt-[-2px]"
								/>
								<label
									htmlFor="terms"
									className="hover_effect cursor-pointer text-lg font-medium capitalize leading-[160%]  text-neutral-500 group-hover:text-neutral-800"
								>
									remember me
								</label>
							</div>

							{/* forgot password */}
							<Link
								href="#"
								title="Forgot password"
								className="hover_effect text-lg capitalize text-neutral-500 hover:text-neutral-800 hover:underline hover:underline-offset-4"
							>
								Forgot Password
							</Link>
						</div>

						{/* sign up button */}
						<Button
							name="sign in btn"
							variant="secondary"
							type="submit"
						>
							Sign In
						</Button>
					</div>
				</form>
			</AuthWrapperProps>
		</>
	);
};

export default SignIn;
