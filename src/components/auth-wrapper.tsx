import React from "react";
import Image from "next/image";

import signInImage from "@/images/auth-imgs/signin-img.png";
import signUpImage from "@/images/auth-imgs/signup-img.png";
import Logo from "./logo";

import { AppleMac, GoogleCircle, X } from "iconoir-react";
import Link from "next/link";

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
								href="/"
								variant={page === "sign-in" ? "secondary" : "primary"}
							/>
							{/* welcome massage */}
							<div className="mt-9 text-center">
								<h1 className="h4_title mb-3">{page === "sign-in" ? <>Welcome Back!</> : <>Join Us Today!</>}</h1>
								<p className="text-lg font-medium capitalize text-neutral-500">{page === "sign-in" ? "Sign in to explore the latest AI tools and resources." : "Sign up to access the latest AI tools and resources."} </p>
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
								<button
									name="apple auth btn"
									className="auth_platform_btn"
								>
									<AppleMac className="icon_24 text-neutral-800" />
								</button>
								<button
									name="google auth btn"
									className="auth_platform_btn"
								>
									<GoogleCircle className="icon_24 text-neutral-800" />
								</button>
								<button
									name="x auth btn"
									className="auth_platform_btn"
								>
									<X className="icon_24 text-neutral-800" />
								</button>
							</div>

							{/* account option */}
							<p className="mt-10 inline-block">
								<span className="text-lg font-medium text-neutral-500">{page === "sign-in" ? "Don’t have an account yet?" : "If You have an account?"}</span>{" "}
								<Link
									className="hover_effect text-neutral-800 hover:underline hover:underline-offset-4"
									href={page === "sign-in" ? "/sign-up" : "/sign-in"}
									title={page === "sign-in" ? "Sign up" : "Sign in"}
								>
									{page === "sign-in" ? "Sign Up" : "Sign In"}
								</Link>
							</p>
						</div>
					</div>

					{/* Image */}
					<div className={`${page === "sign-in" ? "order-1" : "order-2 scale-x-[-1]"} h-full w-6/12 ${page === "sign-in" ? "bg-primary-600" : "bg-secondary-600"} flex items-center justify-center rounded-3xl p-6`}>
						<Image
							src={page === "sign-in" ? signInImage : signUpImage}
							height={800}
							width={800}
							alt={`${page === "sign-in" ? "Sign in" : "Sign up"} image`}
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default AuthWrapper;
