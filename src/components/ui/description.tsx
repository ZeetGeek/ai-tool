interface DescriptionProps {
	children: React.ReactNode;
	className?: string;
	size: "lg" | "md" | "sm";
}

const Des = ({ children, className, size }: DescriptionProps) => {
	return <p className={`${className ? className : ""} description ${size}`}>{children}</p>;
};

export default Des;
