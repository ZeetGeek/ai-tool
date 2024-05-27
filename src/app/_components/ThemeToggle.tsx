"use client";
import { useEffect, useState } from "react";

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
		<button
			className="bg-blue-500 px-4 py-2 text-white dark:bg-purple-800 "
			onClick={toggleTheme}
		>
			Toggle Theme
		</button>
	);
};

export default ThemeToggle;
