import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { headerLinks } from "@/data/header-links";

const NavLinks = () => {
	const pathName = usePathname();

	return (
		<ul className="nav_links flex space-x-10">
			{headerLinks.map((link) => (
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
												className={` ${pathName === link.href ? "active" : ""} hover_effect header_link group-hover:text-neutral-800 dark:group-hover:text-white`}
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
	);
};

export default NavLinks;
