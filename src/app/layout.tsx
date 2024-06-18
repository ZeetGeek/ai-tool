import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import LayoutWrapper from "@/components/layout-wrapper";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../_styles/bootstrap-grid.min.scss";
import "./globals.scss";

// poppins font
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], display: "swap", style: "normal", variable: "--font-poppins" });

// glancyr font
const glancyr = localFont({
	src: [
		{ path: "../_assets/fonts/glancyr/Glancyr-Thin.otf", weight: "100", style: "normal" },
		{ path: "../_assets/fonts/glancyr/Glancyr-ExtraLight.otf", weight: "200", style: "normal" },
		{ path: "../_assets/fonts/glancyr/Glancyr-Light.otf", weight: "300", style: "normal" },
		{ path: "../_assets/fonts/glancyr/Glancyr-Regular.otf", weight: "400", style: "normal" },
		{ path: "../_assets/fonts/glancyr/Glancyr-Medium.otf", weight: "500", style: "normal" },
		{ path: "../_assets/fonts/glancyr/Glancyr-SemiBold.otf", weight: "600", style: "normal" },
		{ path: "../_assets/fonts/glancyr/Glancyr-Bold.otf", weight: "700", style: "normal" },
	],
	variable: "--font-glancyr",
});

export const metadata: Metadata = {
	title: "Discover AI Magic ✨ Aiverse: Every AI Tool You Need ",
	description: "Stop searching, start creating! Aiverse is the ultimate AI directory . We make AI accessible and easy to use. Find the perfect tool to supercharge your creativity ⚡️ and get things done!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<html lang="en">
				<body className={`${poppins.variable} ${glancyr.variable} font-secondary `}>
					<LayoutWrapper>{children}</LayoutWrapper>
					<Analytics />
					<SpeedInsights />
				</body>
			</html>
		</>
	);
}
