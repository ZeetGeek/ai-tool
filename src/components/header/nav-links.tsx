"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerLinks } from "@/data/page-links";
import CategoriesMenu from "@/components/categories/categories-menu";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const NavLinks = () => {
	const pathName = usePathname();

	return (
		<>
			<ul className="nav_links">
				{headerLinks.map((link, index) => {
					return (
						<li key={index}>
							{link.href === "/categories" ? (
								<>
									<div className="categories_menu hidden lg:block">
										<NavigationMenu>
											<NavigationMenuList>
												<NavigationMenuItem>
													<NavigationMenuTrigger className="navigation_menu_trigger">
														<Link
															href={link.href}
															title={link.title}
															className={`${pathName === link.href ? "active" : ""} hover_effect header_link group-hover:text-neutral-800 dark:group-hover:text-white`}
														>
															{link.title}
														</Link>
													</NavigationMenuTrigger>

													<NavigationMenuContent>
														<NavigationMenuLink>
															<CategoriesMenu />
														</NavigationMenuLink>
													</NavigationMenuContent>
												</NavigationMenuItem>
											</NavigationMenuList>
										</NavigationMenu>
									</div>

									<div className="block lg:hidden">
										<Link
											href={link.href}
											title={link.title}
											className={`${pathName === link.href ? "active" : ""} header_link`}
										>
											{link.title}
										</Link>
									</div>
								</>
							) : (
								<Link
									href={link.href}
									title={link.title}
									className={`${pathName === link.href ? "active" : ""} header_link`}
								>
									{link.title}
								</Link>
							)}
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default NavLinks;
