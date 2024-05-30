import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import userImage from "@/images/user-profile.jpg";
import okayEmoji from "@/images/okay-emoji.gif";
import { userProfile } from "@/data/user-profile";
import { Bookmark, LogOut, Upload, UserCircle, ViewGrid } from "iconoir-react";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

const UserProfile = () => {
	return (
		<>
			<div className="user_profile">
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>
								<div className="flex items-center gap-4">
									{/* user profile */}
									<div className="h-14 w-14 overflow-hidden rounded-2xl">
										<Image
											src={userImage}
											height={56}
											width={56}
											alt="Profile image"
										/>
									</div>

									{/* user name */}
									<div className="flex flex-col items-start">
										<div className="flex items-center gap-1">
											<span className="text-base font-medium capitalize text-neutral-800">Hey</span>
											<Image
												className="h-[22px] w-[22px]"
												src={okayEmoji}
												height={22}
												width={22}
												alt="Okay emoji"
											/>
										</div>
										<span className="font-semibold capitalize text-primary-600">Devon Lane!</span>
									</div>
								</div>
							</NavigationMenuTrigger>

							<NavigationMenuContent>
								<div className="p-4 md:w-[300px]">
									{/* user image, name & email */}
									<div className="flex items-center gap-[10px]">
										{/* user profile */}
										<div className="h-[46px] w-[46px] overflow-hidden rounded-xl">
											<Image
												src={userImage}
												height={46}
												width={46}
												alt="Profile image"
											/>
										</div>

										{/* user name & email */}
										<div className="flex flex-col items-start">
											<span className="text-base font-semibold capitalize text-neutral-800">Devon lane</span>
											<span className="font-medium  lowercase text-neutral-500">devonlane@gmail.com</span>
										</div>
									</div>

									{/* divider */}
									<div className="my-4 h-[1px] w-full bg-neutral-200"></div>

									{/* user options */}
									<ul className="user_options flex flex-col space-y-[14px] ">
										{userProfile.map((item) => (
											<li key={item.id}>
												<Link
													href={item.href}
													title={item.name}
													className="flex items-center"
												>
													<div className="option_wp">
														{/* icon */}
														{item.href === "/see-profile" ? (
															<UserCircle className="icon_24" />
														) : item.href === "/upload-tools" ? (
															<Upload className="icon_24" />
														) : item.href === "/saved-tools" ? (
															<Bookmark className="icon_24" />
														) : item.href === "/tools-collection" ? (
															<ViewGrid className="icon_24" />
														) : null}

														{/* page url */}
														<span className="text-base font-medium text-neutral-800">{item.name}</span>
													</div>

													{item.href === "/saved-tools" && <span className="option_num">24</span>}
													{item.href === "/tools-collection" && <span className="option_num">4</span>}
												</Link>
											</li>
										))}
										{/* theme mode */}
										<li>
											<ThemeToggle />
										</li>
									</ul>

									{/* divider */}
									<div className="my-4 h-[1px] w-full bg-neutral-200"></div>

									{/* sign out */}
									<div className="option_wp mb-1">
										<LogOut className="icon_24" />
										<span className="text-base font-medium text-neutral-800">Sign Out</span>
									</div>
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</>
	);
};

export default UserProfile;
