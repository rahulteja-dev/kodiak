import React from "react";

interface BentoItemProps {
	children: React.ReactNode;
	className?: string;
}

const BentoItem: React.FC<BentoItemProps> = ({ children, className = "" }) => (
	<div
		className={`max-w-md rounded-3xl p-px bg-gradient-to-r from-foreground to-gradientwhite ${className} transition-transform duration-300 ease-in-out hover:scale-105`}
	>
		<div className={`rounded-[calc(1.5rem-1px)] p-6 bg-background h-full`}>{children}</div>
	</div>
);

export default BentoItem;
