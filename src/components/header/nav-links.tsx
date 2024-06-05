import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { headerLinks } from "@/data/page-links";

const NavLinks = () => {
	// pathname
	const pathName = usePathname();

	return (
		<ul className="nav_links flex space-x-10">
			{headerLinks.map((item, index) => {
				const link = item.replace(/\s+/g, "-").toLowerCase();
				return (
					<li key={index}>
						{link === "categories" ? (
							<>
								<NavigationMenu>
									<NavigationMenuList>
										<NavigationMenuItem>
											<NavigationMenuTrigger className="navigation_menu_trigger">
												<Link
													href={`/${link}`}
													title={item}
													className={`${pathName === `/${link}` ? "active" : ""} hover_effect header_link group-hover:text-neutral-800 dark:group-hover:text-white`}
												>
													{item}
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
								href={`${link === "home" ? "/" : `/${link}`}`}
								title={item}
								className={` ${pathName === `${link === "home" ? "/" : `/${link}`}` ? "active" : ""} header_link `}
							>
								{item}
							</Link>
						)}
					</li>
				);
			})}
		</ul>
	);
};

export default NavLinks;
