import React from "react";
import { categoriesData } from "@/data/categories";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const CategoriesMenu = () => {
	return (
		<>
			{/* TODO make navigation menu effect as component and remove navigation menu component from shad cn */}
			<div className="invisible absolute left-[50%] z-50 translate-x-[-50%] scale-95 pt-11 opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:scale-100 group-hover:pt-9 group-hover:opacity-100">
				<div className="categories_menu_wp grid grid-cols-4 gap-6">
					{categoriesData.map(
						(item, index) =>
							item.id <= 6 && (
								<Link
									key={item.id}
									href={item.href}
									title={`${item.title}`}
									className="category_menu_links"
								>
									{/* <div> */}
									<div className={`category_menu_box hover_effect flex rounded-2xl`}>
										<Image
											src={item.icon}
											className="m-auto"
											height={250}
											width={250}
											alt={`${item.title} image`}
										/>
									</div>

									<div className="mt-4">
										<span className="text-lg font-medium capitalize text-neutral-800">{item.title}</span>
										<p className="text-base font-medium capitalize text-neutral-500">{item.shortDes}</p>
									</div>
									{/* </div> */}
								</Link>
							)
					)}

					<Link
						href="/categories"
						title="View all categories"
						className="category_menu_links"
					>
						<div className={`category_menu_box flex rounded-2xl`}>
							<Button
								size="lg"
								className="pointer-events-none m-auto bg-white text-center text-neutral-800"
							>
								Explore More
							</Button>
						</div>

						<div className="mt-4 text-center">
							<span className="text-lg font-medium capitalize text-neutral-800">Productivity Tools</span>
							<p className="text-base font-medium capitalize text-neutral-500">Lorem ipsum dolor sit amet consectetur.</p>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default CategoriesMenu;
