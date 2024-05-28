"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";
import { HeaderLinks } from "@/data/header-links";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import menuIcon from "@/images/icons/menu-icon.svg";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import "@/style/header.scss";

const Header = () => {
	const pathName = usePathname();

	return (
		<>
			<header>
				<div className="container">
					<div className="flex items-center justify-between">
						{/* logo & menu */}
						<div className="inline-flex items-center gap-5">
							{/* menu icon */}
							<Sheet>
								<SheetTrigger>
									<div className="rounded-md p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800">
										<Image
											src={menuIcon}
											height={36}
											width={36}
											alt="menu icon"
											className="static_dark_icon"
										/>
									</div>
								</SheetTrigger>
								<SheetContent side="left">
									<SheetHeader>
										<SheetTitle>Are you absolutely sure?</SheetTitle>
										<SheetDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</SheetDescription>
									</SheetHeader>
								</SheetContent>
							</Sheet>

							{/* logo */}
							<Logo href="/" />
						</div>

						{/* menu links */}
						<ul className="flex space-x-10">
							{HeaderLinks.map((link) => (
								<li key={link.id}>
									{link.href === "/categories" ? (
										<>
											<NavigationMenu>
												<NavigationMenuList>
													<NavigationMenuItem>
														<NavigationMenuTrigger className="navigation_menu_trigger">
															<Link
																href={link.href}
																title={link.title}
																className={` ${pathName === link.href ? "active" : ""} header_link group-hover:text-neutral-800 dark:group-hover:text-white`}
															>
																{link.title}
															</Link>
														</NavigationMenuTrigger>

														<NavigationMenuContent>
															<NavigationMenuLink>Link</NavigationMenuLink>
														</NavigationMenuContent>
													</NavigationMenuItem>
												</NavigationMenuList>
											</NavigationMenu>
										</>
									) : (
										<Link
											href={link.href}
											title={link.title}
											className={` ${pathName === link.href ? "active" : ""} header_link `}
										>
											{link.title}
										</Link>
									)}
								</li>
							))}
						</ul>

						{/* auth buttons */}
						<div className="flex items-center">
							<Button
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
							<Button asChild>
								<Link
									href="/sign-up"
									title="Create a account"
								>
									Sign up
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
