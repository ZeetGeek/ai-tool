"use client";
import { useEffect } from "react";
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

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
				<main className="bg-white text-neutral-800 dark:bg-neutral-950 dark:text-white">
					{pathName === "/sign-up" || pathName === "/sign-in" ? null : (
						<>
							<div className="pb-26 pt-8">
								<Header isLogged={true} />
							</div>
						</>
					)}
					{children}
				</main>
			</AnimatePresence>
		</>
	);
};

export default LayoutWrapper;