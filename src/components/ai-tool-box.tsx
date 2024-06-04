"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Title from "./ui/title";
import { ArrowUpRight, Bookmark, BookmarkSolid, Star, User } from "iconoir-react";
import { Badge } from "@/components/ui/badge";
import Des from "./ui/description";
import Link from "next/link";

interface AiToolBoxProps {
	logo: StaticImageData;
	name: string;
	verified: boolean;
	price: "free" | "paid" | "active-deal" | "freemium" | "free-trail";
	rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
	reviews: number;
	description: string;
	categories: string[];
	href: string;
	hideSave?: boolean;
	hideNavigate?: boolean;
}

const AiToolBox = ({ logo, name, verified, price, rating, reviews, description, categories, href, hideSave, hideNavigate }: AiToolBoxProps) => {
	// router navigation
	const router = useRouter();

	// save button
	const [save, isSave] = useState<boolean>(false);

	return (
		<>
			<div
				onClick={(e) => {
					router.push(href, { scroll: false });
				}}
				className={`hover_effect ai_tool_box relative h-[327px] cursor-pointer rounded-2xl bg-neutral-100 p-6 hover:bg-neutral-200/60`}
			>
				{/* logo, name, rating, review */}
				<div className="flex items-center gap-3">
					{/* logo */}
					<div className="relative flex h-[72px] w-[72px] overflow-hidden rounded-full">
						<Image
							src={logo}
							height={72}
							width={72}
							alt={`${name} logo`}
							className="m-auto"
							placeholder="blur"
						/>
						{verified && (
							<>
								<h1>Verified</h1>
							</>
						)}
					</div>
					{/* name, rating & reviews */}
					<div className="flex flex-col items-start gap-[6px]">
						{/* name */}
						<Title size="h6">{name}</Title>

						{/* rating & reviews */}
						<div className="flex items-center gap-4">
							{/* rating */}
							<span className="inline-flex items-center gap-1 text-sm font-medium text-neutral-500">
								<Star
									height={16}
									width={16}
									strokeWidth={2}
								/>
								{rating} rating
							</span>

							{/* reviews */}
							<span className="inline-flex items-center gap-1 text-sm font-medium text-neutral-500">
								<User
									height={16}
									width={16}
									strokeWidth={2}
								/>
								{reviews}+ reviews
							</span>
						</div>
					</div>
				</div>

				{/* description */}
				<div className="mb-6 mt-4">
					<Des
						size="md"
						className="capitalize text-neutral-500"
					>
						{description}
					</Des>
				</div>

				{/* categories */}

				<div className="flex flex-wrap gap-2">
					{categories.map((item, index) => (
						<Badge
							variant="outline"
							key={index}
						>
							{item}
						</Badge>
					))}
				</div>

				{/* pricing */}
				<div className="absolute right-[24px] top-[24px]">
					<Badge variant={`${price === "paid" ? "paid" : price === "active-deal" ? "active_deal" : price === "free-trail" ? "free_trail" : price === "freemium" ? "freemium" : "free"}`}>{price.replace("-", " ")}</Badge>
				</div>

				{/* save and visit */}
				<div className="absolute bottom-6 right-6 flex flex-col gap-4">
					{/* save btn */}
					{!hideSave && (
						<button
							onClick={(e) => {
								e.stopPropagation();
								isSave(!save);
							}}
							className="box_btn bg-secondary-600 text-black hover:bg-secondary-500"
						>
							{save ? <BookmarkSolid className="icon_24 m-auto" /> : <Bookmark className="icon_24 m-auto" />}
						</button>
					)}

					{/* navigate btn */}
					{!hideNavigate && (
						<Link
							href={href}
							title={name}
							className="box_btn bg-primary-600 text-white hover:bg-primary-500"
						>
							<ArrowUpRight className="icon_24 m-auto text-white" />
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default AiToolBox;

// in this next js code when i click on save button i redirect to href page how to fix this error because i use router on main parent div (.ai_tool_box).
