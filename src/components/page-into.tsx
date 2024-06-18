"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

interface PageIntroProps {
	children?: React.ReactNode;
	home: {
		href: string;
		title: string;
	};
}

const PageIntro = ({ children, home }: PageIntroProps) => {
	const pathName = usePathname();

	return (
		<section className="page_intro">
			<div className="container">
				<div className="center_box">
					<div className="mx-auto mb-12 inline-block">
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbLink href={home.href}>{home.title}</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<BreadcrumbPage>{pathName.replaceAll("/", "").replaceAll("-", " ")}</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
					{children}
				</div>
			</div>
		</section>
	);
};

export default PageIntro;
