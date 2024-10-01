import React from "react";

interface CardProps {
	children: React.ReactNode;
	width?: string;
	className?: string;
}

const Card: React.FC<CardProps> = ({ children, width = "max-w-md", className = "" }) => (
	<div
		className={`${width} rounded-3xl p-px bg-gradient-to-r from-foreground to-gradientwhite ${className} transition-transform opacity-80 lg:duration-300 lg:ease-in-out lg:hover:scale-105`}
	>
		<div className={`rounded-[calc(1.5rem-1px)] p-4 bg-background h-full`}>{children}</div>
	</div>
);

export default Card;
