import "./globals.css";

import type { Metadata } from "next";

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
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body>{children}</body>
		</html>
	);
}
