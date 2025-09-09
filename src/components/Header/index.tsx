"use client";

import { useEffect, useState } from "react";
import constants from "@/helpers/constants";

import NavItem from "./navitem";

const Header = () => {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const sections = document.querySelectorAll("section[id]");

		// Set initial active section
		const getActiveSection = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 3;

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i] as HTMLElement;
				const sectionTop = section.offsetTop;
				const sectionHeight = section.offsetHeight;

				if (scrollPosition >= sectionTop) {
					return section.id;
				}
			}

			return sections[0]?.id || "";
		};

		const handleScroll = () => {
			const newActiveSection = getActiveSection();
			if (newActiveSection !== activeSection) {
				setActiveSection(newActiveSection);
			}
		};

		// Set initial active section
		setActiveSection(getActiveSection());

		// Add scroll listener
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className="text-foreground lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-20">
			<div>
				<h3 className="custom-text font-heading px-5 absolute ">{constants.WELCOME_TEXT}</h3>
				<h1 className="custom-gradient-text font-heading font-extrabold text-6xl sm:max-lg:text-7xl leading-11 sm:max-lg:leading-14 px-5">
					<a href="/">{constants.NAME}</a>
				</h1>
				<div className="px-5">
					<h2 className="my-3 custom-title">{constants.TITLE}</h2>
					<h3 className="mt-3 custom-text">
						I architect elegant{" "}
						<span className="font-bold custom-gradient-text">
							full-stack applications and AI solutions
						</span>{" "}
						using React, Next.js, Node.js, and Python, transforming{" "}
						<span className="font-bold custom-gradient-text">
							{" "}
							challenges into business results.
						</span>
					</h3>
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
