import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import menuIcon from "@/images/icons/menu-icon.svg";
import { Sheet, SheetContent, SheetHeader, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import NavLinks from "./nav-links";
import { headerLinks } from "@/data/page-links";

const HeaderSidebar = () => {
	const pathName = usePathname();

	return (
		<div className="sidebar_header">
			<Sheet>
				<SheetTrigger>
					<div className="hover_effect rounded-md p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800">
						<Image
							src={menuIcon}
							height={36}
							width={36}
							alt="menu icon"
							className="static_dark_icon"
							placeholder="blur"
						/>
					</div>
				</SheetTrigger>
				<SheetContent side="left">
					<SheetHeader>
						<div className="block lg:hidden">
							<ul className="nav_links">
								{headerLinks.map((link) => (
									<li key={link.id}>
										<SheetClose asChild>
											<Link
												href={link.href}
												title={link.title}
												className={`${pathName === link.href ? "active" : ""} header_link`}
											>
												{link.title}
											</Link>
										</SheetClose>
									</li>
								))}
							</ul>
						</div>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default HeaderSidebar;
