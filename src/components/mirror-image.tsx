"use client";
import React, { useState, useEffect } from "react";
// Import your CSS module

export default function MirrorImage() {
	const [showImage, setShowImage] = useState(false);

	useEffect(() => {
		const handleKeyDown = (event: any) => {
			if (event.altKey && event.key === "/") {
				setShowImage((prevState) => !prevState);
				console.log("hello word");
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return <div>{showImage && <div className={"mirror_overlay"}></div>}</div>;
}
