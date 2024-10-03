"use client";

import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
	return (
		<>
			<div className="text-foreground mx-auto min-h-screen px-1 py-12 font-inter md:px-4 md:py-20 lg:px-8 lg:py-0 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
				<div className="lg:flex lg:justify-between lg:gap:4">
					<Header />
					<Main />
				</div>
			</div>
		</>
	);
}
