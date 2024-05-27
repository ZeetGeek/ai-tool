"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";

const Test = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<>
			{/* <button
				onClick={toggleTheme}
				className={`m-4 bg-blue-500 px-4  py-2 ${theme === "dark" ? "bg-purple-500" : ""}`}
			>
				Toggle Theme
			</button> */}
			<ThemeToggle />
			{/* <button className="bg-neutral-200 px-4 py-2 text-neutral-950 dark:bg-neutral-800 dark:text-white">My Btn</button> */}
		</>

		// in next js create a toggle light and dark mode on button click
		// <button className="bg-neutral-200 px-4 py-2 text-neutral-950 dark:bg-neutral-800 dark:text-white">Toggle Theme</button>
		// 👆 in this example when i click on Toggle Theme Button toggle tailwind css theme
	);
};

export default Test;
