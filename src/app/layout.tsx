import { fontHeading, inter } from "@/assets/fonts";

import "./globals.css";

import type { Metadata } from "next";
import { cn } from "@/helpers/utils";

export const metadata: Metadata = {
	title: "Rahul Teja A",
	description: "Freelance Frontend Developer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body
				className={cn(
					"min-h-screen bg-background font-inter antialiased",
					inter.variable,
					fontHeading.variable,
				)}
			>
				{children}
			</body>
		</html>
	);
}
