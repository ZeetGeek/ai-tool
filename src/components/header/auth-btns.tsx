import Link from "next/link";
import { Button } from "../ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

import { User, UserPlus, UserBadgeCheck } from "iconoir-react";

const AuthBtns = () => {
	return (
		<>
			<div className="hidden items-center vsm:flex">
				<Button
					name="sign in btn"
					className="pl-0"
					variant="link"
					asChild
				>
					<Link
						href="/sign-in"
						title="Sign in account"
					>
						Sign In
					</Link>
				</Button>
				<Button
					name="sign up btn"
					size="md"
					asChild
				>
					<Link
						href="/sign-up"
						title="Create a account"
					>
						Sign up
					</Link>
				</Button>
			</div>

			<div className="header_auth_dropdown block vsm:hidden">
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>
								<User
									height={32}
									width={32}
									strokeWidth={2}
									className="text-neutral-800"
								/>
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<NavigationMenuLink>
									<ul className="flex w-fit flex-col space-y-3 p-4">
										<li>
											<Link
												href="/sign-up"
												title="create a account"
												className="auth_dropdown_item"
											>
												<UserPlus className="icon_24" />
												<span>Sign Up</span>
											</Link>
										</li>
										<li>
											<Link
												href={"/sign-up"}
												title={"create a account"}
												className="auth_dropdown_item"
											>
												<UserBadgeCheck className="icon_24" />
												<span>Sign In</span>
											</Link>
										</li>
									</ul>
								</NavigationMenuLink>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</>
	);
};

export default AuthBtns;
