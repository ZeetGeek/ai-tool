"use client";
import { useState, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";

interface ThemeProviderProps {
	children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
		localStorage.setItem("theme", theme === "light" ? "dark" : "light");
	};

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") || "light";
		document.documentElement.classList.add(savedTheme);
	}, []);

	useEffect(() => {
		const handleSystemThemeChange = () => {
			if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
				setTheme("dark");
			} else {
				setTheme("light");
			}
		};

		window.addEventListener("resize", handleSystemThemeChange);
		handleSystemThemeChange();

		return () => window.removeEventListener("resize", handleSystemThemeChange);
	}, []);

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
