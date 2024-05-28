import React from "react";
import Link from "next/link";
import Image from "next/image";
import aiverceLightIcon from "@/images/logo/aiverce-light-icon.svg";
import aiverceDarkIcon from "@/images/logo/aiverce-dark-icon.svg";

interface LogoProps {
	href: string;
	variant?: "secondary" | "primary";
}

const Logo = ({ href, variant }: LogoProps) => {
	return (
		<>
			<Link
				href={href}
				title="aiverce logo"
				className="site_logo"
			>
				<div className={`logo_wp ${variant === "secondary" ? "bg-secondary-600" : "bg-primary-600"}`}>
					<Image
						src={variant === "secondary" ? aiverceDarkIcon : aiverceLightIcon}
						width={20}
						height={20}
						alt="AIverce logo"
					/>
				</div>
				<span className="logo_text">AIverce</span>
			</Link>
		</>
	);
};

export default Logo;
