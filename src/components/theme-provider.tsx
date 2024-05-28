"use client";
import { useEffect } from "react";

interface ThemeProviderProps {
	children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") || "light";
		document.documentElement.classList.add(savedTheme);
	}, []);

	return <> {children} </>;
};

export default ThemeProvider;
