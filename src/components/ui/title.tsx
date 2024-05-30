interface TitleProps {
	children: React.ReactNode;
	size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	className?: string;
}

const Title = ({ children, size, className }: TitleProps) => {
	return (
		<>
			{size === "h1" ? (
				<h1 className={` ${className} h1_title`}>{children}</h1>
			) : size === "h2" ? (
				<h2 className={` ${className} h2_title`}>{children}</h2>
			) : size === "h3" ? (
				<h3 className={` ${className} h3_title`}>{children}</h3>
			) : size === "h4" ? (
				<h4 className={` ${className} h4_title`}>{children}</h4>
			) : size === "h5" ? (
				<h5 className={` ${className} h5_title`}>{children}</h5>
			) : size === "h6" ? (
				<h6 className={` ${className} h6_title`}>{children}</h6>
			) : null}
		</>
	);
};

export default Title;
