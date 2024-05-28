import React from "react";

interface PageTransitionProps {
	children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
	return <>{children}</>;
};

export default PageTransition;
