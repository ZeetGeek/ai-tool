import React from "react";
import Link from "next/link";
import Image from "next/image";
import aiverceIcon from "@/images/logo/aiverce-icon.svg";

interface LogoProps {
	href: string;
	variant?: string;
}

const Logo = ({ href, variant }: LogoProps) => {
	return (
		<>
			<Link
				href={href === "no" ? "#" : href}
				title="aiverce logo"
				className="site_logo"
			>
				<div className={`logo_wp ${variant === "secondary" ? "bg-secondary-600" : "bg-primary-600"}`}>
					<Image
						src={aiverceIcon}
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
