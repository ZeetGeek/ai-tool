"use client";
import { useEffect } from "react";
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import MirrorImage from "@/components/mirror-image";

import Footer from "./footer";

interface ThemeProviderProps {
	children: React.ReactNode;
}

const LayoutWrapper = ({ children }: ThemeProviderProps) => {
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") || "light";
		document.documentElement.classList.add(savedTheme);
	}, []);

	const pathName = usePathname();

	return (
		<>
			<AnimatePresence mode="wait">
				<main className="bg_grid_image bg-white text-neutral-800 dark:bg-neutral-950 dark:text-white">
					{pathName === "/sign-up" || pathName === "/sign-in" ? null : (
						<>
							<div className="pb-10 pt-6 md:pb-12 lg:pb-16 lg:pt-8 xl:pb-20 xxl:pb-26">
								<Header isLogged={true} />
							</div>
						</>
					)}
					{children}

					{pathName === "/sign-up" || pathName === "/sign-in" ? null : <Footer />}
					<MirrorImage />
				</main>
			</AnimatePresence>
		</>
	);
};

export default LayoutWrapper;
