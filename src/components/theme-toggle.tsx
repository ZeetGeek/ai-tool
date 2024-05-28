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
			className="m-4 rounded-md bg-neutral-100 px-4 py-2  hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-600"
			onClick={toggleTheme}
		>
			Toggle Theme
		</button>
	);
};

export default ThemeToggle;
