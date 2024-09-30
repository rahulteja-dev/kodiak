"use client";

import { useEffect, useState } from "react";
import constants from "@/helpers/constants";

import NavItem from "./navitem";

const Header = () => {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.3 },
		);

		document.querySelectorAll("section[id]").forEach((section) => {
			observer.observe(section);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<header className="text-foreground lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-20">
			<div>
				<h3 className="custom-main-text px-14 absolute font-heading">{constants.WELCOME_TEXT}</h3>
				<h1 className="custom-gradient-text text-6xl font-extrabold leading-14 font-heading">
					<a href="/">{constants.NAME}</a>
				</h1>
				<div className="pl-10">
					<h2 className="mb-3 text-2xl text-slate-50">{constants.TITLE}</h2>
					<h3 className="mt-3 custom-main-text">{constants.DESCRIPTION}</h3>
					<nav className="hidden lg:block">
						<ul className="mt-14 w-max">
							{constants.NAV_ITEMS.map((item, _) => {
								return (
									<NavItem
										key={item.href}
										label={item.label}
										href={item.href}
										activeSection={activeSection}
									/>
								);
							})}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
