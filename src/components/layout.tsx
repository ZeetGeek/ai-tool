"use client";
import { useEffect } from "react";
import Header from "@/components/header";
import { usePathname } from "next/navigation";

interface ThemeProviderProps {
	children: React.ReactNode;
}

const Layout = ({ children }: ThemeProviderProps) => {
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") || "light";
		document.documentElement.classList.add(savedTheme);
	}, []);

	const pathName = usePathname();

	return (
		<>
			<main className="bg-white text-neutral-800 dark:bg-neutral-950 dark:text-white">
				{pathName === "/sign-up" || pathName === "/sign-in" ? null : (
					<>
						<div className="pb-26 pt-8">
							<Header />
						</div>
					</>
				)}

				{children}
			</main>
		</>
	);
};

export default Layout;
