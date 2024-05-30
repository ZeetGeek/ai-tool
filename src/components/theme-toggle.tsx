"use client";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { HalfMoon, SunLight } from "iconoir-react";

const ThemeToggle = () => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setTheme(savedTheme);
			document.documentElement.classList.add(savedTheme);
		}
	}, []);

	const toggleTheme = () => {
		if (theme === "light") {
			document.documentElement.classList.remove("light");
			document.documentElement.classList.add("dark");
			setTheme("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			document.documentElement.classList.add("light");
			setTheme("light");
			localStorage.setItem("theme", "light");
		}
	};

	return (
		<div
			className={`theme_mode flex items-center ${`theme_mode ${theme === "light" ? "light_theme" : "dark_theme"}`}`}
			onClick={toggleTheme}
		>
			<div className="option_wp">
				{theme === "light" ? <HalfMoon className="icon_24" /> : <SunLight className="icon_24" />}

				{/* page url */}
				<Label
					htmlFor="theme-mode"
					className="text-base font-medium text-neutral-800"
				>
					Dark Mode
				</Label>
			</div>

			<div className="ml-auto">
				<Switch id="theme-mode" />
			</div>
		</div>
	);
};

export default ThemeToggle;
