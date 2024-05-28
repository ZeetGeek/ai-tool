import React from "react";
import Image from "next/image";

import signInImage from "@/images/auth-imgs/signin-img.png";
import signUpImage from "@/images/auth-imgs/signup-img.png";
import Logo from "./logo";

import appleIcon from "@/images/icons/apple-icon.png";
import googleIcon from "@/images/icons/google-icon.png";
import twitterIcon from "@/images/icons/twitter-icon.png";

interface AuthWrapperProps {
	children: React.ReactNode;
	page?: "sign-in" | "sign-up";
}

const AuthWrapper = ({ page, children }: AuthWrapperProps) => {
	return (
		<>
			<section className="auth_page_wp flex h-screen">
				<div className="flex w-full items-center gap-6">
					{/* content */}
					<div className={`${page === "sign-in" ? "order-2" : "order-1"} flex h-full w-6/12 items-center justify-center`}>
						<div className="flex w-full max-w-[600px] flex-col items-center">
							{/* logo */}
							<Logo
								href="#"
								variant={page === "sign-in" ? "secondary" : "primary"}
							/>
							{/* welcome massage */}
							<div className="mt-9 text-center">
								<h1 className="h4_title mb-3">{page === "sign-in" ? <>Welcome Back!</> : <>Join Us Today!</>}</h1>
								<p className="text-lg font-medium capitalize text-neutral-500">Sign up to access the latest AI tools and resources.</p>
							</div>

							{/* form */}

							<div className="mb-8 mt-10 w-full">{children}</div>

							{/* divider */}
							<div className="flex w-full items-center gap-8">
								<span className="h-[1px] w-full bg-neutral-300"></span>
								<span className="font-medium uppercase text-neutral-500"> OR</span>
								<span className="h-[1px] w-full bg-neutral-300"></span>
							</div>

							{/* authentication platforms */}
							<div className="mt-8 flex w-full items-center gap-8">
								<button className="auth_platform_btn">
									<Image
										src={appleIcon}
										height={24}
										width={24}
										alt="Apple icon"
									/>
								</button>
								<button className="auth_platform_btn">
									<Image
										src={googleIcon}
										height={24}
										width={24}
										alt="Google icon"
									/>
								</button>
								<button className="auth_platform_btn">
									<Image
										src={twitterIcon}
										height={24}
										width={24}
										alt="Twitter icon"
									/>
								</button>
							</div>
						</div>
					</div>

					{/* Image */}
					<div className={`${page === "sign-in" ? "order-1" : "order-2"} h-full w-6/12 ${page === "sign-in" ? "bg-primary-600" : "bg-secondary-600"} flex items-center justify-center rounded-3xl p-6`}>
						<Image
							src={page === "sign-in" ? signInImage : signUpImage}
							height={800}
							width={800}
							alt={`${page === "sign-in" ? "Sign in" : "Sign up"} image`}
							placeholder="blur"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default AuthWrapper;
