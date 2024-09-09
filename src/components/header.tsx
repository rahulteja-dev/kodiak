import GradientChip from "./gradientchip";
import NavItem from "./navitem";

const Header = () => {
	return (
		<header className="text-foreground lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-20">
			<div>
				<h3 className="custom-main-text px-14 absolute font-heading">Hy! This is</h3>
				<h1 className="custom-gradient-text text-7xl font-extrabold leading-15 font-heading">
					<a href="/">Rahul Teja</a>
				</h1>
				<div className="pl-14">
					<h2 className="mb-3 text-2xl text-slate-50">Senior Frontend Engineer </h2>
					<GradientChip label="9+ years of experience" />
					<h3 className="mt-3 custom-main-text">
						I design pixel-perfect, seamlessly smooth user experiences using React, Next.js &
						other's. I love what I do!!
					</h3>
					<nav className="hidden lg:block">
						<ul className="mt-16 w-max">
							<NavItem label="About" href="about" />
							<NavItem label="Services" href="services" />
							<NavItem label="Projects" href="projects" />
							<NavItem label="Experience" href="experience" />
							<NavItem label="Blog" href="blog" />
							<NavItem label="Contact" href="contact" />
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
